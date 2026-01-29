import { StyleDefinition } from './types';

// Simple ID generator to avoid external dependencies in this specific output format
const generateId = () => Math.random().toString(36).substr(2, 9);

export const INITIAL_STYLES: StyleDefinition[] = [
  {
    id: generateId(),
    selectors: ['.main', '.primary', '.foreground'],
    description: 'Primary dark fill with white outline',
    rules: [
      { id: generateId(), property: 'fill', value: '#1a1a1a' },
      { id: generateId(), property: 'stroke', value: '#ffffff' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.secondary', '.background'],
    description: 'Secondary white fill with dark outline',
    rules: [
      { id: generateId(), property: 'fill', value: '#ffffff' },
      { id: generateId(), property: 'stroke', value: '#1a1a1a' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.tertiary', '.neutral'],
    description: 'Tertiary gray fill',
    rules: [
      { id: generateId(), property: 'fill', value: '#e5e7eb' },
      { id: generateId(), property: 'stroke', value: '#374151' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.accent', '.highlight'],
    description: 'Cyan accent color',
    rules: [
      { id: generateId(), property: 'fill', value: '#00ccff' },
      { id: generateId(), property: 'stroke', value: '#06a0c6' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.red', '.danger'],
    description: 'Semantic Red',
    rules: [
      { id: generateId(), property: 'fill', value: '#ef4444' },
      { id: generateId(), property: 'stroke', value: '#b91c1c' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.green', '.success'],
    description: 'Semantic Green',
    rules: [
      { id: generateId(), property: 'fill', value: '#22c55e' },
      { id: generateId(), property: 'stroke', value: '#15803d' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.st-dark'],
    description: 'Stroke modifier: Dark',
    rules: [
      { id: generateId(), property: 'stroke', value: '#000000' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
      { id: generateId(), property: 'fill', value: 'none' }, 
    ],
  },
  {
    id: generateId(),
    selectors: ['.st-light'],
    description: 'Stroke modifier: Light',
    rules: [
      { id: generateId(), property: 'stroke', value: '#ffffff' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
      { id: generateId(), property: 'fill', value: 'none' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.dashed'],
    description: 'Stroke modifier: Dashed Round',
    rules: [
      { id: generateId(), property: 'stroke-dasharray', value: '4 8' },
      { id: generateId(), property: 'fill', value: 'none' },
      { id: generateId(), property: 'stroke', value: '#636363' },
      { id: generateId(), property: 'stroke-width', value: '3pt' },
      { id: generateId(), property: 'stroke-linecap', value: 'round' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.glow'],
    description: 'Effect: Blue Glow',
    rules: [
      { id: generateId(), property: 'filter', value: 'drop-shadow(0 0 10px #0ea5e9)' },
      // Adding a fill just so the preview shape is visible, though user only asked for filter
      { id: generateId(), property: 'fill', value: '#e0f2fe' },
      { id: generateId(), property: 'stroke', value: 'none' },
    ],
  },
  // Animations
  {
    id: generateId(),
    selectors: ['.anim-blink'],
    description: 'Animation: Blink',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-blink 1.5s infinite ease-in-out' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.anim-beat'],
    description: 'Animation: Heartbeat',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-beat 1s infinite ease-in-out' },
      { id: generateId(), property: 'transform-box', value: 'fill-box' },
      { id: generateId(), property: 'transform-origin', value: 'center' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.anim-swing'],
    description: 'Animation: Swing',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-swing 2s infinite ease-in-out' },
      { id: generateId(), property: 'transform-box', value: 'fill-box' },
      { id: generateId(), property: 'transform-origin', value: 'center' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.slide-r'],
    description: 'Animation: Slide Right',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-slide-r 2s infinite ease-in-out' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.slide-l'],
    description: 'Animation: Slide Left',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-slide-l 2s infinite ease-in-out' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.slide-u'],
    description: 'Animation: Slide Up',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-slide-u 2s infinite ease-in-out' },
    ],
  },
  {
    id: generateId(),
    selectors: ['.slide-d'],
    description: 'Animation: Slide Down',
    rules: [
      { id: generateId(), property: 'animation', value: 'kf-slide-d 2s infinite ease-in-out' },
    ],
  },
];