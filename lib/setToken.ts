import * as SecureStore from 'expo-secure-store';

export default function setToken(token: string): Promise<void> {
  return SecureStore.setItemAsync('login-token', token);
}
