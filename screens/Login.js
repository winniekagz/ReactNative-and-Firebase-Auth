// Register.js
import React, { useEffect, useState } from 'react';
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
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from "react-native-toast-notifications";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required').min(8, 'Password must contain at least 8 characters'),  

  });
  const toast = useToast();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = (data) => {
    setLoading(true)
   
    signInWithEmailAndPassword(auth, data?.email, data?.password)
    .then((userCredential) => {
   
      const user = userCredential.user;
      console.log('loggedInUser',user)
      
      toast.show("Login successful", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      });
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.show("invalid credentials", {
        type: "danger",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      });
    });
    
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 22, flex: 1, justifyContent: 'center' }}>
     <PageHeader title={'Hello,Welcome Back...'} subTitle={'Happy to see you again, Please login here'}/>
        <View>
      <View>
        <Input  control={control}
        name="email"
        label={'email'}
        placeholder="email"
        rules={{ required: true }}
        errors={errors}
        secureTextEntry
      />
        

        <PasswordInput  control={control}
        name="password"
        label={'password'}
        placeholder="Enter password"
        rules={{ required: true }}
        errors={errors}
        secureTextEntry
      />
<Text style={{textAlign:'right',color:COLORS.grey,fontSize:15}} onPress={()=>navigation.navigate('forgot-password')}>Forgot Password?</Text>
      </View>

      <View style={{  }}>
          <CustomButton
            buttonText={'Login'}
            color={COLORS.secondary}
            onPress={handleSubmit(handleSignIn)}
            style={{
              marginVertical: 22,
              padding: 10,
              width: '100%',
            }}
          />
        </View> 
        <View style={{flexDirection:'row',marginVertical:16}}>
          <Text style={{color:COLORS.grey,fontSize:16,fontWeight:'600'}}>Dont have an account ?</Text>
          <Text style={{color:COLORS.secondary,fontSize:16,fontWeight:'bold'}} onPress={()=>navigation.navigate('register')}> Create Account </Text>
        </View>
        <HorizontalLineWithName name={'OR'}/>
    </View>

      <View style={{flexDirection:'row',gap:20,justifyContent:'center',alignItems:'center',marginVertical:16}}>
      <SocialIcon source={FacebookImg} />
      <SocialIcon source={googleImg}  />
      <SocialIcon source={twitterImg}/>
      <SocialIcon source={linkedInIcon }  /> 
      </View>
      </View>
    </SafeAreaView>
  );
}
