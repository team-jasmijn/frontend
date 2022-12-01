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

export default function NavBar({}) {
  return (
    <View style={styles.main}>
      <Pressable>
        <SvgUri
          uri='https://icons.getbootstrap.com/assets/icons/house.svg'
          height={40}
          width={40}
          fill={'#38BDF8'}
        />
      </Pressable>
      <Pressable>
        <SvgUri
          uri='https://icons.getbootstrap.com/assets/icons/search.svg'
          height={40}
          width={40}
          fill={'#38BDF8'}
        />
      </Pressable>
      <Pressable>
        <SvgUri
          uri='https://icons.getbootstrap.com/assets/icons/envelope.svg'
          height={40}
          width={40}
          fill={'#38BDF8'}
        />
      </Pressable>
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
