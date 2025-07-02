
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface WineCatalogProps {
  onBack: () => void;
  user: { email: string; roomNumber: string } | null;
}

interface Wine {
  id: number;
  name: string;
  type: string;
  region: string;
  year: number;
  price: number;
  description: string;
  rating: number;
}

const WineCatalog: React.FC<WineCatalogProps> = ({ onBack, user }) => {
  const { t, language } = useTranslation();
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState('all');
  const [isOrdered, setIsOrdered] = useState(false);

  const wines: Wine[] = [
    {
      id: 1,
      name: 'Château Margaux',
      type: 'red',
      region: 'Bordeaux, France',
      year: 2018,
      price: 950,
      description: t.wineCatalog.wineDescriptions.chateauMargaux,
      rating: 5
    },
    {
      id: 2,
      name: 'Dom Pérignon',
      type: 'sparkling',
      region: 'Champagne, France',
      year: 2012,
      price: 520,
      description: t.wineCatalog.wineDescriptions.domPerignon,
      rating: 5
    },
    {
      id: 3,
      name: 'Cloudy Bay Sauvignon Blanc',
      type: 'white',
      region: 'Marlborough, New Zealand',
      year: 2022,
      price: 95,
      description: t.wineCatalog.wineDescriptions.cloudyBay,
      rating: 4
    },
    {
      id: 4,
      name: 'Barolo Brunate',
      type: 'red',
      region: 'Piedmont, Italy',
      year: 2019,
      price: 210,
      description: t.wineCatalog.wineDescriptions.barolo,
      rating: 5
    },
    {
      id: 5,
      name: 'Chablis Premier Cru',
      type: 'white',
      region: 'Burgundy, France',
      year: 2021,
      price: 140,
      description: t.wineCatalog.wineDescriptions.chablis,
      rating: 4
    },
    {
      id: 6,
      name: 'Moët & Chandon Rosé',
      type: 'sparkling',
      region: 'Champagne, France',
      year: 2020,
      price: 210,
      description: t.wineCatalog.wineDescriptions.moetRose,
      rating: 4
    }
  ];

  const filteredWines = wines.filter(wine => filter === 'all' || wine.type === filter);

  const handleOrder = () => {
    if (!selectedWine) return;

    const orders = JSON.parse(localStorage.getItem('wine_orders') || '[]');
    const newOrder = {
      id: Date.now(),
      roomNumber: user?.roomNumber,
      wine: selectedWine,
      quantity,
      total: selectedWine.price * quantity,
      created: new Date().toISOString()
    };
    orders.push(newOrder);
    localStorage.setItem('wine_orders', JSON.stringify(orders));

    setIsOrdered(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const wineTypes = [
    { id: 'all', label: t.wineCatalog.all, icon: 'fa-wine-glass-alt' },
    { id: 'red', label: t.wineCatalog.redWines, icon: 'fa-wine-glass' },
    { id: 'white', label: t.wineCatalog.whiteWines, icon: 'fa-wine-glass' },
    { id: 'sparkling', label: t.wineCatalog.champagne, icon: 'fa-glass-cheers' }
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
            <h1 className="font-playfair text-2xl font-bold text-gold">{t.wineCatalog.title}</h1>
            <p className="text-silver text-sm">{t.wineCatalog.exclusiveCollection}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {!isOrdered ? (
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Filters */}
            <div className="glass-effect rounded-lg p-4 border border-gold/20 mb-6">
              <div className="flex flex-wrap gap-2">
                {wineTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilter(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      filter === type.id
                        ? 'bg-gold text-dark'
                        : 'bg-dark-light border border-gray-600 text-silver hover:border-gold'
                    }`}
                  >
                    <i className={`fas ${type.icon} mr-2`}></i>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {filteredWines.map((wine, index) => (
                <div
                  key={wine.id}
                  className={`glass-effect rounded-lg p-6 border transition-all duration-300 cursor-pointer animate-scale-in ${
                    selectedWine?.id === wine.id
                      ? 'border-gold bg-gold/10'
                      : 'border-gold/20 hover:border-gold/40'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedWine(wine)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      wine.type === 'red' ? 'bg-red-600' :
                      wine.type === 'white' ? 'bg-yellow-400' :
                      'bg-pink-400'
                    }`}>
                      <i className="fas fa-wine-glass-alt text-white"></i>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold">${wine.price}</div>
                      <div className="text-xs text-silver">za butelkę</div>
                    </div>
                  </div>

                  <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                    {wine.name}
                  </h3>
                  
                  <div className="text-sm text-silver mb-3">
                    <p>{wine.region} • {wine.year}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-xs ${
                            i < wine.rating ? 'text-gold' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mb-4 line-clamp-3">
                    {wine.description}
                  </p>

                  {selectedWine?.id === wine.id && (
                    <div className="border-t border-gold/20 pt-4">
                      <i className="fas fa-check text-gold mr-2"></i>
                      <span className="text-gold text-sm">{t.wineCatalog.selected}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Order Section */}
            {selectedWine && (
              <div className="glass-effect rounded-lg p-6 border border-gold/20 animate-scale-in">
                <h3 className="font-semibold text-white mb-4 flex items-center">
                  <i className="fas fa-shopping-cart text-gold mr-2"></i>
                  {t.wineCatalog.yourOrder}
                </h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-medium text-white">{selectedWine.name}</h4>
                    <p className="text-sm text-silver">${selectedWine.price} / {quantity === 1 ? t.wineCatalog.bottle : t.wineCatalog.bottles}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 bg-dark-light border border-gray-600 rounded-full flex items-center justify-center hover:border-gold transition-colors"
                    >
                      <i className="fas fa-minus text-silver text-xs"></i>
                    </button>
                    <span className="text-white font-medium w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-dark-light border border-gray-600 rounded-full flex items-center justify-center hover:border-gold transition-colors"
                    >
                      <i className="fas fa-plus text-silver text-xs"></i>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-silver">{t.wineCatalog.total}:</span>
                  <span className="text-2xl font-bold text-gold">
                    ${selectedWine.price * quantity}
                  </span>
                </div>

                <button
                  onClick={handleOrder}
                  className="w-full bg-gradient-to-r from-gold to-yellow-600 text-dark font-semibold py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-gold transition-all duration-300 transform hover:scale-105 luxury-shadow"
                >
                  <i className="fas fa-check mr-2"></i>
                  {t.wineCatalog.confirmOrder} {user?.roomNumber}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Confirmation */
          <div className="max-w-md mx-auto text-center animate-scale-in">
            <div className="glass-effect rounded-lg p-8 border border-gold/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-gold mb-4">
                {t.wineCatalog.orderPlaced}
              </h2>
              <div className="text-silver mb-6 space-y-2">
                <p>{selectedWine?.name}</p>
                <p>{t.wineCatalog.quantity}: {quantity} {quantity === 1 ? t.wineCatalog.bottle : t.wineCatalog.bottles}</p>
                <p className="text-lg font-semibold text-gold">
                  {t.wineCatalog.total}: ${selectedWine && selectedWine.price * quantity}
                </p>
              </div>
              <div className="bg-dark-light rounded-lg p-4 border border-gold/20">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-clock mr-2 text-gold"></i>
                  {t.wineCatalog.deliveryTime}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WineCatalog;
