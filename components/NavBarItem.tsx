import { Pressable, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

export interface NavBarItemProps {
  active: boolean;
  svgUri: string;
  onPress: () => void;
}

export default function NavBarItem({
  active,
  svgUri,
  onPress,
}: NavBarItemProps) {
  return (
    <Pressable
      style={active ? styles.active : styles.inactive}
      onPress={onPress}
      disabled={active}
    >
      <SvgUri
        uri={svgUri}
        height={40}
        width={40}
        fill={active ? '#fff' : '#38BDF8'}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  active: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#38BDF8',
  },
  inactive: {
    backgroundColor: '#fff',
  },
});
