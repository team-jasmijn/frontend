import {Alert, Button, ImageBackground, Pressable, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Svg, {SvgUri} from "react-native-svg";



const image = require("../assets/images/background.png");


export default function WelcomeScreen() {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <View style={styles.main}>
                <Pressable
                    style={styles.button}
                    onPress={() => Alert.alert('Nee je mag niet inloggen!')}
                ><SvgUri uri={"https://icons.getbootstrap.com/assets/icons/person.svg"} height={30} width={30} fill={"#334155"} style={styles.icon}/>
                    <Text>Login voor studenten</Text>
                </Pressable>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    button: {
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    icon: {
        // color: '#334155',

    }
});
