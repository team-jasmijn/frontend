import * as SecureStore from 'expo-secure-store';
import SignInDTO from '../types/SignInDTO';
import backendFetch from './backendFetch';

export const setToken = async (token: string) => {
  let token2 = JSON.stringify(token);
  console.log(token2);
  await SecureStore.setItemAsync('login-token', token2);
};

export default async function signin(username: string, password: string) {
  console.log(username, password)
  let bdata = await backendFetch<SignInDTO>('POST', 'api-token-auth/', {
    username: username,
    password: password,
  });

  console.log(bdata)
  await setToken(bdata.token);

  return bdata;
}
