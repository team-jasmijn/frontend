import { StyleSheet } from 'react-native';
import User from '../types/User';
import { Text, View } from './Themed';
import Company from "../types/Company";

export interface UserCardProps {
  children?: JSX.Element;
  user: Company | User;
}

export default function UserCard({ user, children }: UserCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      {/* Skills */}
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#334155',
    borderWidth: 2,
    borderRadius: 10,
    flex: 0.8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '100%',
  },
});
