import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import COLORS from '../../constants/Colors';

const Input = ({ label, placeholder, value, onChangeText, onBlur, error }) => {
  const inputStyle = {
    width: '100%',
    height: 48,
    borderColor: error ? 'red' : COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  };

  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 20,
        marginBottom: 8,
        textTransform: 'capitalize'
      }}>
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        mode='outlined'
       keyboardType="email-address"
       error={error}  
       outlineStyle={inputStyle}
      />
      {error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;
