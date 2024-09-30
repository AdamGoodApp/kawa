declare module 'react-native-config' {
  export interface NativeConfig {
    TMBD_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
