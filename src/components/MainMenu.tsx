
import React from 'react';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

interface MainMenuProps {
  onNavigate: (screen: string) => void;
  user: { email: string; roomNumber: string } | null;
}

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate, user }) => {
  const { language, changeLanguage, t } = useTranslation();

  const menuItems = [
    {
      id: 'wakeup',
      title: t.menu.wakeup.title,
      subtitle: t.menu.wakeup.subtitle,
      icon: 'fa-bell',
      gradient: 'from-gold via-gold-light to-gold-dark',
      hoverColor: 'hover:from-gold-dark hover:to-gold'
    },
    {
      id: 'table',
      title: t.menu.table.title,
      subtitle: t.menu.table.subtitle,
      icon: 'fa-utensils',
      gradient: 'from-emerald-600 via-emerald-500 to-emerald-700',
      hoverColor: 'hover:from-emerald-700 hover:to-emerald-500'
    },
    {
      id: 'cleaning',
      title: t.menu.cleaning.title,
      subtitle: t.menu.cleaning.subtitle,
      icon: 'fa-broom',
      gradient: 'from-blue-600 via-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-500'
    },
    {
      id: 'wine',
      title: t.menu.wine.title,
      subtitle: t.menu.wine.subtitle,
      icon: 'fa-wine-glass-alt',
      gradient: 'from-purple-600 via-purple-500 to-purple-700',
      hoverColor: 'hover:from-purple-700 hover:to-purple-500'
    },
    {
      id: 'services',
      title: t.menu.services.title,
      subtitle: t.menu.services.subtitle,
      icon: 'fa-concierge-bell',
      gradient: 'from-emerald-600 via-emerald-500 to-emerald-700',
      hoverColor: 'hover:from-emerald-700 hover:to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
      {/* Professional Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic floating particles - responsive count */}
        <div className="absolute inset-0 main-menu-bg-particles">
          {[...Array(typeof window !== 'undefined' && window.innerWidth > 768 ? 20 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Sophisticated gradient orbs with mobile optimization */}
        <div className="absolute top-1/6 left-1/12 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-gold/15 via-gold/8 to-transparent rounded-full blur-2xl animate-drift opacity-70" 
             style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 right-1/12 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-platinum/12 via-platinum/6 to-transparent rounded-full blur-2xl animate-drift-reverse opacity-50" 
             style={{animationDuration: '12s', animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-500/12 via-emerald-500/6 to-transparent rounded-full blur-xl animate-drift opacity-60" 
             style={{animationDuration: '10s', animationDelay: '4s'}} />
        <div className="absolute bottom-1/6 left-1/3 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-xl animate-drift-reverse opacity-40" 
             style={{animationDuration: '14s', animationDelay: '1s'}} />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-transparent to-charcoal-light opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent animate-shimmer" />
        
        {/* Dynamic light rays - mobile responsive */}
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-gold/25 to-transparent transform rotate-6 animate-ray" 
               style={{animationDuration: '15s'}} />
          <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-platinum/20 to-transparent transform -rotate-8 animate-ray-reverse" 
               style={{animationDuration: '18s', animationDelay: '5s'}} />
          <div className="hidden sm:block absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/15 to-transparent transform rotate-12 animate-ray" 
               style={{animationDuration: '20s', animationDelay: '8s'}} />
        </div>
        
        {/* Pulsing ambient glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-radial from-gold/10 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Header - Mobile optimized */}
      <div className="bg-gradient-to-r from-charcoal-light via-charcoal-lighter to-charcoal-light border-b border-gold/30 p-4 sm:p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="animate-slide-down">
            <h1 className="font-inter text-2xl sm:text-3xl font-bold text-gold text-shadow-gold">Hotel 5Star</h1>
            <p className="text-platinum-light text-xs sm:text-sm font-medium">
              {language === 'en' ? 'Welcome, room' : 'Välkommen, rum'} <span className="text-gold font-bold">{user?.roomNumber}</span>
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageToggle currentLanguage={language} onLanguageChange={changeLanguage} />
            <button
              onClick={() => onNavigate('settings')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/20 to-gold/30 rounded-full flex items-center justify-center border border-gold/40 luxury-shadow button-hover touch-manipulation"
            >
              <i className="fas fa-cog text-gold text-base sm:text-lg icon-hover"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section - Mobile optimized */}
      <div className="p-4 sm:p-6 relative z-10">
        <div className="luxury-card rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 animate-fade-in professional-card-hover">
          <div className="flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 animate-pulse-glow shadow-xl">
              <i className="fas fa-star text-charcoal text-lg sm:text-2xl transition-transform duration-300 hover:scale-110"></i>
            </div>
            <div>
              <h2 className="font-inter text-lg sm:text-2xl font-semibold gradient-text-gold mb-1">
                {t.menu.greeting}
              </h2>
              <p className="text-platinum-light text-xs sm:text-sm font-medium leading-relaxed">
                {t.menu.helpText}
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - Enhanced Mobile Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 main-menu-container">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="luxury-card rounded-2xl p-4 sm:p-6 hover:border-gold/50 transition-all duration-500 animate-scale-in text-left group professional-card-hover relative overflow-hidden service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="flex items-start relative z-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} ${item.hoverColor} rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl service-icon`}>
                  <i className={`fas ${item.icon} text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300 text-base sm:text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-platinum text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-platinum-light transition-colors duration-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <i className="fas fa-chevron-right text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-base sm:text-lg"></i>
              </div>
            </button>
          ))}
        </div>

        {/* Professional Quick Stats - Enhanced Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {[
            { value: '24/7', label: t.menu.stats.support, icon: 'fa-headset', color: 'from-blue-500 to-cyan-600', accent: 'text-cyan-400' },
            { value: '5★', label: t.menu.stats.hotel, icon: 'fa-star', color: 'from-gold to-yellow-500', accent: 'text-gold' },
            { value: 'Premium', label: t.menu.stats.services, icon: 'fa-crown', color: 'from-purple-500 to-indigo-600', accent: 'text-purple-400' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Card with professional shadow and hover effects - Mobile optimized */}
              <div className="relative bg-gradient-to-br from-charcoal-light/80 via-charcoal-lighter/60 to-charcoal-light/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl animate-scale-in">
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" 
                     style={{boxShadow: `0 0 30px rgba(255, 215, 0, 0.3)`}} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon with sophisticated animation - Mobile responsive */}
                  <div className="relative mb-2 sm:mb-3 lg:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                      <i className={`fas ${stat.icon} ${stat.accent} text-sm sm:text-base lg:text-lg transition-all duration-500 group-hover:scale-110`}></i>
                    </div>
                    
                    {/* Pulse ring animation */}
                    <div className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 animate-ping`} />
                  </div>
                  
                  {/* Value with enhanced typography - Mobile responsive */}
                  <div className="mb-1 sm:mb-2">
                    <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent font-inter group-hover:scale-110 transition-transform duration-300 inline-block">
                      {stat.value}
                    </span>
                  </div>
                  
                  {/* Label with improved readability - Mobile responsive */}
                  <div className="text-xs sm:text-sm lg:text-sm font-medium text-platinum-light group-hover:text-white transition-colors duration-300 leading-relaxed px-1">
                    {stat.label}
                  </div>
                </div>
                
                {/* Subtle inner glow effect */}
                <div className="absolute inset-1 rounded-lg sm:rounded-xl bg-gradient-to-br from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
