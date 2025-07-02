
import React, { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

interface LoginProps {
  onLogin: (userData: { email: string; roomNumber: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const { language, changeLanguage, t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && roomNumber) {
      onLogin({ email, roomNumber });
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

      <div className="w-full max-w-md mx-auto animate-fade-in relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-full flex items-center justify-center luxury-shadow animate-glow mb-4">
            <span className="text-2xl font-bold text-charcoal font-inter">5★</span>
          </div>
          <h1 className="font-inter text-3xl font-bold text-gold text-shadow-gold mb-2">
            {t.login.title}
          </h1>
          <p className="text-platinum-light text-sm">
            {t.login.subtitle}
          </p>
        </div>

        {/* Login Form */}
        <div className="glass-effect rounded-2xl p-8 border border-gold/20 luxury-shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              <label className="block text-platinum text-sm font-medium mb-2">
                {t.login.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-charcoal-lighter border border-gold/30 rounded-lg text-white placeholder-slate-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                placeholder={t.login.email}
                required
              />
            </div>

            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <label className="block text-platinum text-sm font-medium mb-2">
                {t.login.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-charcoal-lighter border border-gold/30 rounded-lg text-white placeholder-slate-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                placeholder={t.login.password}
                required
              />
            </div>

            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <label className="block text-platinum text-sm font-medium mb-2">
                {t.login.room}
              </label>
              <input
                type="text"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="w-full px-4 py-3 bg-charcoal-lighter border border-gold/30 rounded-lg text-white placeholder-slate-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                placeholder={t.login.room}
                required
              />
            </div>

            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button
                type="submit"
                className="w-full luxury-gradient text-charcoal font-bold py-4 px-6 rounded-lg text-lg button-hover relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-sign-in-alt mr-3 text-xl group-hover:scale-110 transition-transform"></i>
                  {t.login.signIn}
                </span>
              </button>
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.5s'}}>
              <a href="#" className="text-gold hover:text-gold-light text-sm font-medium transition-colors duration-300">
                {t.login.forgotPassword}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
