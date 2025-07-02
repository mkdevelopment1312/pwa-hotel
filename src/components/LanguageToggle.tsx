
import React from 'react';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'sv';
  onLanguageChange: (language: 'en' | 'sv') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2 glass-effect rounded-full p-1 border border-gold/30">
      <button
        onClick={() => onLanguageChange('en')}
        className={`language-toggle px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'en' 
            ? 'active text-gold' 
            : 'text-platinum-dark hover:text-platinum'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('sv')}
        className={`language-toggle px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'sv' 
            ? 'active text-gold' 
            : 'text-platinum-dark hover:text-platinum'
        }`}
      >
        SV
      </button>
    </div>
  );
};

export default LanguageToggle;
