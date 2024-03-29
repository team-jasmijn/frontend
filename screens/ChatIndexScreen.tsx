import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import TopBar from '../components/TopBar';
import Chat from '../components/Chat';

import ChatType from '../types/Chat';
import getChats from '../lib/getChats';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';

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

  if (chats?.length === 0) {
    return (
      <View style={styles.main}>
        <TopBar
          ScreenName='Messages'
          Press={() => {
            navigate('HomeScreen');
          }}
        />
        <ScrollView style={styles.content}>
          <Notification
            title='No chats could be found'
            message='No chats could be found for you.'
          />
        </ScrollView>
        <NavBar />
      </View>
    );
  }

  console.log('chats', chats);

  return (
    <View style={styles.main}>
      <TopBar
        ScreenName='Messages'
        Press={() => {
          navigate('HomeScreen');
        }}
      />
      <ScrollView style={styles.content}>
        {chats?.map(chat => (
          <Chat
            name={chat.company.name}
            key={chat.id}
            lastMessage={
              chat.chatMessages[chat.chatMessages.length - 1]?.message || ''
            }
            onPress={() => {
              navigate('ChatDetailScreen', { chat });
            }}
          />
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  content: { flex: 5, marginTop: 100 },
});
