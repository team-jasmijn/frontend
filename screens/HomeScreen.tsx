import { Button, ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBar from '../components/NavigationBar';
import Notification from '../components/Notification';
import TopBar from '../components/TopBar';
import backendFetch from '../lib/backendFetch';
import User from '../types/User';

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
  const [user, setUser] = useState<User>();

  const [companies, setCompanies] = useState<User[]>();

  if (!user) {
    backendFetch<User>('GET', 'account')
      .then(e => {
        setUser(e as User);
      })
      .catch(console.log);
  }

  if (!companies) {
    backendFetch<User[]>('GET', 'company')
      .then(e => {
        setCompanies(e as User[]);
      })
      .catch(console.log);
  }

  if (user?.isAdmin == true) {
    return (
      <View style={styles.main}>
        <TopBar
          ScreenName={'Welkom'}
          Press={async () => {
            await SecureStore.deleteItemAsync('login-token').then(r =>
              navigate('WelcomeScreen')
            );
          }}
        />

        <View style={styles.content}>
          {companies?.map(e => (
            <Notification title={e.name} message={e.email} />
          ))}
        </View>
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <TopBar
        ScreenName='Logout'
        Press={async () => {
          await SecureStore.deleteItemAsync('login-token').then(r =>
            navigate('WelcomeScreen')
          );
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
