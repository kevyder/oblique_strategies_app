# Oblique Strategies App

A modern implementation of Brian Eno and Peter Schmidt's Oblique Strategies as a mobile-first web application. Built with Vue.js and Ionic Framework.

## About Oblique Strategies

Oblique Strategies is a card-based method for promoting creativity and overcoming creative blocks, created by Brian Eno and Peter Schmidt in 1975. Each card contains a phrase or cryptic remark that can help break creative blocks by encouraging lateral thinking.

## Features

- Mobile-first design
- Swipeable card interface
- Random strategy presentation
- Responsive layout
- Works offline (PWA)

## Technology Stack

- Vue 3
- Ionic Framework
- Capacitor
- TypeScript
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kevyder/oblique_strategies_app.git
cd oblique_strategies_app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ionic serve
```

The application will be available at `http://localhost:8100`.

### Building for Production

To create a production build:

```bash
ionic build
```

### Building for Android

1. Add Android platform:
```bash
ionic cap add android
```

2. Build the app:
```bash
ionic build
```

3. Copy the built files to Android platform:
```bash
ionic cap copy
```

4. Update Android platform dependencies:
```bash
ionic cap sync
```

5. Open the project in Android Studio:
```bash
ionic cap open android
```

From Android Studio you can:
- Run the app on an emulator
- Build a debug APK
- Generate a signed release APK for Play Store distribution

#### Requirements for Android Development

- Java JDK
- Android Studio
- Android SDK
- Gradle

Make sure to have the latest versions of these tools installed on your system.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Brian Eno and Peter Schmidt for creating the original Oblique Strategies
- The Ionic Framework team
- The Vue.js team

## Notes

The Oblique Strategies content is used for educational and inspirational purposes. The original Oblique Strategies is copyright © Brian Eno and Peter Schmidt.
