
import React, { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

interface WelcomeScreenProps {
  onContinue: () => void;
  isInstalled: boolean;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, isInstalled }) => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { language, changeLanguage, t } = useTranslation();

  React.useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold/8 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-platinum/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gold/12 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageToggle currentLanguage={language} onLanguageChange={changeLanguage} />
      </div>

      <div className="text-center max-w-md mx-auto animate-fade-in relative z-10">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-full flex items-center justify-center luxury-shadow animate-glow relative professional-hover">
            <span className="text-4xl font-bold text-charcoal font-inter text-shadow-gold">5★</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="font-inter text-5xl font-bold mb-4 text-gold text-shadow-gold">
          {t.welcome.title}
        </h1>
        <p className="text-platinum-light text-xl mb-3 font-medium">
          {t.welcome.subtitle}
        </p>
        <p className="text-slate-light text-sm mb-8 leading-relaxed whitespace-pre-line">
          {t.welcome.description}
        </p>

        {/* PWA Status */}
        <div className="mb-8 glass-effect rounded-xl p-6 border border-gold/20 professional-hover">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mr-4 animate-bounce-subtle">
              <i className="fas fa-mobile-alt text-charcoal text-xl icon-hover"></i>
            </div>
            <span className="text-platinum-light font-semibold text-lg">{t.welcome.pwStatus}</span>
          </div>
          <p className="text-sm">
            {isInstalled ? (
              <span className="text-green-400 flex items-center justify-center">
                <i className="fas fa-check mr-2 text-lg icon-hover"></i>
                <span className="font-medium">{t.welcome.installed}</span>
              </span>
            ) : (
              <span className="text-gold flex items-center justify-center">
                <i className="fas fa-download mr-2 text-lg icon-hover"></i>
                <span className="font-medium">{t.welcome.readyToInstall}</span>
              </span>
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {showInstallPrompt && !isInstalled && (
            <button
              onClick={handleInstall}
              className="w-full luxury-gradient text-charcoal font-bold py-4 px-8 rounded-xl text-lg button-hover relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-download mr-3 text-xl group-hover:scale-110 transition-transform"></i>
                {t.welcome.install}
              </span>
            </button>
          )}
          
          <button
            onClick={onContinue}
            className="w-full bg-transparent border-2 border-gold text-gold font-bold py-4 px-8 rounded-xl text-lg relative overflow-hidden group button-hover"
          >
            <span className="relative z-10 flex items-center justify-center">
              <i className="fas fa-arrow-right mr-3 text-xl group-hover:translate-x-2 transition-transform"></i>
              {t.welcome.continueToLogin}
            </span>
            <div className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          {[
            { icon: 'fa-wifi', text: t.welcome.features.offline, color: 'text-blue-400' },
            { icon: 'fa-shield-alt', text: t.welcome.features.secure, color: 'text-green-400' },
            { icon: 'fa-bolt', text: t.welcome.features.fast, color: 'text-yellow-400' },
            { icon: 'fa-crown', text: t.welcome.features.luxury, color: 'text-gold' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center glass-effect-light rounded-lg p-3 professional-hover animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <i className={`fas ${feature.icon} mr-3 ${feature.color} text-lg icon-hover`}></i>
              <span className="text-xs text-platinum font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
