export interface CssRule {
  id: string;
  property: string;
  value: string;
}

export interface StyleDefinition {
  id: string;
  selectors: string[]; // e.g. ['.primary', '.main']
  rules: CssRule[];
  description?: string;
}

export enum ViewMode {
  GRID = 'GRID',
  CODE = 'CODE',
}

export type ShapeType = 'square' | 'circle' | 'triangle' | 'line' | 'path';
