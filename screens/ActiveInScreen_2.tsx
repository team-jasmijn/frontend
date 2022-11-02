import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import StyledButton from "../components/StyledButton";

const image = require("../assets/images/background.png");

export default function ActiveInScreen_2() {
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
            <Text style={styles.textInputLabel}>Wij zijn actief in:</Text>
            <TextInput
              style={styles.textInputSmall}
              placeholder="ICT, Logistiek"
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
            />
            <Text style={styles.textInputLabel}>
              Korte samenvatting van ons bedrijf:
            </Text>
            <TextInput
              style={styles.textInputLarge}
              placeholder="One place is een educatief bedrijf dat zich focust op software ontwikkeling."
              placeholderTextColor="'rgba(51, 65, 85, 58)'"
              maxLength={20}
              multiline
              numberOfLines={5}
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
    paddingTop: 200,
    width: "90%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textInputSmall: {
    borderColor: "#334155",
    color: "#334155",
    borderWidth: 1,
    height: 40,
    fontSize: 15,
    marginBottom: 10,
  },
  textInputLarge: {
    borderColor: "#334155",
    color: "#334155",
    borderWidth: 1,
    height: 60,
    fontSize: 15,
    marginBottom: 10,
  },
  textInputLabel: {
    marginTop: 10,
  },
});
