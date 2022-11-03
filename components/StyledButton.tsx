import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface StyledButtonProps {
  onPress?: () => void;
  title: string;
}

export default function StyledButton({ onPress, title }: StyledButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#38BDF8',
    height: 40,
    borderColor: '#334155',
    borderWidth: 1,
  },
  appButtonText: {
    fontSize: 20,
    color: '#F1F5F9',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 7,
  },
});
