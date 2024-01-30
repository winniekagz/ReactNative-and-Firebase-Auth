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

export default function Register({ navigation }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    name: Yup.string().required('name is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must contain at least 8 characters'),
    'confirmPassword': Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),

  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressSend = (formData) => {
    alert('test')
    console.log('formData', formData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 22, flex: 1, justifyContent: 'center' }}>
     <PageHeader title={'Hello, Create Account'} subTitle={'First, lets create your account'}/>
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
        
        <Input  control={control}
        name="name"
        label={'Full Name'}
        placeholder="Enter Full Name"
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
            buttonText={'Register'}
            color={COLORS.secondary}
            onPress={handleSubmit(onPressSend)}
            style={{
              marginVertical: 22,
              padding: 10,
              width: '100%',
            }}
          />
        </View> 
        <View style={{flexDirection:'row',marginVertical:16}}>
          <Text style={{color:COLORS.grey,fontSize:16,fontWeight:'600'}}>Already have an account ?</Text>
          <Text style={{color:COLORS.secondary,fontSize:16,fontWeight:'bold'}} onPress={()=>navigation.navigate('login')}> Login </Text>
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
