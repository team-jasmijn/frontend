import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import StyledButton from '../components/StyledButton';

import List from '../components/List';
import { HomeScreenProps } from './HomeScreen';
import { useState } from 'react';

const image = require('../assets/images/background.png');

export default function StudentInform2({
  navigation: { navigate },
}: HomeScreenProps) {
  const [qualities, setQualities] = useState([
    { item: 'Example', key: 'Example' },
  ]);
  const [hobbies, setHobbies] = useState([{ item: 'Example', key: 'Example' }]);
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
            <List
              getter={qualities}
              setter={setQualities}
              placeHoldeText='Vrolijk'
              height={70}
            />
            <Text style={styles.textInputLabel}>Dit zijn mijn Hobbys:</Text>
            <List
              getter={hobbies}
              setter={setHobbies}
              placeHoldeText='Gamen'
              height={70}
            />
            <StyledButton
              title='Begin met mijn zoektocht'
              onPress={() => {
                navigate('StudentInform');
              }}
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
