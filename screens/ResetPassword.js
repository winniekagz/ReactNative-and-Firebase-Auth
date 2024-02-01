// Register.js
import React, { useState } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
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
import { passwordReset } from 'firebase/auth';

export default function ResetPassword({ navigation }) {
 

  const schema = Yup.object().shape({
  
    password: Yup.string().required('Password is required').min(8, 'Password must contain at least 8 characters'),
    'confirmPassword': Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),

  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
  });

  const handlePasswordReset = async (data) => {
    setLoading(true);
  
    try {
      await passwordReset(auth  ,data?.password);
  
      toast.show("Password successfully reset", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      });
    } catch (error) {
      const errorMessage = error.message;
  
      toast.show(errorMessage, {
        type: "danger",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 22, flex: 1, marginVertical:56 }}>
     <PageHeader title={'Change Password'} subTitle={'Enter a new password for your account'}/>
        <View>
      <View>
        
        <PasswordInput  control={control}
        name="password"
        label={'password'}
        placeholder="Enter password"
        rules={{ required: true }}
        errors={errors}
        secureTextEntry
      />

<PasswordInput  control={control}
        name="confirmPassword"
        label={'Confirm Password'}
        placeholder="Enter password"
        rules={{ required: true }}
        errors={errors}
        secureTextEntry
      />
      </View>

      <View style={{  }}>
          <CustomButton
            buttonText={'Submit Password'}
            color={COLORS.primary}
            onPress={handleSubmit(onPressSend)}
            style={{
              marginVertical: 22,
              padding: 10,
              width: '100%',
            }}
          />
        </View> 
   
       
    </View>

   
      </View>
    </SafeAreaView>
  );
}
