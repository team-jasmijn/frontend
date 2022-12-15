import { Alert, ImageBackground, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Svg, { SvgUri } from 'react-native-svg';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SetupWrapper from '../components/SetupWrapper';
import React from "react";

type SelectSignUpTypeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'SelectSignUpTypeScreen'
>;

export interface SelectSignUpTypeScreenProps {
  navigation: SelectSignUpTypeScreenProp;
}

export default function SelectSignUpTypeScreen({
  navigation: { navigate },
}: SelectSignUpTypeScreenProps) {
  return (
    <SetupWrapper>
      <View style={styles.main}>
       <Pressable style={styles.blueButton} onPress={ () => {
         //@ts-expect-error
         navigate('SignUpScreen',
         {
           Type: 'Student'
         });
       }}>
         <SvgUri
             uri={'https://icons.getbootstrap.com/assets/icons/person.svg'}
             height={100}
             width={100}
             fill={'#ffffff'}
             style={styles.icon}
         />

        <Text style={styles.boxText}>
          Ik ben een <Text style={styles.boldText}>Student</Text>
        </Text>
       </Pressable>

        <Pressable style={styles.blueButton} onPress={ () => {
          //@ts-expect-error
          navigate('SignUpScreen',
              {
                Type: 'Company'
              });
        }}>
          <SvgUri
              uri={'https://icons.getbootstrap.com/assets/icons/building.svg'}
              height={100}
              width={100}
              fill={'#ffffff'}
              style={styles.icon}
          />

          <Text style={styles.boxText}>
            Ik ben een <Text style={styles.boldText}>Bedrijf</Text>
          </Text>
        </Pressable>

      </View>
    </SetupWrapper>
  );
}

const styles = StyleSheet.create({
  main: {
    top: 15,
    backgroundColor: "transparent",
    alignItems: 'center',
  },

  blueButton: {
    backgroundColor: '#38BDF8',
    paddingVertical: 20,
    paddingHorizontal: 90,
    minWidth: '80%',
    borderWidth: 0.5,
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 1,
    alignItems: "center",
    marginVertical: 30,

  },
  boxText: {
    fontSize: 20,
  },
  boldText: {
  color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {

  }
});
