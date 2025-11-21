import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.campuslink.app',
  appName: 'CampusLink High-Fidelity Prototype',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
}

export default config
