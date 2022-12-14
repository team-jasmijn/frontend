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

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignupStudentOrCompanyScreen'
>;

export interface SignupStudentOrCompanyScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export default function SignUp({
  navigation: { navigate },
}: SignupStudentOrCompanyScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    // await new Promise(resolve => setTimeout(resolve, 10 * 1000));

    try {
      await signup({
        username: name,
        email,
        password,
        repeatPassword: passwordConfirm,
        type: UserType.Student,
      });
      navigate('HomeScreen');
      alert('Account created successfully');
    } catch (err: any) {
      let humanFriendlyError = 'There was an error creating your account';

      if (err instanceof BackendError) {
        humanFriendlyError += '\n\n' + err.toString();
      }

      alert(humanFriendlyError);
    } finally {
      setIsSubmitting(false);
    }
  };

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
