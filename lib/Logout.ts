import * as SecureStore from "expo-secure-store";

export default async function Logout (navigate : Function) {
    await SecureStore.deleteItemAsync('login-token');
    navigate('WelcomeScreen');
}