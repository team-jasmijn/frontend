import {Alert, Button, ImageBackground, Pressable, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Svg, {SvgUri} from "react-native-svg";
import {useNavigation} from "@react-navigation/native";


const image = require("../assets/images/background.png");


export default function WelcomeScreen({ navigation: { navigate } }) {

    return (
        <ImageBackground source={image} resizeMode="stretch" style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <Text style={{top: -220, fontSize: 69, color: "#fff", alignSelf: "center"}}>OnePlace</Text>
            <View style={styles.main}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigate('LoginStudentScreen') }>
                    <View style={[{flex: 1, flexDirection: 'row'}]}>
                        <SvgUri uri={"https://icons.getbootstrap.com/assets/icons/person.svg"} height={25} width={25}
                                fill={"#334155"} style={styles.icon}/>
                        <Text style={styles.loginText}> Login voor<Text
                            style={{fontWeight: "bold"}}> studenten</Text></Text>
                    </View>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => Alert.alert('Werkt nog niet!')}>
                    <View style={[{flex: 1, flexDirection: 'row'}]}>
                        <SvgUri uri={"https://icons.getbootstrap.com/assets/icons/building.svg"} height={25} width={25}
                                fill={"#334155"} style={styles.icon}/>
                        <Text style={styles.loginText}> Login voor<Text
                            style={{fontWeight: "bold"}}> bedrijven</Text></Text>
                    </View>
                </Pressable>
                <View style={styles.createView}>
                    <Text style={styles.createText}>Nog geen account?</Text>
                    <Pressable
                        style={styles.createButton}
                        onPress={() => Alert.alert('Werkt nog niet!')}>
                        <View style={{alignSelf: "center"}}>
                            <Text style={{fontWeight: "bold", fontSize: 20, color: "#334155"}}>Inschrijven</Text>
                        </View>
                    </Pressable>
                </View>


            </View>

        </ImageBackground>

    );


}


const styles = StyleSheet.create({
    main: {
        top: -30,
        backgroundColor: "#F1F5F9"
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
