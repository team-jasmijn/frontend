import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export interface StyledInputProps {
  labelText: string;
  options: any;
  setOptions: any;
  value: any;
  setValue: any;
}

export default function StyledInput({
  labelText,
  options,
  setOptions,
    value,
    setValue,
}: StyledInputProps) {
  const [open, setOpen] = useState(false); // Dropdown internal


  return (
    <View style={styles.view}>
      <Text style={styles.textInputLabel}>{labelText}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={options}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setOptions}
        placeholder='Selecteer een leerjaar'
        style={styles.dropDown}
        dropDownContainerStyle={{ zIndex: 5000, elevation: 5000 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    width: '100%',
    marginBottom: 10,
    zIndex: 50000,
  },
  textInputSmall: {
    borderColor: '#334155',
    color: '#334155',
    borderWidth: 1,
    height: 40,
    fontSize: 15,
    marginBottom: 10,
    padding: 10,
    width: '100%',
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
  view: {
    alignSelf: 'center',
    marginBottom: 15,
    width: 350,
  },
  labelText: {
    // marginLeft: 95,
  },
});
