
import { useState, useEffect } from 'react';

type Language = 'en' | 'sv';

interface Translations {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    pwStatus: string;
    installed: string;
    readyToInstall: string;
    install: string;
    continueToLogin: string;
    features: {
      offline: string;
      secure: string;
      fast: string;
      luxury: string;
    };
  };
  menu: {
    greeting: string;
    helpText: string;
    wakeup: {
      title: string;
      subtitle: string;
    };
    table: {
      title: string;
      subtitle: string;
    };
    cleaning: {
      title: string;
      subtitle: string;
    };
    wine: {
      title: string;
      subtitle: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    stats: {
      support: string;
      hotel: string;
      services: string;
    };
  };
  login: {
    title: string;
    subtitle: string;
    email: string;
    password: string;
    room: string;
    signIn: string;
    forgotPassword: string;
  };
  settings: {
    title: string;
    subtitle: string;
    accountInfo: string;
    email: string;
    roomNumber: string;
    appSettings: string;
    language: string;
    languageDesc: string;
    exportData: string;
    clearData: string;
    clearDataConfirm: string;
    appInfo: string;
    version: string;
    type: string;
    offlineMode: string;
    lastUpdate: string;
    active: string;
    logout: string;
    logoutConfirm: string;
    yes: string;
    cancel: string;
    allDataCleared: string;
  };
  wakeupCall: {
    title: string;
    room: string;
    setAlarm: string;
    chooseDateTime: string;
    date: string;
    time: string;
    message: string;
    messagePlaceholder: string;
    quickSelect: string;
    confirmWakeup: string;
    wakeupSet: string;
    confirmationMessage: string;
    confirmationSaved: string;
    selectDateTime: string;
  };
  tableReservation: {
    title: string;
    room: string;
    reserveTable: string;
    selectDateTime: string;
    date: string;
    time: string;
    guests: string;
    preferences: string;
    windowTable: string;
    quietZone: string;
    romantic: string;
    business: string;
    specialRequests: string;
    requestsPlaceholder: string;
    confirmReservation: string;
    reservationConfirmed: string;
    confirmationMessage: string;
    confirmationSaved: string;
  };
  roomCleaning: {
    title: string;
    room: string;
    orderCleaning: string;
    selectType: string;
    selectService: string;
    standard: string;
    standardDesc: string;
    deep: string;
    deepDesc: string;
    express: string;
    expressDesc: string;
    priority: string;
    urgent: string;
    urgentTime: string;
    normal: string;
    normalTime: string;
    later: string;
    laterTime: string;
    specialRequests: string;
    specialRequestsPlaceholder: string;
    orderService: string;
    orderAccepted: string;
    priorityLabel: string;
    staffNotified: string;
    pleaseSelectService: string;
    time: string;
    notes: string;
    notesPlaceholder: string;
    confirmCleaning: string;
    cleaningOrdered: string;
    confirmationMessage: string;
    confirmationSaved: string;
  };
  wineCatalog: {
    title: string;
    room: string;
    orderWine: string;
    redWines: string;
    whiteWines: string;
    champagne: string;
    all: string;
    exclusiveCollection: string;
    selected: string;
    bottle: string;
    bottles: string;
    quantity: string;
    deliveryTime: string;
    price: string;
    addToOrder: string;
    yourOrder: string;
    total: string;
    confirmOrder: string;
    orderPlaced: string;
    confirmationMessage: string;
    confirmationSaved: string;
    emptyOrder: string;
    wineDescriptions: {
      chateauMargaux: string;
      domPerignon: string;
      cloudyBay: string;
      barolo: string;
      chablis: string;
      moetRose: string;
    };
  };
  moreServices: {
    title: string;
    room: string;
    additionalServices: string;
    spa: string;
    spaDesc: string;
    spaSubtitle: string;
    concierge: string;
    conciergeDesc: string;
    conciergeSubtitle: string;
    transport: string;
    transportDesc: string;
    transportSubtitle: string;
    laundry: string;
    laundryDesc: string;
    laundryTitle: string;
    laundrySubtitle: string;
    roomService: string;
    roomServiceDesc: string;
    events: string;
    eventsDesc: string;
    eventsTitle: string;
    eventsSubtitle: string;
    gym: string;
    gymDesc: string;
    gymSubtitle: string;
    business: string;
    businessDesc: string;
    businessSubtitle: string;
    shopping: string;
    shoppingDesc: string;
    shoppingSubtitle: string;
    available: string;
    unavailable: string;
    comingSoon: string;
    hours: string;
    requestService: string;
    serviceRequested: string;
    requestSent: string;
    notAvailable: string;
    needHelp: string;
    reception: string;
    vipStatus: string;
    allServicesWithPriority: string;
    ordered: string;
  };
  common: {
    selectDateTime: string;
    confirm: string;
    cancel: string;
    back: string;
    save: string;
    order: string;
    book: string;
    selectTime: string;
    selectDate: string;
    optional: string;
    required: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    welcome: {
      title: 'Hotel 5Star',
      subtitle: 'Welcome to luxury hotel app',
      description: 'Progressive Web App (PWA) providing\nfull offline functionality with highest quality service',
      pwStatus: 'PWA Status',
      installed: 'App is installed',
      readyToInstall: 'Ready to install',
      install: 'Install app',
      continueToLogin: 'Continue to login',
      features: {
        offline: 'Works offline',
        secure: 'Secure',
        fast: 'Lightning fast',
        luxury: 'Luxury'
      }
    },
    menu: {
      greeting: 'Good day!',
      helpText: 'How can we help you today?',
      wakeup: {
        title: 'Wake-up Call',
        subtitle: 'Set wake-up alarm'
      },
      table: {
        title: 'Table Reservation',
        subtitle: 'Reserve table in restaurant'
      },
      cleaning: {
        title: 'Room Cleaning',
        subtitle: 'Order cleaning service'
      },
      wine: {
        title: 'Wine Catalog',
        subtitle: 'Order wine to room'
      },
      services: {
        title: 'More Services',
        subtitle: 'Spa, concierge and more'
      },
      stats: {
        support: 'Support',
        hotel: 'Hotel',
        services: 'Services'
      }
    },
    login: {
      title: 'Welcome Back',
      subtitle: 'Sign in to your luxury experience',
      email: 'Email address',
      password: 'Password',
      room: 'Room number',
      signIn: 'Sign In',
      forgotPassword: 'Forgot password?'
    },
    settings: {
      title: 'Settings',
      subtitle: 'Manage account',
      accountInfo: 'Account Information',
      email: 'Email',
      roomNumber: 'Room number',
      appSettings: 'App Settings',
      language: 'Language',
      languageDesc: 'Choose your preferred language',
      exportData: 'Export data',
      clearData: 'Clear all data',
      clearDataConfirm: 'Are you sure you want to clear all app data?',
      appInfo: 'About app',
      version: 'Version',
      type: 'Type',
      offlineMode: 'Offline mode',
      lastUpdate: 'Last update',
      active: 'Active',
      logout: 'Log out',
      logoutConfirm: 'Are you sure you want to log out?',
      yes: 'Yes, log out',
      cancel: 'Cancel',
      allDataCleared: 'All data has been cleared'
    },
    wakeupCall: {
      title: 'Wake-up Call',
      room: 'Room',
      setAlarm: 'Set wake-up call',
      chooseDateTime: 'Choose date and time',
      date: 'Date',
      time: 'Time',
      message: 'Message (optional)',
      messagePlaceholder: 'Special requests or message...',
      quickSelect: 'Quick select',
      confirmWakeup: 'Confirm wake-up call',
      wakeupSet: 'Wake-up call set!',
      confirmationMessage: 'We will call you on {date} at {time}',
      confirmationSaved: 'Confirmation has been saved',
      selectDateTime: 'Please select date and time'
    },
    tableReservation: {
      title: 'Table Reservation',
      room: 'Room',
      reserveTable: 'Reserve table',
      selectDateTime: 'Select date and time',
      date: 'Date',
      time: 'Time',
      guests: 'Number of guests',
      preferences: 'Table preferences',
      windowTable: 'Window table',
      quietZone: 'Quiet zone',
      romantic: 'Romantic atmosphere',
      business: 'Business meeting',
      specialRequests: 'Special requests',
      requestsPlaceholder: 'Dietary restrictions, special occasion...',
      confirmReservation: 'Confirm reservation',
      reservationConfirmed: 'Reservation confirmed!',
      confirmationMessage: 'Your table is reserved for {date} at {time}',
      confirmationSaved: 'Confirmation has been saved'
    },
    roomCleaning: {
      title: 'Room Cleaning',
      room: 'Room',
      orderCleaning: 'Order cleaning service',
      selectType: 'Select cleaning type',
      selectService: 'Select service',
      standard: 'Standard cleaning',
      standardDesc: 'Regular room cleaning, change of towels and bed linen',
      deep: 'Deep cleaning',
      deepDesc: 'Thorough cleaning of the entire room including bathroom',
      express: 'Express cleaning',
      expressDesc: 'Quick cleaning while you are away',
      priority: 'Priority',
      urgent: 'Urgent',
      urgentTime: 'Within 30 min',
      normal: 'Normal',
      normalTime: 'Within 2 hours',
      later: 'Later',
      laterTime: 'This evening',
      specialRequests: 'Special requests (optional)',
      specialRequestsPlaceholder: 'Additional information or requests...',
      orderService: 'Order service',
      orderAccepted: 'Order accepted!',
      priorityLabel: 'Priority:',
      staffNotified: 'Staff has been notified',
      pleaseSelectService: 'Please select a service',
      time: 'Preferred time',
      notes: 'Additional notes',
      notesPlaceholder: 'Special requests or areas requiring attention...',
      confirmCleaning: 'Confirm cleaning order',
      cleaningOrdered: 'Cleaning service ordered!',
      confirmationMessage: 'Cleaning will be done on {date} at {time}',
      confirmationSaved: 'Order has been saved'
    },
    wineCatalog: {
      title: 'Wine Catalog',
      room: 'Room',
      orderWine: 'Order wine to room',
      redWines: 'Red wines',
      whiteWines: 'White wines',
      champagne: 'Champagne & Sparkling',
      all: 'All',
      exclusiveCollection: 'Exclusive collection',
      selected: 'Selected',
      bottle: 'bottle',
      bottles: 'bottles',
      quantity: 'Quantity',
      deliveryTime: 'Delivery in 15-30 minutes',
      price: 'Price',
      addToOrder: 'Add to order',
      yourOrder: 'Your order',
      total: 'Total',
      confirmOrder: 'Confirm order',
      orderPlaced: 'Order placed!',
      confirmationMessage: 'Your wine will be delivered to room {room}',
      confirmationSaved: 'Order has been saved',
      emptyOrder: 'Your order is empty',
      wineDescriptions: {
        chateauMargaux: 'Elegant wine with deep aroma of blackcurrant notes',
        domPerignon: 'Prestigious champagne with delicate taste and long finish',
        cloudyBay: 'Fresh white wine with tropical fruit notes',
        barolo: 'Powerful Italian wine from Nebbiolo grapes',
        chablis: 'Mineral white wine with fresh character',
        moetRose: 'Rosé champagne with romantic character'
      }
    },
    moreServices: {
      title: 'More Services',
      room: 'Room',
      additionalServices: 'Additional hotel services',
      spa: 'Spa & Wellness',
      spaDesc: 'Massages, treatments, sauna and jacuzzi',
      spaSubtitle: 'Relaxation and regeneration',
      concierge: 'Concierge',
      conciergeDesc: 'Reservations, tickets, transport, recommendations',
      conciergeSubtitle: 'Help and information',
      transport: 'Transport',
      transportDesc: 'Airport shuttle, taxi, car rental',
      transportSubtitle: 'Taxi and transfers',
      laundry: 'Laundry',
      laundryTitle: 'Laundry',
      laundryDesc: 'Washing, dry cleaning, ironing',
      laundrySubtitle: 'Cleaning and ironing',
      roomService: 'Room Service',
      roomServiceDesc: 'Food and drinks to your room',
      events: 'Event Organization',
      eventsTitle: 'Event Organization',
      eventsDesc: 'Birthdays, anniversaries, business meetings',
      eventsSubtitle: 'Special occasions',
      gym: 'Gym',
      gymDesc: 'Modern equipment, personal trainer',
      gymSubtitle: 'Fitness and sports',
      business: 'Business Center',
      businessDesc: 'Conference rooms, printing, fax',
      businessSubtitle: 'Business services',
      shopping: 'Personal Shopping',
      shoppingDesc: 'Shopping, gifts, personal items',
      shoppingSubtitle: 'Shopping on request',
      available: 'Available',
      unavailable: 'Unavailable',
      comingSoon: 'Coming soon',
      hours: 'Hours',
      requestService: 'Request service',
      serviceRequested: 'Service requested!',
      requestSent: 'Your request has been sent',
      notAvailable: 'Service not available',
      needHelp: 'Need help?',
      reception: 'Reception',
      vipStatus: 'VIP Status',
      allServicesWithPriority: 'All services with priority',
      ordered: 'Ordered!'
    },
    common: {
      selectDateTime: 'Please select date and time',
      confirm: 'Confirm',
      cancel: 'Cancel',
      back: 'Back',
      save: 'Save',
      order: 'Order',
      book: 'Book',
      selectTime: 'Select time',
      selectDate: 'Select date',
      optional: 'Optional',
      required: 'Required'
    }
  },
  sv: {
    welcome: {
      title: 'Hotel 5Star',
      subtitle: 'Välkommen till lyxhotellets app',
      description: 'Progressiv webbapp (PWA) som ger\nfull offline-funktionalitet med högsta kvalitet',
      pwStatus: 'PWA Status',
      installed: 'Appen är installerad',
      readyToInstall: 'Redo att installera',
      install: 'Installera app',
      continueToLogin: 'Fortsätt till inloggning',
      features: {
        offline: 'Fungerar offline',
        secure: 'Säker',
        fast: 'Blixtsnabb',
        luxury: 'Lyx'
      }
    },
    menu: {
      greeting: 'God dag!',
      helpText: 'Hur kan vi hjälpa dig idag?',
      wakeup: {
        title: 'Väckningssamtal',
        subtitle: 'Ställ in väckningslarm'
      },
      table: {
        title: 'Bordsbokningar',
        subtitle: 'Reservera bord i restaurangen'
      },
      cleaning: {
        title: 'Rumsstädning',
        subtitle: 'Beställ städservice'
      },
      wine: {
        title: 'Vinkatalog',
        subtitle: 'Beställ vin till rummet'
      },
      services: {
        title: 'Fler Tjänster',
        subtitle: 'Spa, concierge och mer'
      },
      stats: {
        support: 'Support',
        hotel: 'Hotell',
        services: 'Tjänster'
      }
    },
    login: {
      title: 'Välkommen Tillbaka',
      subtitle: 'Logga in till din lyxupplevelse',
      email: 'E-postadress',
      password: 'Lösenord',
      room: 'Rumsnummer',
      signIn: 'Logga In',
      forgotPassword: 'Glömt lösenord?'
    },
    settings: {
      title: 'Inställningar',
      subtitle: 'Hantera konto',
      accountInfo: 'Kontoinformation',
      email: 'E-post',
      roomNumber: 'Rumsnummer',
      appSettings: 'Appinställningar',
      language: 'Språk',
      languageDesc: 'Välj ditt föredragna språk',
      exportData: 'Exportera data',
      clearData: 'Rensa all data',
      clearDataConfirm: 'Är du säker på att du vill rensa all appdata?',
      appInfo: 'Om appen',
      version: 'Version',
      type: 'Typ',
      offlineMode: 'Offline-läge',
      lastUpdate: 'Senaste uppdatering',
      active: 'Aktiv',
      logout: 'Logga ut',
      logoutConfirm: 'Är du säker på att du vill logga ut?',
      yes: 'Ja, logga ut',
      cancel: 'Avbryt',
      allDataCleared: 'All data har rensats'
    },
    wakeupCall: {
      title: 'Väckningssamtal',
      room: 'Rum',
      setAlarm: 'Ställ in väckningssamtal',
      chooseDateTime: 'Välj datum och tid',
      date: 'Datum',
      time: 'Tid',
      message: 'Meddelande (valfritt)',
      messagePlaceholder: 'Speciella önskemål eller meddelande...',
      quickSelect: 'Snabbval',
      confirmWakeup: 'Bekräfta väckningssamtal',
      wakeupSet: 'Väckningssamtal inställt!',
      confirmationMessage: 'Vi ringer dig {date} klockan {time}',
      confirmationSaved: 'Bekräftelse har sparats',
      selectDateTime: 'Vänligen välj datum och tid'
    },
    tableReservation: {
      title: 'Bordsbokningar',
      room: 'Rum',
      reserveTable: 'Reservera bord',
      selectDateTime: 'Välj datum och tid',
      date: 'Datum',
      time: 'Tid',
      guests: 'Antal gäster',
      preferences: 'Bordspreferenser',
      windowTable: 'Fönsterbord',
      quietZone: 'Lugn zon',
      romantic: 'Romantisk atmosfär',
      business: 'Affärsmöte',
      specialRequests: 'Speciella önskemål',
      requestsPlaceholder: 'Dietrestriktioner, speciellt tillfälle...',
      confirmReservation: 'Bekräfta bokning',
      reservationConfirmed: 'Bokning bekräftad!',
      confirmationMessage: 'Ditt bord är reserverat för {date} klockan {time}',
      confirmationSaved: 'Bekräftelse har sparats'
    },
    roomCleaning: {
      title: 'Rumsstädning',
      room: 'Rum',
      orderCleaning: 'Beställ städservice',
      selectType: 'Välj städtyp',
      selectService: 'Välj service',
      standard: 'Standardstädning',
      standardDesc: 'Vanlig rumsstädning, byte av handdukar och sängkläder',
      deep: 'Djupstädning',
      deepDesc: 'Grundlig städning av hela rummet inklusive badrum',
      express: 'Expressstädning',
      expressDesc: 'Snabb städning medan du är borta',
      priority: 'Prioritet',
      urgent: 'Brådskande',
      urgentTime: 'Inom 30 min',
      normal: 'Normal',
      normalTime: 'Inom 2 timmar',
      later: 'Senare',
      laterTime: 'I kväll',
      specialRequests: 'Speciella önskemål (valfritt)',
      specialRequestsPlaceholder: 'Ytterligare information eller önskemål...',
      orderService: 'Beställ service',
      orderAccepted: 'Beställning mottagen!',
      priorityLabel: 'Prioritet:',
      staffNotified: 'Personal har informerats',
      pleaseSelectService: 'Vänligen välj en service',
      time: 'Önskad tid',
      notes: 'Ytterligare anteckningar',
      notesPlaceholder: 'Speciella önskemål eller områden som behöver uppmärksamhet...',
      confirmCleaning: 'Bekräfta städbeställning',
      cleaningOrdered: 'Städservice beställd!',
      confirmationMessage: 'Städning kommer att göras {date} klockan {time}',
      confirmationSaved: 'Beställning har sparats'
    },
    wineCatalog: {
      title: 'Vinkatalog',
      room: 'Rum',
      orderWine: 'Beställ vin till rummet',
      redWines: 'Rödviner',
      whiteWines: 'Vitviner',
      champagne: 'Champagne & Mousserande',
      all: 'Alla',
      exclusiveCollection: 'Exklusiv samling',
      selected: 'Vald',
      bottle: 'flaska',
      bottles: 'flaskor',
      quantity: 'Antal',
      deliveryTime: 'Leverans inom 15-30 minuter',
      price: 'Pris',
      addToOrder: 'Lägg till beställning',
      yourOrder: 'Din beställning',
      total: 'Totalt',
      confirmOrder: 'Bekräfta beställning',
      orderPlaced: 'Beställning lagd!',
      confirmationMessage: 'Ditt vin kommer att levereras till rum {room}',
      confirmationSaved: 'Beställning har sparats',
      emptyOrder: 'Din beställning är tom',
      wineDescriptions: {
        chateauMargaux: 'Elegant vin med djup arom av svarta vinbärston',
        domPerignon: 'Prestigefull champagne med delikat smak och lång finish',
        cloudyBay: 'Fräscht vitt vin med tropisk fruktsmak',
        barolo: 'Kraftfullt italienskt vin från Nebbiolo-druvor',
        chablis: 'Mineraliskt vitt vin med fräsch karaktär',
        moetRose: 'Rosé champagne med romantisk karaktär'
      }
    },
    moreServices: {
      title: 'Fler Tjänster',
      room: 'Rum',
      additionalServices: 'Ytterligare hotelltjänster',
      spa: 'Spa & Välmående',
      spaDesc: 'Massager, behandlingar, bastu och jacuzzi',
      spaSubtitle: 'Avkoppling och återhämtning',
      concierge: 'Concierge',
      conciergeDesc: 'Bokningar, biljetter, transport, rekommendationer',
      conciergeSubtitle: 'Hjälp och information',
      transport: 'Transport',
      transportDesc: 'Flygplatstransfer, taxi, biluthyrning',
      transportSubtitle: 'Taxi och transferer',
      laundry: 'Tvätt',
      laundryTitle: 'Tvätt',
      laundryDesc: 'Tvätt, kemtvätt, strykning',
      laundrySubtitle: 'Rengöring och strykning',
      roomService: 'Rumsservice',
      roomServiceDesc: 'Mat och dryck till ditt rum',
      events: 'Eventorganisation',
      eventsTitle: 'Eventorganisation',
      eventsDesc: 'Födelsedagar, årsdagar, affärsmöten',
      eventsSubtitle: 'Speciella tillfällen',
      gym: 'Gym',
      gymDesc: 'Modern utrustning, personlig tränare',
      gymSubtitle: 'Fitness och sport',
      business: 'Affärscentrum',
      businessDesc: 'Konferensrum, utskrift, fax',
      businessSubtitle: 'Affärstjänster',
      shopping: 'Personlig shopping',
      shoppingDesc: 'Shopping, presenter, personliga artiklar',
      shoppingSubtitle: 'Shopping på begäran',
      available: 'Tillgänglig',
      unavailable: 'Ej tillgänglig',
      comingSoon: 'Kommer snart',
      hours: 'Öppettider',
      requestService: 'Begär tjänst',
      serviceRequested: 'Tjänst begärd!',
      requestSent: 'Din förfrågan har skickats',
      notAvailable: 'Tjänst ej tillgänglig',
      needHelp: 'Behöver du hjälp?',
      reception: 'Reception',
      vipStatus: 'VIP-status',
      allServicesWithPriority: 'Alla tjänster med prioritet',
      ordered: 'Beställt!'
    },
    common: {
      selectDateTime: 'Vänligen välj datum och tid',
      confirm: 'Bekräfta',
      cancel: 'Avbryt',
      back: 'Tillbaka',
      save: 'Spara',
      order: 'Beställ',
      book: 'Boka',
      selectTime: 'Välj tid',
      selectDate: 'Välj datum',
      optional: 'Valfritt',
      required: 'Obligatorisk'
    }
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hotel5star_language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sv')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('hotel5star_language', newLanguage);
  };

  return {
    language,
    changeLanguage,
    t: translations[language]
  };
};
