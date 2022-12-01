import * as SecureStore from 'expo-secure-store';

export default function getToken(token: string): Promise<void> {
  return SecureStore.setItemAsync('login-token', token);
}
