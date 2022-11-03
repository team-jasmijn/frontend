import { ImageBackground, Text, View } from 'react-native';

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
        style={{ top: -220, fontSize: 69, color: '#fff', alignSelf: 'center' }}
      >
        OnePlace
      </Text>
      <View>{children}</View>
    </ImageBackground>
  );
}
