import { GoogleGenAI, Type } from "@google/genai";
import { CssRule } from '../types';

const generateId = () => Math.random().toString(36).substr(2, 9);

export const generateCssFromPrompt = async (prompt: string): Promise<CssRule[]> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key not found");
      throw new Error("API Key not found. Please set REACT_APP_GEMINI_API_KEY.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are an expert CSS engine for SVG graphics. 
    Your goal is to translate natural language descriptions into a list of CSS properties.
    Return ONLY valid CSS properties compatible with SVGs (e.g., fill, stroke, stroke-width, stroke-dasharray, opacity, filter).
    Do not include selectors, just the rules.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              property: { type: Type.STRING, description: "The CSS property name (kebab-case)" },
              value: { type: Type.STRING, description: "The CSS value" }
            },
            required: ["property", "value"]
          }
        }
      }
    });

    const rawData = response.text;
    if (!rawData) return [];

    const parsedData = JSON.parse(rawData);
    
    return parsedData.map((item: any) => ({
      id: generateId(),
      property: item.property,
      value: item.value
    }));

  } catch (error) {
    console.error("Error generating CSS:", error);
    throw error;
  }
};
