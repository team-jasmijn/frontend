import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default class StyledButton extends React.Component {
  render(onPress, title) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#38BDF8',
    height: 40,
    borderColor: '#334155',
    borderWidth: 1,
  },
  appButtonText: {
    fontSize: 20,
    color: '#F1F5F9',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 7,
  },
});
