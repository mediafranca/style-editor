import { StyleDefinition } from '../types';

export const generateCssString = (styles: StyleDefinition[]): string => {
  return styles.map(style => {
    const selectorString = style.selectors.join(', ');
    const rulesString = style.rules
      .map(rule => `  ${rule.property}: ${rule.value};`)
      .join('\n');
    
    return `${selectorString} {\n${rulesString}\n}`;
  }).join('\n\n');
};

export const updateDynamicStyles = (styles: StyleDefinition[]) => {
  const css = generateCssString(styles);
  const styleTag = document.getElementById('dynamic-svg-styles');
  if (styleTag) {
    styleTag.textContent = css;
  }
};
