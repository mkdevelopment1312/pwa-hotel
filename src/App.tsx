
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import WakeUpCall from './components/WakeUpCall';
import TableReservation from './components/TableReservation';
import RoomCleaning from './components/RoomCleaning';
import WineCatalog from './components/WineCatalog';
import MoreServices from './components/MoreServices';
import Settings from './components/Settings';

type Screen = 'welcome' | 'login' | 'menu' | 'wakeup' | 'table' | 'cleaning' | 'wine' | 'services' | 'settings';

interface User {
  email: string;
  roomNumber: string;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('hotel5star_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentScreen('menu');
    }

    // Check if PWA is installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsInstalled(true);
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('hotel5star_user', JSON.stringify(userData));
    setCurrentScreen('menu');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('hotel5star_user');
    setCurrentScreen('welcome');
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('hotel5star_user', JSON.stringify(updatedUser));
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={() => setCurrentScreen('login')} isInstalled={isInstalled} />;
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'menu':
        return <MainMenu onNavigate={handleNavigate} user={user} />;
      case 'wakeup':
        return <WakeUpCall onBack={() => setCurrentScreen('menu')} user={user} />;
      case 'table':
        return <TableReservation onBack={() => setCurrentScreen('menu')} user={user} />;
      case 'cleaning':
        return <RoomCleaning onBack={() => setCurrentScreen('menu')} user={user} />;
      case 'wine':
        return <WineCatalog onBack={() => setCurrentScreen('menu')} user={user} />;
      case 'services':
        return <MoreServices onBack={() => setCurrentScreen('menu')} user={user} />;
      case 'settings':
        return <Settings onBack={() => setCurrentScreen('menu')} user={user} onUpdateUser={updateUser} onLogout={handleLogout} />;
      default:
        return <WelcomeScreen onContinue={() => setCurrentScreen('login')} isInstalled={isInstalled} />;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-white">
      {renderScreen()}
    </div>
  );
};

export default App;
