import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ImageBackground } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

import { useFonts } from 'expo-font';
import LoginStudentScreen from './screens/LoginStudentScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveInScreen from './screens/ActiveInScreen';
import ActiveInScreen2 from './screens/ActiveInScreen_2';
import { RootStackParamList } from './types';
import StudentInform from './screens/StudentInform';
import StudentInform2 from './screens/StudentInform2';
import SignUp from './screens/SignUpScreen';
const image = require('./assets/images/background.png');

let isLoggedIn = false; // For testing, will require further programming

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isLoggedIn) {
      return (
        <ImageBackground
          source={image}
          resizeMode='stretch'
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <SafeAreaProvider>
            {/*<Navigation colorScheme={colorScheme} />*/}
            {/*<StatusBar />*/}
          </SafeAreaProvider>
        </ImageBackground>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='WelcomeScreen'>
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
              name='SignupStudentOrCompanyScreen'
              component={SignUp}
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
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
