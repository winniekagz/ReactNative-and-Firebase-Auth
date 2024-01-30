
import React, { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/Colors';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomButton from '../components/Button';
import Input from '../components/FormInputs/Input';
import { useForm} from 'react-hook-form';
import PasswordInput from '../components/FormInputs/PasswordInput';
import {FacebookImg, googleImg,  linkedInIcon, twitterImg } from '../assets';
import HorizontalLineWithName from '../components/HorizontalNameWithName'
import PageHeader from '../components/PageHeader';
import SocialIcon from '../components/SocialIcon';

export default function ForgotPassword({ navigation ,length=6}) {
 
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);
  
    const handleInputChange = (value, index) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value !== '' && index < length - 1) {
        // Move to the next input field
        inputRefs.current[index + 1].focus();
      } else if (value === '' && index > 0) {
        // Move to the previous input field
        inputRefs.current[index - 1].focus();
      }
    };
  
    const handleBackspace = (index) => {
      if (index > 0) {
        // Move to the previous input field
        inputRefs.current[index - 1].focus();
      }
    };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 22, flex: 1,marginTop:46}}>
     <PageHeader title={'Forgot Password'} subTitle={'Enter the 6 digit code we sent you on your email'}/>
        <View>
      <View>
      <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.input}
          value={value}
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          maxLength={1}
        />
      ))}
    </View>
      </View>

      <View style={{  }}>
          <CustomButton
            buttonText={'Submit'}
            color={COLORS.secondary}
            onPress={()=>navigation.navigate('reset-password')}
            style={{
              marginVertical: 22,
              padding: 10,
              width: '100%',
            }}
          />
        </View> 
       <View style={{flexDirection:'column',gap:10,marginVertical:10}}>
        <Text style={{color:COLORS.black,fontSize:15}} >If you dont find the code we sent you try </Text>
        <View style={{flexDirection:'row', gap:10}}>
          <Text style={{color:'red',fontSize:16,fontWeight:'bold'}}>Checking Spam</Text>
          <Text>or</Text>
          <Text style={{color:COLORS.primary,fontSize:16,fontWeight:'bold'}}>Send Code Again</Text>
        </View>
        </View>
      
    </View>

   
      </View>
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});