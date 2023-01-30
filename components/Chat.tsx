import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

type ChatProps = {
  name: string;
  lastMessage: string;
};

export default function Chat(props: ChatProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.image}>{props.name.charAt(0)}</Text>
      <View style={styles.text}>
        <Text style={styles.title}>{props.name}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {props.lastMessage}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 100,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    background: '#512DA8',
    fontSize: 35,
    color: '#fff',
    TextAlign: 'center',
    LineHeight: 150,
    margin: 20,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 80,
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  description: {},
});
