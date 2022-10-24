import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {ImageBackground} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import {useFonts} from "expo-font";
import LoginStudentScreen from "./screens/LoginStudentScreen";

const image = require("./assets/images/background.png");


let isLoggedIn = false // For testing, will require further programming

export default function App() {
  const isLoadingComplete = useCachedResources(); 
  const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({
        'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
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
              <ImageBackground source={image} resizeMode="stretch" style={{
                  flex: 1,
                  justifyContent: "center"
              }}>
                  <SafeAreaProvider>
                      {/*<Navigation colorScheme={colorScheme} />*/}
                      {/*<StatusBar />*/}
                  </SafeAreaProvider>
              </ImageBackground>
          );
      } else {
          return <LoginStudentScreen/>
      }
  }
}
