import * as SecureStore from 'expo-secure-store';
import SignInDTO from '../types/SignInDTO';
import backendFetch from './backendFetch';
import getToken from './getToken';

export const setToken = async (token: string) => {
  let token2 = JSON.stringify(token);
  await SecureStore.setItemAsync('login-token', token2);
};

export default async function signin(email: string, password: string) {
  try {
    let token = await backendFetch<SignInDTO>('POST', 'account/login', {
      email: email,
      password: password,
    });
    await setToken(token);
    return true;
  } catch (e) {
    return false;
  }
}
