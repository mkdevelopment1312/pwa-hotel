
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface RoomCleaningProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
}

const RoomCleaning: React.FC<RoomCleaningProps> = ({ onBack, user }) => {
  const { t, language } = useTranslation();
  const [selectedService, setSelectedService] = useState('');
  const [priority, setPriority] = useState('normal');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const services = [
    {
      id: 'standard',
      title: t.roomCleaning.standard,
      description: t.roomCleaning.standardDesc,
      icon: 'fa-broom',
      duration: language === 'en' ? '45-60 min' : '45-60 min'
    },
    {
      id: 'deep',
      title: t.roomCleaning.deep,
      description: t.roomCleaning.deepDesc,
      icon: 'fa-bath',
      duration: language === 'en' ? '60-90 min' : '60-90 min'
    },
    {
      id: 'express',
      title: t.roomCleaning.express,
      description: t.roomCleaning.expressDesc,
      icon: 'fa-bolt',
      duration: language === 'en' ? '15-30 min' : '15-30 min'
    }
  ];

  const priorities = [
    { 
      id: 'urgent', 
      label: t.roomCleaning.urgent, 
      color: 'from-red-500 to-red-600', 
      time: t.roomCleaning.urgentTime 
    },
    { 
      id: 'normal', 
      label: t.roomCleaning.normal, 
      color: 'from-blue-500 to-blue-600', 
      time: t.roomCleaning.normalTime 
    },
    { 
      id: 'later', 
      label: t.roomCleaning.later, 
      color: 'from-green-500 to-green-600', 
      time: t.roomCleaning.laterTime 
    }
  ];

  const handleConfirm = () => {
    if (!selectedService) {
      alert(t.roomCleaning.pleaseSelectService);
      return;
    }

    // Save cleaning request to localStorage
    const requests = JSON.parse(localStorage.getItem('cleaning_requests') || '[]');
    const newRequest = {
      id: Date.now(),
      roomNumber: user?.roomNumber,
      service: selectedService,
      priority,
      specialRequests,
      created: new Date().toISOString()
    };
    requests.push(newRequest);
    localStorage.setItem('cleaning_requests', JSON.stringify(requests));

    setIsConfirmed(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

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
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.roomCleaning.title}</h1>
            <p className="text-silver text-sm">{t.roomCleaning.room} {user?.roomNumber}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {!isConfirmed ? (
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Service Selection */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 mb-6">
              <h2 className="font-semibold text-white mb-4 flex items-center">
                <i className="fas fa-broom text-gold mr-2"></i>
                {t.roomCleaning.selectService}
              </h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedService === service.id
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-dark-light/80 hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        selectedService === service.id ? 'bg-gold text-dark' : 'bg-blue-500 text-white'
                      }`}>
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{service.title}</h3>
                        <p className="text-sm text-silver">{service.description}</p>
                        <p className="text-xs text-gray-400">{service.duration}</p>
                      </div>
                      {selectedService === service.id && (
                        <i className="fas fa-check text-gold"></i>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Priority Selection */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 mb-6">
              <h2 className="font-semibold text-white mb-4 flex items-center">
                <i className="fas fa-clock text-gold mr-2"></i>
                {t.roomCleaning.priority}
              </h2>
              <div className="space-y-3">
                {priorities.map((prio) => (
                  <button
                    key={prio.id}
                    onClick={() => setPriority(prio.id)}
                    className={`w-full p-3 rounded-lg border transition-all duration-300 text-left ${
                      priority === prio.id
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-dark-light/80 hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 bg-gradient-to-br ${prio.color} rounded-full flex items-center justify-center mr-3`}>
                        <i className="fas fa-exclamation text-white text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{prio.label}</h3>
                        <p className="text-sm text-silver">{prio.time}</p>
                      </div>
                      {priority === prio.id && (
                        <i className="fas fa-check text-gold"></i>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 mb-6">
              <label className="block text-silver text-sm font-medium mb-3">
                <i className="fas fa-comment mr-2 text-gold"></i>
                {t.roomCleaning.specialRequests}
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder={t.roomCleaning.specialRequestsPlaceholder}
                className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60 h-20 resize-none"
              />
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-gold to-yellow-600 text-dark font-semibold py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-gold transition-all duration-300 transform hover:scale-105 luxury-shadow"
            >
              <i className="fas fa-check mr-2"></i>
              {t.roomCleaning.orderService}
            </button>
          </div>
        ) : (
          /* Confirmation */
          <div className="max-w-md mx-auto text-center animate-scale-in">
            <div className="glass-effect rounded-lg p-8 border border-gold/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-gold mb-4">
                {t.roomCleaning.orderAccepted}
              </h2>
              <div className="text-silver mb-6 space-y-2">
                <p>{selectedServiceData?.title}</p>
                <p className="text-sm">{t.roomCleaning.priorityLabel} {priorities.find(p => p.id === priority)?.label}</p>
                <p className="text-sm">{t.roomCleaning.room} {user?.roomNumber}</p>
              </div>
              <div className="bg-dark-light rounded-lg p-4 border border-gold/20">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-info-circle mr-2 text-gold"></i>
                  {t.roomCleaning.staffNotified}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCleaning;
