import {Button, ImageBackground, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Svg, { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as SecureStore from 'expo-secure-store';

const image = require('../assets/images/background.png');

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
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={image}
      resizeMode='stretch'
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{ top: -220, fontSize: 69, color: '#fff', alignSelf: 'center' }}
      >
        OnePlace
      </Text>

      <Button
          title='Back'
          onPress={() => {
            navigation.goBack();
          }}
      />

      <Button
          title='Delete token '
          onPress={async () => {
            await SecureStore.deleteItemAsync('login-token').then(r => navigate('WelcomeScreen') )
          }}
      />
      <View style={styles.main}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    top: -30,
    backgroundColor: '#F1F5F9',
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
