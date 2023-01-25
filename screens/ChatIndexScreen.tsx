import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import TopBar from '../components/TopBar';
import Chat from '../components/Chat';

import ChatType from '../types/Chat';
import getChats from '../lib/getChats';
import Loading from '../components/Loading';

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
  const [chats, setChats] = useState<ChatType[] | null>(null);

  useEffect(() => {
    getChats().then(setChats).catch(alert);
  }, []);
  
  if (!chats) return <Loading/>;

  return (
    <View style={styles.main}>
      <TopBar
        ScreenName='Messages'
        Press={() => {
          navigate('HomeScreen');
        }}
      />
      <ScrollView style={styles.ChatIndex}>
        {chats.map(e => (
          <Chat Name={e.Company.name} Image={e.Company.name} Message={e.ChatMessages.Message} />
        ))}
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
