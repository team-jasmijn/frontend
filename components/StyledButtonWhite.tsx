import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import { View } from './Themed';
import { SvgUri } from 'react-native-svg';

export interface WhiteButtonWithIconProps {
  // onPress, title, svg, titleBold
  onPress?: () => void;
  title: string;
  svg: string;
  titleBold?: string;
}

export default function WhiteButtonWithIcon({
  onPress,
  title,
  svg,
  titleBold,
}: WhiteButtonWithIconProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <View style={[{ flex: 1, flexDirection: 'row' }]}>
        <SvgUri
          uri={svg}
          height={25}
          width={25}
          fill={'#334155'}
          style={styles.icon}
        />
        <Text style={styles.appButtonText}>
          {' '}
          {title}
          <Text style={{ fontWeight: 'bold' }}> {titleBold}</Text>{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#F1F5F9',
    height: 40,
    borderColor: '#334155',
    width: 240,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    padding: 4,
    marginTop: 10,
  },
  icon: {
    alignSelf: 'flex-start',
  },
  appButtonText: {
    fontSize: 20,
    color: '#334155',
    textAlign: 'center',
  },
});
