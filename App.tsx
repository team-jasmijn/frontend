import useCachedResources from './hooks/useCachedResources';
import WelcomeScreen from './screens/WelcomeScreen';
import { useFonts } from 'expo-font';
import LoginStudentScreen from './screens/LoginStudentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import StudentInform from './screens/StudentInform';
import StudentInform2 from './screens/StudentInform2';
import HomeScreen from './screens/HomeScreen';
import { useEffect, useState } from 'react';
import SignUp from './screens/SignUpScreen';
import getToken from './lib/getToken';
import SelectSignUpTypeScreen from "./screens/SelectSignUpTypeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CompanyInform from "./screens/CompanyInform";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    getToken().then(token => {
      setLoggedIn(!!token);
      console.log('token', token); // Consider keeping this for debug purposes until there's a real homescreen with data
    });
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
          initialRouteName={isLoggedIn ? 'HomeScreen' : 'WelcomeScreen'}
        >
          {/*<Stack.Navigator initialRouteName={'SelectSignUpTypeScreen'}>*/}
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
            name='SignUpScreen'
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SelectSignUpTypeScreen'
            component={SelectSignUpTypeScreen}
            options={{ headerShown: false}}
            />
          <Stack.Screen
              name='CompanyInform'
              component={CompanyInform}
              options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
