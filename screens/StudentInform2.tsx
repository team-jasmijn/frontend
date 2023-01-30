import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import StyledButton from '../components/StyledButton';

import List from '../components/List';
import { HomeScreenProps } from './HomeScreen';
import React, { useState } from 'react';
import backendFetch from '../lib/backendFetch';
import StyledAlternativeInput from '../components/StyledAlternativeInput';

const image = require('../assets/images/background.png');

export default function StudentInform2({
  navigation: { navigate },
}: HomeScreenProps) {
  const [qualities, setQualities] = useState('');
  const [hobbies, setHobbies] = useState('');

  function updateProfile() {
    const missingFields: string[] = [];
    console.log('state: ', { qualities, hobbies });
    //replaceAll doesn't exist, so string.replace with this exact regex works fine
    if (!qualities.replace(/,/g, '').trim()) {
      missingFields.push('You have more qualities than this');
    }
    if (!hobbies.replace(/,/g, '').trim()) {
      missingFields.push('Fill in at least 1 hobby');
    }
    if (missingFields.length > 0) {
      alert(missingFields.join('\n'));
      return;
    }

    backendFetch('POST', 'account/update', {
      qualities: JSON.stringify(qualities),
      hobbies: JSON.stringify(hobbies),
    }).then(r => navigate('HomeScreen')).catch(alert);
  }

  return (
    <ImageBackground
      source={image}
      resizeMode='stretch'
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Vertel ons wat over jezelf:</Text>
            <Text style={styles.textInputLabel}>
              Dit zijn mijn kwaliteiten:
            </Text>
            <StyledAlternativeInput
              value={qualities}
              onChangeText={setQualities}
              labelText={'Ik volg de studie:'}
            />
            <Text style={styles.textInputLabel}>Dit zijn mijn Hobbys:</Text>
            <StyledAlternativeInput
              value={hobbies}
              onChangeText={setHobbies}
              labelText={'Ik volg de studie:'}
            />
            <StyledButton
              title='Begin met mijn zoektocht'
              onPress={updateProfile}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 200,
    width: '90%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInputSmall: {
    borderColor: '#334155',
    color: '#334155',
    borderWidth: 1,
    height: 40,
    fontSize: 15,
    marginBottom: 10,
    padding: 10,
  },
  textInputLarge: {
    borderColor: '#334155',
    color: '#334155',
    borderWidth: 1,
    height: 60,
    fontSize: 15,
    marginBottom: 10,
  },
  textInputLabel: {
    marginTop: 10,
  },
  dropDown: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    width: '85%',
    marginBottom: 10,
  },
  safeContianer: {
    height: 70,
  },
  objectiveScrollview: {},
});
