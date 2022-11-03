import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export interface StyledInputProps {
  labelText: string;
}
export default function StyledInput({ labelText }: StyledInputProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.labelText}>{labelText}</Text>
      <TextInput defaultValue={''} style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#334155',
    borderWidth: 2,
    padding: 4,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: 240,
    height: 40,
    backgroundColor: '#F1F5F9',
  },
  labelText: {
    // marginLeft: 95,
  },
});
