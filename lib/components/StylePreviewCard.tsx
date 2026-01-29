import React from 'react';
import { StyleDefinition, ShapeType } from '../types';
import { Edit2, Copy } from 'lucide-react';

interface Props {
  styleDef: StyleDefinition;
  onClick: () => void;
  shape: ShapeType;
}

const StylePreviewCard: React.FC<Props> = ({ styleDef, onClick, shape }) => {
  // We strip the dot for the className usage in the SVG
  // We apply ALL selectors to the preview to ensure it matches any of them
  const classNames = styleDef.selectors.map(s => s.replace('.', '')).join(' ');

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(styleDef.selectors.join(', '));
  };

  const renderShape = () => {
    const commonProps = {
      className: `transition-all duration-300 ${classNames}`
    };

    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="35" {...commonProps} />;
      case 'triangle':
        return <polygon points="50,15 85,80 15,80" {...commonProps} />;
      case 'line':
        return <line x1="15" y1="15" x2="85" y2="85" {...commonProps} />;
      case 'path':
        // A generic organic blob/star shape
        return <path d="M50 10 C20 10 10 40 10 50 S 20 90 50 90 S 90 60 90 50 S 80 10 50 10 Z" {...commonProps} />;
      case 'square':
      default:
        return <rect x="15" y="15" width="70" height="70" rx="8" {...commonProps} />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer hover:border-blue-400 flex flex-col items-center gap-4"
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button 
          onClick={handleCopy}
          className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-600"
          title="Copy Selectors"
        >
          <Copy size={14} />
        </button>
        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
           <Edit2 size={14} />
        </div>
      </div>

      {/* The Visual Preview - Darker Background */}
      <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg border border-gray-300 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] shadow-inner">
        <svg width="64" height="64" viewBox="0 0 100 100" className="overflow-visible">
          {renderShape()}
        </svg>
      </div>

      <div className="w-full text-center">
        <div className="flex flex-wrap gap-1 justify-center mb-1">
          {styleDef.selectors.map(sel => (
            <span key={sel} className="text-xs font-mono font-medium bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
              {sel}
            </span>
          ))}
        </div>
        {styleDef.description && (
          <p className="text-xs text-gray-400 truncate px-2">{styleDef.description}</p>
        )}
      </div>
    </div>
  );
};

export default StylePreviewCard;