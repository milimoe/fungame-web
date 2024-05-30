import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.milimoe.fungame',
  appName: 'FunGame',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
