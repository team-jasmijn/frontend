import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

type ChatProps = {
  Name: string;
  Image: string;
  Message: string;
};

export default function Chat(props: ChatProps) {
  const pic = {
    uri: props.Image,
  };
  return (
    <View style={styles.main}>
      <Image source={pic} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{props.Name}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {props.Message}
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
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
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
