import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Text, View } from '../components/Themed';
import TopBar from '../components/TopBar';
import getMatchUser from '../lib/getMatchUser';
import { RootStackParamList } from '../types';
import User from '../types/User';
import Company from '../types/Company';
import { SvgUri } from 'react-native-svg';
import sendFlirt from '../lib/sendFlirt';
import Loading from '../components/Loading';
import getLoggedInUser from '../lib/getLoggedInUser';
import Role from '../types/Role';
import Notification from '../components/Notification';
import backendFetch from '../lib/backendFetch';
import Flirt from '../types/Flirt';
import getFlirtsForCompany from '../lib/getFlirtsForCompany';
import Logout from '../lib/Logout';
import acceptFlirt from '../lib/acceptFlirt';

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
  const [matchingCompany, setMatchingCompany] = useState<Company | null>(null);
  const [user, setUser] = useState<User>();
  const [flirts, setFlirts] = useState<Flirt[]>([]);
  const [refresh, setRefresh] = useState(Math.random());
  const refreshMatchingUser = () =>
    getMatchUser()
      .then(setMatchingCompany)
      .catch(() => {});

  async function CustomLogout() {
    setRefresh(Math.random());
    await Logout(navigate);
  }

  useEffect(() => {
    refreshMatchingUser();
    getLoggedInUser()
      .then(setUser)
      .catch(() => {});
    getFlirtsForCompany()
      .then(setFlirts)
      .catch(() => {});
  }, [refresh]);

  if (!user) return <Loading />;
  switch (user.role) {
    case Role.Company:
      if (flirts.length === 0) {
        return (
          <View style={styles.main}>
            <TopBar ScreenName='Matching' Press={CustomLogout} />
            <View style={styles.contenContainer}>
              <Text>No flirts yet :(</Text>
            </View>
            <NavBar />
          </View>
        );
      }

      return (
        <View style={styles.main}>
          <TopBar ScreenName='Logout' Press={CustomLogout} />
          <ScrollView style={styles.content}>
            {flirts.map(flirt => (
              <Notification
                title={flirt.student.name}
                key={flirt.id}
                message={flirt.student.profileSettings.description}
                buttonMessage={'Accept Flirt'}
                action={() =>
                  acceptFlirt(flirt.id)
                    .then(getFlirtsForCompany)
                    .then(setFlirts)
                }
              />
            ))}
          </ScrollView>
          <NavBar />
        </View>
      );
    case Role.Student:
      return (
        <View style={styles.main}>
          <Text></Text>
          <TopBar
            ScreenName='Matching'
            Press={() => {
              Logout(navigate);
            }}
          />
          <View style={styles.contenContainer}>
            <View style={styles.container}>
              {matchingCompany ? (
                <>
                  <Text style={styles.title}>{matchingCompany.name}</Text>
                  {/* Skills */}
                  <Text style={styles.mail}>{matchingCompany.email}</Text>

                  <View style={styles.buttons}>
                    <Pressable
                      onPress={() => {
                        refreshMatchingUser();
                      }}
                    >
                      {/* Deny Flirt */}
                      <SvgUri
                        style={styles.buttonElemement}
                        height={75}
                        width={75}
                        uri={
                          'https://cdn.discordapp.com/attachments/1044904535015043082/1064466866132758548/svgviewer-output_1.svg'
                        }
                      />
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        sendFlirt(matchingCompany.id).then(refreshMatchingUser);
                      }}
                    >
                      <SvgUri
                        style={styles.buttonElemement}
                        height={75}
                        width={75}
                        uri={
                          'https://cdn.discordapp.com/attachments/1044904535015043082/1064466866434756618/svgviewer-output.svg'
                        }
                      />
                    </Pressable>
                  </View>
                  <View
                    style={styles.separator}
                    lightColor='#eee'
                    darkColor='rgba(255,255,255,0.1)'
                  />
                </>
              ) : (
                <Text style={styles.title}>No more matches</Text>
              )}
            </View>
          </View>
          <NavBar />
        </View>
      );

    case Role.Moderator:
      return (
        <View style={styles.main}>
          <TopBar ScreenName='Matching' Press={CustomLogout} />
          <View style={styles.contenContainer}>
            <Text>moderators can't flirt!</Text>
          </View>
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
  contenContainer: {
    marginVertical: 150,
  },
  content: {
    marginVertical: 150,
    alignSelf: 'center',
  },
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
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#334155',
    borderWidth: 2,
    borderRadius: 10,
    flex: 0.8,
    width: 300,
  },
  buttonElemement: {
    margin: 10,
  },
  buttons: {
    bottom: 40,
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  mail: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '100%',
  },
});
