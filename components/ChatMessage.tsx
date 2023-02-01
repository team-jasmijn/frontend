import { StyleSheet } from 'react-native';
import User from '../types/User';
import { Text, View } from './Themed';

interface ChatMessageProps {
  message: string;
  sender: User;
  sentByMe: boolean;
}

export default function ChatMessage({
  message,
  sender,
  sentByMe,
}: ChatMessageProps) {
  return (
    <View style={styles.main}>
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <Text style={styles.sender}>{sender.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    margin: 10,
  },
  message: {
    backgroundColor: '#334155',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  messageText: {
    color: 'white',
  },
  sender: {
    alignSelf: 'flex-end',
    color: '#334155',
  },
});
