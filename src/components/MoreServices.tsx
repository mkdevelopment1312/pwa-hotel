
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface MoreServicesProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
}

const MoreServices: React.FC<MoreServicesProps> = ({ onBack, user }) => {
  const { t, language } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'spa',
      title: t.moreServices.spa,
      subtitle: t.moreServices.spaSubtitle,
      description: t.moreServices.spaDesc,
      icon: 'fa-spa',
      gradient: 'from-purple-500 to-purple-600',
      available: true,
      hours: '9:00 - 22:00'
    },
    {
      id: 'concierge',
      title: t.moreServices.concierge,
      subtitle: t.moreServices.conciergeSubtitle,
      description: t.moreServices.conciergeDesc,
      icon: 'fa-concierge-bell',
      gradient: 'from-gold to-yellow-600',
      available: true,
      hours: '24/7'
    },
    {
      id: 'laundry',
      title: t.moreServices.laundryTitle,
      subtitle: t.moreServices.laundrySubtitle,
      description: t.moreServices.laundryDesc,
      icon: 'fa-tshirt',
      gradient: 'from-blue-500 to-blue-600',
      available: true,
      hours: '8:00 - 20:00'
    },
    {
      id: 'gym',
      title: t.moreServices.gym,
      subtitle: t.moreServices.gymSubtitle,
      description: t.moreServices.gymDesc,
      icon: 'fa-dumbbell',
      gradient: 'from-red-500 to-red-600',
      available: true,
      hours: '6:00 - 23:00'
    },
    {
      id: 'business',
      title: t.moreServices.business,
      subtitle: t.moreServices.businessSubtitle,
      description: t.moreServices.businessDesc,
      icon: 'fa-briefcase',
      gradient: 'from-gray-600 to-gray-700',
      available: true,
      hours: '7:00 - 21:00'
    },
    {
      id: 'transport',
      title: t.moreServices.transport,
      subtitle: t.moreServices.transportSubtitle,
      description: t.moreServices.transportDesc,
      icon: 'fa-car',
      gradient: 'from-green-500 to-green-600',
      available: true,
      hours: '24/7'
    },
    {
      id: 'shopping',
      title: t.moreServices.shopping,
      subtitle: t.moreServices.shoppingSubtitle,
      description: t.moreServices.shoppingDesc,
      icon: 'fa-shopping-bag',
      gradient: 'from-pink-500 to-pink-600',
      available: false,
      hours: t.moreServices.comingSoon
    },
    {
      id: 'events',
      title: t.moreServices.eventsTitle,
      subtitle: t.moreServices.eventsSubtitle,
      description: t.moreServices.eventsDesc,
      icon: 'fa-calendar-check',
      gradient: 'from-indigo-500 to-indigo-600',
      available: false,
      hours: t.moreServices.comingSoon
    }
  ];

  const handleServiceRequest = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service?.available) return;

    setSelectedService(serviceId);
    
    // Save service request
    const requests = JSON.parse(localStorage.getItem('service_requests') || '[]');
    const newRequest = {
      id: Date.now(),
      roomNumber: user?.roomNumber,
      service: service.title,
      created: new Date().toISOString()
    };
    requests.push(newRequest);
    localStorage.setItem('service_requests', JSON.stringify(requests));

    setTimeout(() => {
      setSelectedService(null);
    }, 3000);
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
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.moreServices.title}</h1>
            <p className="text-silver text-sm">{t.moreServices.additionalServices}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`glass-effect rounded-lg p-6 border border-gold/20 transition-all duration-300 animate-scale-in ${
                  service.available 
                    ? 'hover:border-gold/40 cursor-pointer transform hover:scale-105' 
                    : 'opacity-60'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceRequest(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center`}>
                    <i className={`fas ${service.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      service.available 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {service.available ? t.moreServices.available : t.moreServices.unavailable}
                    </div>
                  </div>
                </div>

                <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gold text-sm font-medium mb-3">
                  {service.subtitle}
                </p>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-silver">
                    <i className="fas fa-clock mr-1 text-gold"></i>
                    {service.hours}
                  </div>
                  {service.available && (
                    <i className="fas fa-arrow-right text-gold"></i>
                  )}
                </div>

                {/* Success Animation */}
                {selectedService === service.id && (
                  <div className="absolute inset-0 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-check text-green-400 text-3xl mb-2"></i>
                      <p className="text-green-400 text-sm font-medium">{t.moreServices.ordered}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-8 glass-effect rounded-lg p-6 border border-gold/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <i className="fas fa-phone text-gold mr-2"></i>
              {t.moreServices.needHelp}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-gold font-medium">{t.moreServices.reception}</div>
                <div className="text-silver">Tel. 101</div>
              </div>
              <div className="text-center">
                <div className="text-gold font-medium">{t.moreServices.concierge}</div>
                <div className="text-silver">Tel. 102</div>
              </div>
              <div className="text-center">
                <div className="text-gold font-medium">{t.moreServices.roomService}</div>
                <div className="text-silver">Tel. 103</div>
              </div>
            </div>
          </div>

          {/* VIP Notice */}
          <div className="mt-6 glass-effect rounded-lg p-4 border border-gold/20 bg-gold/5">
            <div className="flex items-center">
              <i className="fas fa-crown text-gold text-xl mr-3"></i>
              <div>
                <p className="text-white font-medium">{t.moreServices.vipStatus}</p>
                <p className="text-silver text-sm">{t.moreServices.allServicesWithPriority}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
