import React from 'react';
import { Image } from 'react-native';

const SocialIcon = ({ source, style }) => {
  return (
    <Image source={source} style={[styles.socialIcon, style]} />
  );
};

const styles = {
  socialIcon: {
    width: 24,
    height: 24,
  },
};

export default SocialIcon;