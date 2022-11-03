import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonWhite from '../components/StyledButtonWhite';
import { useNavigation } from '@react-navigation/native';
import SetupWrapper from '../components/SetupWrapper';

export default function LoginStudentScreen() {
  const navigation = useNavigation();

  return (
    <SetupWrapper>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <StyledInput labelText={'E-Mail Adres'} />
          <StyledInput labelText={'Wachtwoord'} />
          <View
            style={{
              width: 240,
              alignSelf: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0)',
            }}
          >
            <StyledButton title={'Login als student'} />
            <Text style={styles.UnderText}>OF</Text>
            <StyledButtonWhite
              title={'Login with'}
              titleBold={'Google'}
              svg={'https://icons.getbootstrap.com/assets/icons/google.svg'}
            />
            <StyledButtonWhite
              title={'Login with'}
              titleBold={'Microsoft'}
              svg={'https://icons.getbootstrap.com/assets/icons/microsoft.svg'}
            />
          </View>
        </View>
        <Button
          title='Back'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </KeyboardAwareScrollView>
    </SetupWrapper>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  UnderText: {
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(52, 52, 52, 0)',
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
    color: '#334155',
  },
  createView: {
    marginTop: 80,
    backgroundColor: '#F1F5F9',
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
  },
});
