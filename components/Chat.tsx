import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Chat() {
  return (
    <View style={styles.main}>
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={styles.title}>Test bv</Text>
        <Text numberOfLines={3} style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          culpa repellendus nostrum necessitatibus voluptate error corrupti
          quibusdam esse nisi. Deleniti minima obcaecati odit pariatur incidunt
          assumenda optio accusamus numquam sequi.
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
