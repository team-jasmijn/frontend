import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import StyledButton from "../components/StyledButton";

const image = require("../assets/images/background-v3.png");

export default function ActiveInScreen() {
  return (
    <ImageBackground
      source={image}
      resizeMode="stretch"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Vertel ons wat over uw bedrijf:</Text>
            <Text style={styles.textInputLabel}>Wij zijn:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="One Place B.V"
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>Wij zijn gevestigd in:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Zwolle, Dronten"
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>Onze bedrijfscultuur is:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Mensgericht. Wij vinden onze medewerkers erg belangrijk"
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>Wij zoeken:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Eenn doorzetter die graag aan het Werk wilt in onze nieuwe omgeving"
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>Onze werkwijze is:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Wij werken met scrum binnen ons bedrijf."
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <StyledButton title="Volgende stap" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 150,
    width: "90%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textInput: {
    borderColor: "#334155",
    color: "#334155",
    borderWidth: 1,
    height: 50,
    fontSize: 15,

    marginBottom: 10,
  },
  textInputLabel: {
    marginTop: 10,
  },
});
