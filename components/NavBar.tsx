import { StyleSheet, Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';
import NavBarItem from './NavBarItem';
import { View } from './Themed';

export interface NavBarProps {
  active: string;
  navigate: (screen: string) => void;
}

export default function NavBar({ active, navigate }: NavBarProps) {
  return (
    <View style={styles.main}>
      <NavBarItem
        active={active === 'HomeScreen'}
        svgUri='https://icons.getbootstrap.com/assets/icons/house.svg'
        onPress={() => navigate('HomeScreen')}
      />
      <NavBarItem
        active={active === 'MatchingScreen'}
        svgUri='https://icons.getbootstrap.com/assets/icons/search.svg'
        onPress={() => navigate('MatchingScreen')}
      />
      <NavBarItem
        active={active === 'ChatScreen'}
        svgUri='https://icons.getbootstrap.com/assets/icons/envelope.svg'
        onPress={() => navigate('ChatScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 50,
    width: '100%',
    height: '10%',
  },
});
