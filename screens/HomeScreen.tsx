import { ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavigationBar';
import Notification from '../components/Notification';
import TopBar from '../components/TopBar';
import backendFetch from '../lib/backendFetch';
import User from '../types/User';
import getLoggedInUser from '../lib/getLoggedInUser';
import Flirt from '../types/Flirt';
import Logout from '../lib/Logout';

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
  const [companies, setCompanies] = useState<User[]>([]);
  const [flirts, setFlirts] = useState<Flirt[]>([]);
  const [refresh, setRefresh] = useState(Math.random());

  useEffect(() => {
    getLoggedInUser().then(setUser).catch(alert);
    backendFetch<User[]>('GET', 'company')
      .then(companies => setCompanies(companies as User[]))
      .catch();
    backendFetch<Flirt[]>('GET', 'flirts')
      .then(flirts => setFlirts(flirts as Flirt[]))
      .catch();
  }, [refresh]);

  async function CustomLogout() {
    await Logout(navigate);
    setRefresh(Math.random());
  }

  switch (user?.role) {
    case 'Student':
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
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
    case 'Moderator':
      return (
        <View style={styles.main}>
          <TopBar ScreenName={'Companies'} Press={CustomLogout} />

          <ScrollView style={styles.content}>
            {companies?.map(company => (
              <Notification
                title={company.name}
                message={
                  company.email +
                  (company.approved ? ' (approved)' : ' (unapproved)')
                }
                key={company.name}
                action={async () => {
                  backendFetch('POST', 'company/approve/' + company.id)
                    .then(() => {
                      company.approved = !company.approved;
                      setCompanies([...companies]);
                    })
                    .catch(alert);
                }}
                buttonMessage={company.approved ? 'unapprove' : 'approve'}
              />
            ))}
          </ScrollView>
        </View>
      );
    case 'Company':
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
          <ScrollView style={styles.content}>
            {flirts?.map(flirt => (
              <Notification
                title={flirt.student.name}
                key={flirt.id}
                message={flirt.student.profileSettings.description}
              />
            ))}
          </ScrollView>
        </View>
      );
  }
  return (
    <View style={styles.main}>
      <Text>loading...</Text>
      <TopBar ScreenName='Logout' Press={CustomLogout} />
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
