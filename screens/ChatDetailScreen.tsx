import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonWhite from '../components/StyledButtonWhite';
import { useNavigation } from '@react-navigation/native';
import SetupWrapper from '../components/SetupWrapper';
import { useEffect, useState } from 'react';
import Chat from '../types/Chat';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import getChat from '../lib/getChat';
import getLoggedInUser from '../lib/getLoggedInUser';
import User from '../types/User';
import sendChatMessage from '../lib/sendChatMessage';

export interface ChatDetailScreenProps {
  route: { params: { chat: Chat } };
}

export default function ChatDetailScreen({ route }: ChatDetailScreenProps) {
  const navigation = useNavigation();
  const [newMessage, setNewMessage] = useState('');
  const [chat, setChat] = useState<Chat>(route.params.chat);
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timer | null>(
    null
  );

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    getLoggedInUser().then(setLoggedInUser).catch(alert);
  }, []);

  if (!chat) {
    navigation.navigate('ChatIndexScreen');
    return null;
  }

  async function refresh() {
    try {
      await getChat(chat.id).then(chat => setChat(chat as Chat));
    } catch (error) {
      if ((error as Error).toString().includes('AuthenticationError')) {
        clearInterval(refreshInterval as NodeJS.Timer);
        return;
      }

      alert(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      refresh();
    }, 1000);
    setRefreshInterval(interval);
  }, []);

  return (
    <View style={styles.main}>
      <TopBar
        title={
          loggedInUser?.id === chat.companyId
            ? chat.student.name
            : chat.company.name
        }
        uri='https://icons.getbootstrap.com/assets/icons/escape.svg'
        ScreenName='ChatIndexScreen'
        Press={() => {
          navigation.navigate('ChatIndexScreen');
        }}
      />
      <KeyboardAwareScrollView style={styles.content}>
        <ScrollView style={styles.chatView}>
          {chat.chatMessages.map(message => (
            <View
              key={message.id}
              style={{
                alignSelf:
                  loggedInUser?.id === message.senderId
                    ? 'flex-end'
                    : 'flex-start',
                backgroundColor:
                  loggedInUser?.id === message.senderId ? '#334155' : '#F1F5F9',
                borderRadius: 10,
                padding: 10,
                margin: 10,
                // Text color
                borderColor:
                  loggedInUser?.id === message.senderId ? '#F1F5F9' : '#334155',
                borderWidth: 1,
                maxWidth: '80%',
              }}
            >
              <Text
                style={{
                  color:
                    loggedInUser?.id === message.senderId
                      ? '#F1F5F9'
                      : '#334155',
                }}
              >
                {message.message}
              </Text>
            </View>
          ))}
        </ScrollView>
      </KeyboardAwareScrollView>
      <View style={styles.createView}>
        <TextInput
          placeholder='Type your message here'
          onChangeText={setNewMessage}
          value={newMessage}
          style={{
            padding: 10,
          }}
        />
        <StyledButton
          title='Send'
          onPress={() => {
            let message = newMessage.trim();
            if (!message) return;
            sendChatMessage(chat.id, message).then(() => {
              refresh();
            });

            setNewMessage('');
          }}
        />
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    marginTop: 100,
    flex: 1,
    width: '100%',
    minHeight: '30%',
  },
  chatView: {
    flex: 1,
    width: '100%',
    padding: 20,
  },

  createView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    bottom: 0,
  },
});
