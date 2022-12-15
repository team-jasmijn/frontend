import { View, StyleSheet, Text, TextInput } from 'react-native';

import React, { useState } from 'react';
import SetupWrapper from '../components/SetupWrapper';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import SocialLogin from '../components/SocialLogin';
import signup from '../lib/signup';
import UserType from '../types/UserType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import BackendError from '../lib/backendError';
import {RouteProp} from "@react-navigation/native";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export interface SignUpScreen {
  navigation: ProfileScreenNavigationProp;
  route: RouteProp<any>;
}

export default function SignUpScreen( {
  navigation: { navigate }, route,
}: SignUpScreen) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  //@ts-expect-error
  const { Type } = route.params
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    switch (Type) {
      case 'Student':
        try {
          await signup({
            username: name,
            email,
            password,
            repeatPassword: passwordConfirm,
            type: UserType.Student,
          });
          navigate('StudentInform');
        } catch (err: any) {
          let humanFriendlyError = 'There was an error creating your account';
          console.log(err);
          if (err instanceof BackendError) {
            humanFriendlyError += '\n\n' + err.toString();
          }
          alert(humanFriendlyError);
        } finally {
          setIsSubmitting(false);
        }
        break;
      case 'Company':
        try {
          await signup({
            username: name,
            email,
            password,
            repeatPassword: passwordConfirm,
            type: UserType.Business,
          });
          navigate('CompanyInform');
        } catch (err: any) {
          let humanFriendlyError = 'There was an error creating your account';
          console.log(err);
          if (err instanceof BackendError) {
            humanFriendlyError += '\n\n' + err.toString();
          }
          alert(humanFriendlyError);
        } finally {
          setIsSubmitting(false);
        }
        break;
    }
  }

  return (
    <SetupWrapper>
      <View>
        <SocialLogin company='google' />
        <SocialLogin company='microsoft' />
      </View>
      <Text style={styles.or}>of</Text>
      <View>
        <StyledInput value={name} onChangeText={setName} labelText='Name' />
        <StyledInput
          value={email}
          onChangeText={setEmail}
          labelText='Email'
          keyboardType='email-address'
        />
        <StyledInput
          value={password}
          onChangeText={setPassword}
          labelText='Password'
          secureTextEntry
        />
        <StyledInput
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          labelText='Confirm Password'
          secureTextEntry
        />
        <StyledButton
          onPress={handleSubmit}
          title='Sign Up'
          disabled={isSubmitting}
        />
      </View>
    </SetupWrapper>
  );
}

const styles = StyleSheet.create({
  or: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
