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

export default function CompanyInform({
  navigation: { navigate },
}: CompanyInformProps) {
  const [name, setName] = useState('');
  const [town, setTown] = useState('');
  const [culture, setCulture] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [workWise, setWorkWise] = useState('');

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
              value={name}
              onChangeText={setName}
              labelText={'Ik volg de studie:'}
            />

            <StyledAlternativeInput
              value={town}
              onChangeText={setTown}
              labelText={'Wij zijn gevestigd in:'}
            />

            <StyledAlternativeInput
              value={culture}
              onChangeText={setCulture}
              labelText={'Onze bedrijfscultuur is:'}
            />

            <StyledAlternativeInput
              value={lookingFor}
              onChangeText={setLookingFor}
              labelText={'Wij zoeken een:'}
            />

            <StyledAlternativeInput
              value={workWise}
              onChangeText={setWorkWise}
              labelText={'Onze werkwijze is:'}
            />

            <StyledButton
              title='Volgende stap'
              onPress={async () => {
                console.log(await getToken());
                // sendInfo(study, goals);
                // navigate('');
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );

  function sendInfo(studyInfo: any, goalInfo: any) {
    console.log(studyInfo);
    console.log(goalInfo);
    backendFetch('POST', '/', [studyInfo, goalInfo]);
    // navigate('StudentInform2');
  }
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
