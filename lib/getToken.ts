import * as SecureStore from 'expo-secure-store';

export default async function getToken(): Promise<string | null> {
  const token= await SecureStore.getItemAsync('login-token');

  try {
    return JSON.parse(token || '')
  } catch (e) {
    return token
  }
}
