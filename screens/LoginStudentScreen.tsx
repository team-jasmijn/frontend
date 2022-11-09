import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonWhite from '../components/StyledButtonWhite';
import { useNavigation } from '@react-navigation/native';
import SetupWrapper from '../components/SetupWrapper';
import backendFetch from '../lib/backendFetch';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginStudentScreen'
>;

export interface LoginScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export default function LoginStudentScreen({
  navigation: { navigate },
}: LoginScreenProps) {
  const navigation = useNavigation();
  const [textMail, setTextMail] = useState('');
  const [textPass, setTextPass] = useState('');

  const setToken = async (token: string) => {
    let token2 = JSON.stringify(token);
    console.log(token2);
    await SecureStore.setItemAsync('login-token', token2);
  };

  async function sendLogin() {
    let bdata = await backendFetch('POST', 'api-token-auth/', {
      username: textMail,
      password: textPass,
    });
    setToken(bdata).catch(err => {
      console.error(err);
    });
    console.log('hi');
    navigate('HomeScreen');
  }

  return (
    <SetupWrapper>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <StyledInput
            labelText={'E-Mail Adres'}
            value={textMail}
            onChangeText={setTextMail}
            secureTextEntry={false}
          />
          <StyledInput
            labelText={'Wachtwoord'}
            value={textPass}
            onChangeText={setTextPass}
            secureTextEntry={true}
          />
          <View
            style={{
              width: 240,
              alignSelf: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0)',
            }}
          >
            <StyledButton
              title={'Login als student'}
              onPress={() => {
                sendLogin().catch(function (err) {});
              }}
            />
            <Text style={styles.UnderText}>OF</Text>
            <StyledButtonWhite
              title={'Login with'}
              titleBold={'Google'}
              svg={'https://icons.getbootstrap.com/assets/icons/google.svg'}
            />
            <StyledButtonWhite
              title={'Login with'}
              titleBold={'Microsoft'}
              svg={'https://icons.getbootstrap.com/assets/icons/microsoft.svg'}
            />
          </View>
        </View>
        <Button
          title='Back'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </KeyboardAwareScrollView>
    </SetupWrapper>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  UnderText: {
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(52, 52, 52, 0)',
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
    // color: '#334155',
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
    backgroundColor: '#F1F5F9',
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
