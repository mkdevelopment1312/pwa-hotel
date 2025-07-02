
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageToggle from './LanguageToggle';

interface SettingsProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
  onUpdateUser: (user: { email: string; roomNumber: string }) => void;
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack, user, onUpdateUser, onLogout }) => {
  const { language, changeLanguage, t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [newRoomNumber, setNewRoomNumber] = useState(user?.roomNumber || '');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleUpdateRoom = () => {
    if (user && newRoomNumber.trim()) {
      onUpdateUser({ ...user, roomNumber: newRoomNumber.trim() });
      setIsEditing(false);
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  const clearAllData = () => {
    if (confirm(t.settings.clearDataConfirm)) {
      localStorage.clear();
      alert(t.settings.allDataCleared);
    }
  };

  const exportData = () => {
    const data = {
      wakeUpCalls: JSON.parse(localStorage.getItem('wakeup_calls') || '[]'),
      tableReservations: JSON.parse(localStorage.getItem('table_reservations') || '[]'),
      cleaningRequests: JSON.parse(localStorage.getItem('cleaning_requests') || '[]'),
      wineOrders: JSON.parse(localStorage.getItem('wine_orders') || '[]'),
      serviceRequests: JSON.parse(localStorage.getItem('service_requests') || '[]')
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hotel5star-data.json';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Header */}
      <div className="bg-dark-light border-b border-gold/20 p-6">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-gold/30 hover:bg-gold/30 transition-all duration-300 mr-4"
          >
            <i className="fas fa-arrow-left text-gold"></i>
          </button>
          <div>
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.settings.title}</h1>
            <p className="text-silver text-sm">{t.settings.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-md mx-auto animate-fade-in space-y-6">
          {/* User Info */}
          <div className="glass-effect rounded-lg p-6 border border-gold/20">
            <h2 className="font-semibold text-white mb-4 flex items-center">
              <i className="fas fa-user text-gold mr-2"></i>
              {t.settings.accountInfo}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-silver text-sm mb-2">{t.settings.email}</label>
                <div className="bg-dark-light border border-gray-600 rounded-lg px-4 py-3 text-gray-400">
                  {user?.email}
                </div>
              </div>
              
              <div>
                <label className="block text-silver text-sm mb-2">{t.settings.roomNumber}</label>
                {isEditing ? (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newRoomNumber}
                      onChange={(e) => setNewRoomNumber(e.target.value)}
                      className="flex-1 bg-dark-light border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                    <button
                      onClick={handleUpdateRoom}
                      className="px-4 py-3 bg-gold text-dark rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      <i className="fas fa-check"></i>
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setNewRoomNumber(user?.roomNumber || '');
                      }}
                      className="px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-dark-light border border-gray-600 rounded-lg px-4 py-3">
                    <span className="text-white">{user?.roomNumber}</span>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-gold hover:text-yellow-400 transition-colors"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div className="glass-effect rounded-lg p-6 border border-gold/20">
            <h2 className="font-semibold text-white mb-4 flex items-center">
              <i className="fas fa-cog text-gold mr-2"></i>
              {t.settings.appSettings}
            </h2>
            
            <div className="space-y-3">
              {/* Language Setting */}
              <div className="bg-dark-light border border-gray-600 rounded-lg px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fas fa-language text-gold mr-3"></i>
                    <div>
                      <span className="text-white block">{t.settings.language}</span>
                      <span className="text-silver text-sm">{t.settings.languageDesc}</span>
                    </div>
                  </div>
                  <LanguageToggle currentLanguage={language} onLanguageChange={changeLanguage} />
                </div>
              </div>
              
              <button
                onClick={exportData}
                className="w-full bg-dark-light border border-gray-600 rounded-lg px-4 py-3 text-left text-white hover:border-gold transition-colors flex items-center justify-between"
              >
                <div className="flex items-center">
                  <i className="fas fa-download text-gold mr-3"></i>
                  <span>{t.settings.exportData}</span>
                </div>
                <i className="fas fa-chevron-right text-silver"></i>
              </button>
              
              <button
                onClick={clearAllData}
                className="w-full bg-dark-light border border-red-600 rounded-lg px-4 py-3 text-left text-red-400 hover:border-red-500 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center">
                  <i className="fas fa-trash text-red-500 mr-3"></i>
                  <span>{t.settings.clearData}</span>
                </div>
                <i className="fas fa-chevron-right text-silver"></i>
              </button>
            </div>
          </div>

          {/* App Info */}
          <div className="glass-effect rounded-lg p-6 border border-gold/20">
            <h2 className="font-semibold text-white mb-4 flex items-center">
              <i className="fas fa-info-circle text-gold mr-2"></i>
              {t.settings.appInfo}
            </h2>
            
            <div className="space-y-3 text-sm text-silver">
              <div className="flex justify-between">
                <span>{t.settings.version}:</span>
                <span className="text-gold">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>{t.settings.type}:</span>
                <span className="text-gold">PWA</span>
              </div>
              <div className="flex justify-between">
                <span>{t.settings.offlineMode}:</span>
                <span className="text-green-400">{t.settings.active}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.settings.lastUpdate}:</span>
                <span className="text-gold">2024</span>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="glass-effect rounded-lg p-6 border border-red-600/20">
            {!showLogoutConfirm ? (
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="w-full bg-red-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                {t.settings.logout}
              </button>
            ) : (
              <div className="text-center">
                <p className="text-white mb-4">{t.settings.logoutConfirm}</p>
                <div className="flex space-x-3">
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-red-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-red-700 transition-colors"
                  >
                    {t.settings.yes}
                  </button>
                  <button
                    onClick={() => setShowLogoutConfirm(false)}
                    className="flex-1 bg-gray-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-gray-700 transition-colors"
                  >
                    {t.settings.cancel}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
