import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import StyledButton from '../components/StyledButton';
import React, { useState } from 'react';
import List from '../components/List';
import StyledAlternativeInput from '../components/StyledAlternativeInput';
import StyledDropDown from '../components/StyledDropDown';
import backendFetch from '../lib/backendFetch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import getToken from '../lib/getToken';

const image = require('../assets/images/background-v5.png');

type CompanyScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'CompanyInform'
>;

export interface CompanyInformProps {
  navigation: CompanyScreenProp;
  route?: RouteProp<any>;
}

export default function CompanyInform2({
  navigation: { navigate },
}: CompanyInformProps) {
  const [activeIn, setActiveIn] = useState('');
  const [recap, setRecap] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateProfile() {
    const missingFields: string[] = [];
    setIsSubmitting(true);
    if (!activeIn.trim()) {
      missingFields.push('Active sector(s) are required');
    }
    if (!recap.trim()) {
      missingFields.push('Your recap is required');
    }
    if (missingFields.length > 0) {
      alert(missingFields.join('\n'));
      setIsSubmitting(false);
      return;
    }

    backendFetch('POST', 'account/update', {
      activeIn: activeIn,
      recap: recap,
    })
      .then(r => navigate('HomeScreen'))
      .catch(alert); // dont forget to change this to 'StageOpdrachten' page later down the line
    setIsSubmitting(false);
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
            <Text style={styles.header}>Vertel ons wat over uw bedrijf</Text>
            <StyledAlternativeInput
              value={activeIn}
              onChangeText={setActiveIn}
              labelText={'Wij zijn actief in de sectoren:'}
            />

            <StyledAlternativeInput
              value={recap}
              onChangeText={setRecap}
              labelText={'Kleine samenvatting over ons bedrijf:'}
            />

            <StyledButton
              title='Volgende stap'
              onPress={updateProfile}
              disabled={isSubmitting}
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
    paddingTop: 0,
    alignItems: 'center',
  },
  textInputLabel: {
    marginTop: 10,
    zIndex: -500,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  safeContianer: {
    height: 110,
  },
  objectiveScrollview: {},
});
