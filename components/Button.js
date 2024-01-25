import React from 'react';
import { Button } from 'react-native-paper';
import COLORS from '../constants/Colors';

const CustomButton = ({ onPress, buttonText ,color,textColor}) => {
  return (
    <Button
      mode="contained"
      style={{ marginTop: 20 }}
      onPress={onPress}
      buttonColor={color?color:COLORS.white}
      buttonText={textColor?textColor:COLORS.primary}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
