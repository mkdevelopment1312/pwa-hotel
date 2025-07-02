# Hotel 5Star - Luxury PWA Experience

A modern, responsive Progressive Web Application (PWA) for hotel guests, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multi-language Support** - English and Swedish translations
- **Wake-up Call Service** - Schedule personalized wake-up calls
- **Restaurant Reservations** - Book tables with special requests
- **Room Cleaning** - Request housekeeping services
- **Wine Catalog** - Browse and order premium wines
- **Concierge Services** - Access additional hotel amenities
- **Mobile-First Design** - Optimized for all device sizes
- **Luxury Dark Theme** - Professional gold and charcoal color scheme
- **Sophisticated Animations** - Smooth transitions and effects
- **PWA Ready** - Install on mobile devices like a native app

## 🚀 Live Demo

Visit the live application: [Hotel 5Star PWA](https://mkdevelopment1312.github.io/pwa-hotel/)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom animations
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **PWA**: Service Worker + Web App Manifest

## 📱 Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/mkdevelopment1312/pwa-hotel.git
cd pwa-hotel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Production Build

```bash
npm run build
npm run preview
```

## 🌐 PWA Installation

1. Visit the live demo on your mobile device
2. Look for the "Add to Home Screen" prompt
3. Install the app for a native-like experience

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── MainMenu.tsx    # Main navigation
│   ├── WakeUpCall.tsx  # Wake-up service
│   ├── TableReservation.tsx  # Restaurant booking
│   ├── RoomCleaning.tsx     # Housekeeping
│   ├── WineCatalog.tsx      # Wine ordering
│   └── ...
├── hooks/              # Custom React hooks
│   └── useTranslation.ts    # Internationalization
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🎨 Design Features

- **Responsive Grid Layout** - Adapts to all screen sizes
- **Glassmorphism Effects** - Modern blur and transparency
- **Gradient Animations** - Sophisticated background effects
- **Touch Optimizations** - Enhanced mobile interactions
- **Accessibility** - WCAG compliant design
- **Performance** - Optimized animations and lazy loading

## 🌍 Internationalization

The app supports multiple languages with easy translation management:

- English (default)
- Swedish
- Extensible for additional languages

## 🔧 Configuration

### GitHub Pages Deployment

The app is configured for GitHub Pages deployment with:
- Base path: `/pwa-hotel/`
- Automatic deployment via GitHub Actions
- Service Worker for offline functionality

### Environment Variables

No environment variables required for basic functionality.

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for fast loading
- **Mobile-First**: Responsive design principles
- **PWA Ready**: Service worker and manifest configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

- **mkdevelopment1312** - *Initial work* - [GitHub](https://github.com/mkdevelopment1312)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Radix UI for accessible components
- Vite for the blazing fast build tool
