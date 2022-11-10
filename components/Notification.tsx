import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Pressable,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { View } from './Themed';

export interface NotificationProps {
  title: string;
  message: string;
}

export default function Notification({ title, message }: NotificationProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text>{message}</Text>
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
});
