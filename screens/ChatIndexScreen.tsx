import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Chat from '../components/Chat';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ChatIndexScreen'
>;

export interface ChatIndexScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export default function ChatIndexScreen({
  navigation: { navigate },
}: ChatIndexScreenProps) {
  return (
    <View style={styles.main}>
      <TopBar
        ScreenName='Messages'
        Press={() => {
          navigate('HomeScreen');
        }}
      />
      <ScrollView style={styles.ChatIndex}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  ChatIndex: {
    flex: 5,
  },
});
