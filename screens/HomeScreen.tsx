import { ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import User from '../types/User';
import getLoggedInUser from '../lib/getLoggedInUser';
import Flirt from '../types/Flirt';
import Logout from '../lib/Logout';
import StudentHomeScreen from './StudentHomeScreen';
import ModeratorHomeScreen from './ModeratorHomeScreen';
import CompanyHomeScreen from './CompanyHomeScreen';
import Loading from '../components/Loading';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import backendFetch from '../lib/backendFetch';
import Company from '../types/Company';

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
  const [refresh, setRefresh] = useState(Math.random());

  useEffect(() => {
    getLoggedInUser().then(setUser).catch(alert);
    // .catch(alert); - Removed because this fires for normal users as well
    // and they don't have access to the companies endpoint, so it would
    // always show a confusing error message.
  }, [refresh]);

  async function CustomLogout() {
    setRefresh(Math.random());
    await Logout(navigate);
  }
  console.log('user', user);

  switch (user?.role) {
    case 'Student':
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
          <StudentHomeScreen />
          <NavBar />
        </View>
      );
    case 'Moderator':
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
          <ModeratorHomeScreen />
        </View>
      );
    case 'Company':
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
          <CompanyHomeScreen />
          <NavBar />
        </View>
      );
  }

  return <Loading />;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
