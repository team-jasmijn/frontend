import { Text, View } from './Themed';
import TopBar from './TopBar';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.main}>
      <Text>loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
