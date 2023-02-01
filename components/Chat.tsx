import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

type ChatProps = {
  name: string;
  lastMessage: string;
  onPress: () => void;
};

export default function Chat(props: ChatProps) {
  return (
    <View style={styles.main} onTouchEnd={props.onPress}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.text}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lastMessage}>{props.lastMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    minWidth: '90%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(70, 70, 70, 0.1)',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  lastMessage: {
    fontSize: 15,
  },
});
