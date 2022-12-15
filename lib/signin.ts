import * as SecureStore from 'expo-secure-store';
import SignInDTO from '../types/SignInDTO';
import backendFetch from './backendFetch';
import getToken from "./getToken";

export const setToken = async (token: string) => {
    let token2 = JSON.stringify(token);
    await SecureStore.setItemAsync('login-token', token2);
};

export default async function signin(email: string, password: string) {
    let token = await backendFetch<SignInDTO>('POST', 'account/login', {
        email: email,
        password: password,
    });
    
    console.log("Incoming token", token)

    await setToken(token);
    
    console.log("Set token", await getToken())


    return token;
}
