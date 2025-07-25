import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kevyder.obliquestrategies',
  appName: 'Oblique Strategies',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 500,
    },
  },
};

export default config;
