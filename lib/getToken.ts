import * as SecureStore from 'expo-secure-store';

export default function getToken(): Promise<string | null> {
  return SecureStore.getItemAsync('login-token');
}
