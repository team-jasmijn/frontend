import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import NavBarItem from './NavBarItem';
import {View} from './Themed';

export default function NavBar() {
    const navigation = useNavigation();

    const activeScreen =
        navigation.getState().routes[navigation.getState().index].name;

    return (
        <View style={styles.main}>
            <NavBarItem
                active={activeScreen === 'HomeScreen'}
                svgUri='https://icons.getbootstrap.com/assets/icons/house.svg'
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <NavBarItem
                active={activeScreen === 'MatchingScreen'}
                svgUri='https://icons.getbootstrap.com/assets/icons/search.svg'
                onPress={() => navigation.navigate('MatchingScreen')}
            />
            <NavBarItem
                active={activeScreen === 'WelcomeScreen'}
                svgUri='https://icons.getbootstrap.com/assets/icons/envelope.svg'
                // onPress={() => navigation.navigate('ChatScreen')}
                onPress={() => navigation.navigate('WelcomeScreen')}
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
        position: "absolute",
        bottom: 30,
    },
});
