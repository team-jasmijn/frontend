import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Text, View } from '../components/Themed';
import TopBar from '../components/TopBar';
import UserCard from '../components/UserCard';
import getMatchUser from '../lib/getMatchUser';
import { RootStackParamList } from '../types';
import User from '../types/User';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchingScreen'
>;

export interface MatchingScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export default function MatchingScreen({
  navigation: { navigate },
}: MatchingScreenProps) {
  const [user, setUser] = useState<User>();

  const refresh = () => getMatchUser().then(setUser).catch(alert);

  useEffect(() => {
    refresh();
  }, []);

  if (!user) return <></>;

  return (
    <View style={styles.main}>
      <TopBar ScreenName='Matching' Press={() => {}} />
      <View style={styles.content}>
        <UserCard user={user} />
      </View>
      <NavBar active='MatchingScreen' navigate={navigate} />
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
  content: { flex: 5, flexDirection: 'row' },
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
});
