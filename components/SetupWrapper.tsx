import { ImageBackground, Text, View } from 'react-native';
import ApiUrl from '../constants/ApiUrl';

const image = require('../assets/images/background.png');

export interface SetupWrapperProps {
  children: React.ReactNode;
}

export default function SetupWrapper({ children }: SetupWrapperProps) {
  return (
    <ImageBackground
      source={image}
      resizeMode='stretch'
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          top: 30,
          fontSize: 69,
          color: '#fff',
          alignSelf: 'center',
          position: 'absolute',
        }}
      >
        OnePlace
      </Text>
      {/* If debug, show api url under logo */}
      {__DEV__ && (
        <Text
          style={{
            top: 120,
            fontSize: 24,
            color: '#f00',
            alignSelf: 'center',
            position: 'absolute',
          }}
        >
          {ApiUrl}
        </Text>
      )}
      <View>{children}</View>
    </ImageBackground>
  );
}
