import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { ImageBackground } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { useFonts } from 'expo-font';
import LoginStudentScreen from './screens/LoginStudentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import StudentInform from './screens/StudentInform';
import StudentInform2 from './screens/StudentInform2';
import HomeScreen from './screens/HomeScreen';

import * as SecureStore from 'expo-secure-store';
import backendFetch from './lib/backendFetch';
import { useEffect, useState } from 'react';

const getToken = () => {
  return SecureStore.getItemAsync('login-token');
};

// Still TBD on how we do this
// and if its needed.
const validateToken = () => {
  getToken().then(async token => {
    if (token == (await backendFetch('GET', 'api-auth-token'))) {
    }
  });
};

let isLoggedIn = false;
getToken().then(token => {
  console.log('hi2');
  if (token) {
    isLoggedIn = true;
  }
});

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [initialRoute, setInitialRoute] = useState<string>('WelcomeScreen');
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (isLoggedIn) {
      setInitialRoute('HomeScreen');
      console.log('logged in!!!!');
    } else {
      setInitialRoute('WelcomeScreen');
      console.log('Not logged in!!');
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute ? undefined : 'WelcomeScreen'}
        >
          <Stack.Screen
            name='WelcomeScreen'
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='LoginStudentScreen'
            component={LoginStudentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='StudentInform'
            component={StudentInform}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='StudentInform2'
            component={StudentInform2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
