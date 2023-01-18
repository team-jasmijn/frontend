import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Text, View } from '../components/Themed';
import TopBar from '../components/TopBar';
import getMatchUser from '../lib/getMatchUser';
import { RootStackParamList } from '../types';
import User from '../types/User';
import Company from '../types/Company';
import { SvgUri } from 'react-native-svg';
import sendFlirt from '../lib/sendFlirt';
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
  const [user, setUser] = useState<Company | null>(null);

  const refresh = () => getMatchUser().then(setUser).catch(alert);
  useEffect(() => {
    refresh();
  }, []);

  return (
    <View style={styles.main}>
      <Text></Text>
      <TopBar ScreenName='Matching' Press={() => {}} />
      <View style={styles.content}>
        <View style={styles.container}>
          {user ? (
            <>
              <Text style={styles.title}>{user.name}</Text>
              {/* Skills */}
              <Text style={styles.mail}>{user.email}</Text>

              <View style={styles.buttons}>
                <Pressable
                  onPress={() => {
                    refresh();
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
                    sendFlirt(user.id).then(refresh);
                  }}
                >
                  {/* Accept flirt */}
                  {/* TODO: Write acceptation *here* */}
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
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#334155',
    borderWidth: 2,
    borderRadius: 10,
    flex: 0.8,
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
