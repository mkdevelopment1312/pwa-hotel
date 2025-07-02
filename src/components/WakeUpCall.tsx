
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface WakeUpCallProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
}

const WakeUpCall: React.FC<WakeUpCallProps> = ({ onBack, user }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [message, setMessage] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert(t.wakeupCall.selectDateTime);
      return;
    }

    // Save wake-up call to localStorage
    const wakeUpCalls = JSON.parse(localStorage.getItem('wakeup_calls') || '[]');
    const newCall = {
      id: Date.now(),
      roomNumber: user?.roomNumber,
      date: selectedDate,
      time: selectedTime,
      message: message || t.wakeupCall.message,
      created: new Date().toISOString()
    };
    wakeUpCalls.push(newCall);
    localStorage.setItem('wakeup_calls', JSON.stringify(wakeUpCalls));

    setIsConfirmed(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const today = new Date().toISOString().split('T')[0];

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
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.wakeupCall.title}</h1>
            <p className="text-silver text-sm">{t.wakeupCall.room} {user?.roomNumber}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {!isConfirmed ? (
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Info Card */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bell text-dark text-xl"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-white">{t.wakeupCall.setAlarm}</h2>
                  <p className="text-silver text-sm">{t.wakeupCall.chooseDateTime}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-effect rounded-lg p-6 border border-gold/20 space-y-6">
              {/* Date */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-calendar-alt mr-2 text-gold"></i>
                  {t.wakeupCall.date}
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={today}
                  className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-clock mr-2 text-gold"></i>
                  {t.wakeupCall.time}
                </label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-comment mr-2 text-gold"></i>
                  {t.wakeupCall.message}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.wakeupCall.messagePlaceholder}
                  className="w-full bg-dark-light/80 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-gold focus:bg-dark-light focus:outline-none transition-all duration-300 hover:border-gold/60 h-20 resize-none"
                />
              </div>

              {/* Quick Time Buttons */}
              <div>
                <p className="text-white text-base font-semibold mb-3 bg-gradient-to-r from-gold/20 to-transparent p-2 rounded-lg">
                  <i className="fas fa-bolt mr-2 text-gold"></i>
                  {t.wakeupCall.quickSelect}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {['06:00', '07:00', '08:00', '09:00', '10:00', '11:00'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-gold text-dark'
                          : 'bg-dark-light border border-gray-600 text-silver hover:border-gold'
                      }`}
                    >
                      {time}
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
                {t.wakeupCall.confirmWakeup}
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
                {t.wakeupCall.wakeupSet}
              </h2>
              <p className="text-silver mb-6">
                {t.wakeupCall.confirmationMessage.replace('{date}', selectedDate).replace('{time}', selectedTime)}
              </p>
              <div className="bg-dark-light rounded-lg p-4 border border-gold/20">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-info-circle mr-2 text-gold"></i>
                  {t.wakeupCall.confirmationSaved}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WakeUpCall;
