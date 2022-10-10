import {Alert, Button, ImageBackground, Pressable, StyleSheet, TextInput} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Svg, {SvgUri} from "react-native-svg";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const image = require("../assets/images/background.png");


export default function LoginStudentScreen() {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={{
            flex: 1,
            justifyContent: "center",
            flexGrow: 1,
        }}>
            <Text style={{top: -220, fontSize: 69, color: "#fff", alignSelf: "center"}}>OnePlace</Text>
            <View style={styles.main}>
                <KeyboardAwareScrollView>
                    <TextInput defaultValue={"deez nuts"} style={styles.button}>

                    </TextInput>


                    <View style={styles.createView}>
                        <Text style={styles.createText}>Nog geen account?</Text>
                        <Pressable
                            style={styles.createButton}
                            onPress={() => Alert.alert('Nee je mag niet inloggen!')}>
                            <View style={{alignSelf: "center"}}>
                                <Text style={{fontWeight: "bold", fontSize: 20, color: "#334155"}}>Inschrijven</Text>
                            </View>
                        </Pressable>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#F1F5F9",
        // flexGrow: 1
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
