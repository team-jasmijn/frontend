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
import { RouteProp } from '@react-navigation/native';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export interface SignUpScreen {
  navigation: ProfileScreenNavigationProp;
  route: RouteProp<any>;
}

export default function SignUpScreen({
  navigation: { navigate },
  route,
}: SignUpScreen) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  //@ts-expect-error
  const { Type } = route.params;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const missingFields: String[] = [];
    if (!password.trim() || !passwordConfirm.trim()) {
      missingFields.push('Password is required');
    }

    if (!email.trim()) {
      missingFields.push('Email is required');
    }

    if (!name.trim() && Type === 'Company') {
      missingFields.push('Name is required');
    }

    if (password !== passwordConfirm) {
      missingFields.push('Passwords do not match');
    }

    if (missingFields.length > 0) {
      alert(missingFields.join('\n'));
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
  };

  return (
    <SetupWrapper>
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
