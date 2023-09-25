import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appomsv.app',
  appName: 'appo-msv-app',
  webDir: 'dist/qmvet',
  server: {
    androidScheme: 'https'
  }
};

export default config;
