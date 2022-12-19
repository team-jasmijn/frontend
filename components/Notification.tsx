import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { View } from './Themed';

export interface NotificationProps {
  title: string;
  message: string;
  action?: (event: GestureResponderEvent) => void;
  buttonMessage?: string;
}

export default function Notification({
  title,
  message,
  action,
  buttonMessage,
}: NotificationProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text>{message}</Text>
      {action && buttonMessage && (
        <Pressable onPress={action}>
          <Text style={styles.button}>{buttonMessage}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 350,
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    width: 200,
    height: 20,
    backgroundColor: '#0000',
  },
});
