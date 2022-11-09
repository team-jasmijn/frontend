import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface StyledButtonProps {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
}

export default function StyledButton({
  onPress,
  title,
  disabled,
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, disabled && styles.disabled]}
      disabled={disabled}
    >
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
  disabled: {
    backgroundColor: '#A0AEC0',
  },
  appButtonText: {
    fontSize: 20,
    color: '#F1F5F9',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 7,
  },
});
