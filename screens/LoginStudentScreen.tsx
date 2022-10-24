import {Alert, Button, ImageBackground, Pressable, StyleSheet, TextInput} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Svg, {SvgUri} from "react-native-svg";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import StyledInput from "../components/StyledInput";


const image = require("../assets/images/background.png");


export default function LoginStudentScreen() {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={{
            flex: 1,
            justifyContent: "center",
            flexGrow: 1,

        }}>
            {/*<Text style={{top: -220, fontSize: 69, color: "#fff", alignSelf: "center"}}>OnePlace</Text>*/}
            <KeyboardAwareScrollView>
                <View style={styles.main}>
                    <StyledInput labelText={"E-Mail Adres"}/>
                    <StyledInput labelText={"Wachtwoord"}/>
                    
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        marginTop: 300,

    },
    button: {
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        width: 240,
        height: 40,
        margin: 30,
    },
    icon: {
        // color: '#334155',
        alignSelf: 'flex-start',

    },
    loginText: {
        fontSize: 20,
        color: "#334155"
    },
    createView: {
        marginTop: 80,
        backgroundColor: "#F1F5F9"

    },
    createButton: {
        backgroundColor: '#F1F5F9',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        width: 230,
        height: 35,
    },
    createText: {
        alignSelf: 'center',
    }
});
