import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

export interface StyledInputProps {
  labelText: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function StyledInput({
  labelText,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}: StyledInputProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.textInputLabel}>{labelText}</Text>
      <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.textInputSmall}
      />
    </View>
  );
}

const styles = StyleSheet.create({

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
