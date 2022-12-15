import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import StyledButton from '../components/StyledButton';
import React, { useState } from 'react';
import List from '../components/List';
import { HomeScreenProps } from './HomeScreen';
import StyledAlternativeInput from '../components/StyledAlternativeInput';
import StyledDropDown from '../components/StyledDropDown';
import backendFetch from '../lib/backendFetch';
import getToken from "../lib/setToken";

const image = require('../assets/images/background.png');

export default function StudentInform({
  navigation: { navigate },
}: HomeScreenProps) {
  const [goals, setGoals] = useState([{ item: 'Example', key: 'Example' }]);
  const [study, setStudy] = useState('');
  const [items, setItems] = useState([
    { label: 'Eerste jaar', value: 'Eerste jaar' },
    { label: 'Tweede jaar', value: 'Tweede jaar' },
    { label: 'Derde jaar', value: 'Derde jaar' },
    { label: 'Vierde jaar', value: 'Vierde jaar' },
  ]);
  const [year, setYear] = useState(null);
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
            <StyledAlternativeInput
              value={study}
              onChangeText={setStudy}
              labelText={'Ik volg de studie:'}
            />
            <StyledDropDown
              labelText={'Ik zit mijn:'}
              options={items}
              value={year}
              setValue={setYear}
              setOptions={setItems}
            />
            <Text style={styles.textInputLabel}>Dit zijn mijn leerdoelen:</Text>
            <List
              placeHoldeText='Leerdoelen'
              height={110}
              setter={setGoals}
              getter={goals}
            />

            <StyledButton
              title='Volgende stap'
              onPress={() => {
                sendInfo(study, goals, year);
              }}
            />

            <Button
              title={'debug'}
              onPress={() => {
                sendInfo(study, goals, year);
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );

  function sendInfo(studyInfo: any, goalInfo: any, yearInfo: any) {
    console.log(studyInfo);
    console.log(goalInfo);
    backendFetch('POST', 'account/update', {education: studyInfo, goals: JSON.stringify(goalInfo),  educationLevel: yearInfo})
        .then( r =>
        navigate('StudentInform2')
    );
    // navigate('StudentInform2');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
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
