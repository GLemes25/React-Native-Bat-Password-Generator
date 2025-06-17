import React from 'react';
import { Image, Text } from 'react-native';
import batLogoIcon from '../../../assets/bat-logo.png';
import { BatLogoStyles } from './BatLogoStyles';

export const BatLogo = () => {
  return (
    <>
      <Text style={BatLogoStyles.title}>Bat Pass Generator</Text>
      <Image
        style={{
          resizeMode: 'contain',
          height: 180,
        }}
        source={batLogoIcon}
      />
    </>
  );
};
