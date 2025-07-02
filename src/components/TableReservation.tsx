
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TableReservationProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
}

const TableReservation: React.FC<TableReservationProps> = ({ onBack, user }) => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    preferences: ''
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!formData.date || !formData.time) {
      alert(t.tableReservation.selectDateTime);
      return;
    }

    // Save reservation to localStorage
    const reservations = JSON.parse(localStorage.getItem('table_reservations') || '[]');
    const newReservation = {
      id: Date.now(),
      roomNumber: user?.roomNumber,
      ...formData,
      created: new Date().toISOString()
    };
    reservations.push(newReservation);
    localStorage.setItem('table_reservations', JSON.stringify(reservations));

    setIsConfirmed(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const preferences = [
    { id: 'window', label: t.tableReservation.windowTable, icon: 'fa-window-maximize' },
    { id: 'quiet', label: t.tableReservation.quietZone, icon: 'fa-volume-mute' },
    { id: 'romantic', label: t.tableReservation.romantic, icon: 'fa-heart' },
    { id: 'business', label: t.tableReservation.business, icon: 'fa-briefcase' }
  ];

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
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.tableReservation.title}</h1>
            <p className="text-silver text-sm">Grand Dining Restaurant</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {!isConfirmed ? (
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Restaurant Info */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/80 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <i className="fas fa-utensils text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-white">Grand Dining</h2>
                  <p className="text-silver text-sm">{language === 'en' ? 'International cuisine • Elegant' : 'Internationell kök • Elegant'}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <i className="fas fa-star text-gold mr-1"></i>
                <span className="mr-4">Michelin recommended</span>
                <i className="fas fa-clock text-gold mr-1"></i>
                <span>18:00 - 22:30</span>
              </div>
            </div>

            {/* Form */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 space-y-6">
              {/* Date */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-calendar-alt mr-2 text-gold"></i>
                  {t.tableReservation.date}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  min={today}
                  className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-clock mr-2 text-gold"></i>
                  {t.tableReservation.time}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({...formData, time})}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.time === time
                          ? 'bg-gold text-dark'
                          : 'bg-dark-light border border-gray-600 text-silver hover:border-gold'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-users mr-2 text-gold"></i>
                  {t.tableReservation.guests}
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num} className="bg-dark-light text-white">{num} {num === 1 ? (language === 'en' ? 'person' : 'person') : (language === 'en' ? 'people' : 'personer')}</option>
                  ))}
                </select>
              </div>

              {/* Preferences */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-heart mr-2 text-gold"></i>
                  {t.tableReservation.preferences}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {preferences.map((pref) => (
                    <button
                      key={pref.id}
                      onClick={() => setFormData({
                        ...formData, 
                        preferences: formData.preferences === pref.id ? '' : pref.id
                      })}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                        formData.preferences === pref.id
                          ? 'bg-gold text-dark'
                          : 'bg-dark-light border border-gray-600 text-silver hover:border-gold'
                      }`}
                    >
                      <i className={`fas ${pref.icon} mr-2`}></i>
                      {pref.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                className="w-full bg-gradient-to-r from-gold to-yellow-600 text-dark font-semibold py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-gold transition-all duration-300 transform hover:scale-105 luxury-shadow"
              >
                <i className="fas fa-check mr-2"></i>
                {t.tableReservation.confirmReservation}
              </button>
            </div>
          </div>
        ) : (
          /* Confirmation */
          <div className="max-w-md mx-auto text-center animate-scale-in">
            <div className="glass-effect rounded-lg p-8 border border-gold/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-gold mb-4">
                {t.tableReservation.reservationConfirmed}
              </h2>
              <div className="text-silver mb-6 space-y-2">
                <p>{t.tableReservation.confirmationMessage.replace('{date}', formData.date).replace('{time}', formData.time)}</p>
                <p className="text-sm">{t.tableReservation.room} {user?.roomNumber}</p>
              </div>
              <div className="bg-dark-light rounded-lg p-4 border border-gold/20">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-info-circle mr-2 text-gold"></i>
                  {t.tableReservation.confirmationSaved}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableReservation;
