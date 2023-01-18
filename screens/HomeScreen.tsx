import { ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';
import TopBar from '../components/TopBar';
import backendFetch from '../lib/backendFetch';
import User from '../types/User';
import getLoggedInUser from '../lib/getLoggedInUser';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export interface HomeScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export default function HomeScreen({
  navigation: { navigate },
}: HomeScreenProps) {
  const [user, setUser] = useState<User>();
  const [companies, setCompanies] = useState<User[]>();

  useEffect(() => {
    getLoggedInUser().then(setUser).catch(alert);
    backendFetch<User[]>('GET', 'company')
      .then(e => {
        setCompanies(e as User[]);
      })
      .catch(alert);
  }, []);

  if (!user)
    return (
      <View style={styles.main}>
        <Text>loading...</Text>
        <TopBar
          ScreenName='Logout'
          Press={async () => {
            await SecureStore.deleteItemAsync('login-token').then(r =>
              navigate('WelcomeScreen')
            );
          }}
        />
      </View>
    );
  if (!user.isAdmin)
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

  return (
    <View style={styles.main}>
      <TopBar
        ScreenName={'Companies'}
        Press={async () => {
          await SecureStore.deleteItemAsync('login-token').then(r =>
            navigate('WelcomeScreen')
          );
        }}
      />

      <ScrollView style={styles.content}>
        {companies?.map(e => (
          <Notification
            title={e.name}
            message={e.email + (e.approved ? ' (approved)' : ' (unapproved)')}
            key={e.name}
            action={async o => {
              backendFetch('POST', 'company/approve/' + e.id)
                .then(o => {
                  e.approved = !e.approved;
                  setCompanies([...companies]);
                })
                .catch(alert);
            }}
            buttonMessage={e.approved ? 'unapprove' : 'approve'}
          />
        ))}
      </ScrollView>
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
