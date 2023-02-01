import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonWhite from '../components/StyledButtonWhite';
import { useNavigation } from '@react-navigation/native';
import SetupWrapper from '../components/SetupWrapper';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import signin from '../lib/signin';
import signup from '../lib/signup';
import UserType from '../types/UserType';
import BackendError from '../lib/backendError';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function sendLogin() {
  setIsSubmitting(true);
    const missingFields: string[] = [];
    if (!email) {
      missingFields.push('Email is required');
    }
    if (!password) {
      missingFields.push('Password is required');
    }
    if (missingFields.length > 0) {
      setIsSubmitting(false);
      alert(missingFields.join('\n'));
      return;
    }

    try {
      await signin(email, password);
      navigate('HomeScreen');
      return;
    } catch (e) {}
    alert('Email of wachtwoord kloppen niet');
    setIsSubmitting(false);
  }

  return (
    <SetupWrapper>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <StyledInput
            labelText={'Email'}
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false}
            keyboardType={'email-address'}
          />
          <StyledInput
            labelText={'Wachtwoord'}
            value={password}
            onChangeText={setPassword}
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
              disabled={isSubmitting}
              title={'Inloggen'}
              onPress={() => {
                sendLogin().catch(function (err) {});
              }}
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
