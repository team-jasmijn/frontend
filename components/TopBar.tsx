import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Pressable, Button } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { View } from './Themed';

export interface TopBarProps {
  Press: () => void;
  ScreenName: string;
}

export default function TopBar(props: TopBarProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.Title}>{props.ScreenName}</Text>
      <Pressable style={styles.Button} onPress={props.Press}>
        <SvgUri
          uri='https://icons.getbootstrap.com/assets/icons/person.svg'
          height={40}
          width={40}
          fill={'#F1F5F9'}
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
  Title: {
    fontSize: 50,
    color: '#38BDF8',
  },
  Button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#38BDF8',
  },
});
