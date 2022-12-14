import { Button, ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBar from '../components/NavigationBar';
import Notification from '../components/Notification';
import TopBar from '../components/TopBar';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export interface HomeScreenProps {
  navigation: ProfileScreenNavigationProp;
}

const Tab = createBottomTabNavigator();

export default function HomeScreen({
  navigation: { navigate },
}: HomeScreenProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TopBar
        ScreenName='Home'
        Press={async () => {
          navigate('OptionScreen');
        }}
      />
      <View style={styles.content}>
        <Notification
          title='Nieuwe stage Plek'
          message='Er is heeft zich een nieuwe stage plek bij jou in de buurt aangemeld.'
        />
        <Notification
          title='Tip !'
          message='Voeg een foto toe aan je profiel om meer kans te krijgen op een stage plek.'
        />
        <Notification
          title='Je hebt een match'
          message='Er is heeft zich een nieuwe stage plek bij jou in de buurt aangemeld'
        />
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: { flex: 5 },
  button: {
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#334155',
    borderWidth: 2,
    padding: 4,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: 240,
    height: 40,
    margin: 30,
  },
  icon: {
    alignSelf: 'flex-start',
  },
  loginText: {
    fontSize: 20,
    color: '#334155',
  },
  createView: {
    marginTop: 80,
    backgroundColor: '#F1F5F9',
  },
  createButton: {
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#334155',
    borderWidth: 2,
    padding: 4,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: 230,
    height: 35,
  },
  createText: {
    alignSelf: 'center',
  },
});

{
}
