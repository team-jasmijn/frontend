import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  FlatList,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from 'react-native';
import StyledButton from '../components/StyledButton';

import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../components/List';

const image = require('../assets/images/background.png');

export default function StudentInform() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Eerste jaar', value: 'Eerste jaar' },
    { label: 'Tweede jaar', value: 'Tweede jaar' },
    { label: 'Derde jaar', value: 'Derde jaar' },
    { label: 'Vierde jaar', value: 'Vierde jaar' },
  ]);

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
            <Text style={styles.textInputLabel}>Ik volg de studie:</Text>
            <TextInput
              style={styles.textInputSmall}
              placeholder='Software Developer'
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>Ik zit in mijn:</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder='Selecteer een leerjaar'
              style={styles.dropDown}
            />

            <Text style={styles.textInputLabel}>Dit zijn mijn leerdoelen:</Text>
            <List placeHoldeText='Leerdoelen' height={110} />
            <StyledButton title='Volgende stap' />
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
    height: 110,
  },
  objectiveScrollview: {},
});
