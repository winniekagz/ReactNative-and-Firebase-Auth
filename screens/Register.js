import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/Colors'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/Button';
import Input from '../components/FormInputs/Input';

export default function Register({navigation}) {
  const [formData,setFormData]=useState({email:'',password:''})

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{marginHorizontal: 22, flex: 1, justifyContent: 'center' }}>
    <Text style={{
      fontSize:22,
      fontWeight:'bold',
      marginVertical:12,
      color:COLORS.primary
    }}>Create Account </Text>
    <Text style={{
      color:COLORS.black,
      fontSize:16
    }}
    >Connect with your friends</Text>

<Input
            placeholder='Enter your Email'
            placeholderTextColor={COLORS.grey}
            mode='outlined'
            keyboardType='email-address'
            style={{ width: '100%', height: 48 }}
            name='email'
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
          ) : null}
  <View style={{marginTop:'21px'}}>
  <CustomButton 
        buttonText={'Register'}
         color={COLORS.secondary}
         onPress={()=>navigation.navigate('login')
        }
         style={{
          marginVertical:22,
          padding:10,
          width:'100%',
        
         }}/>
  </View>
    </View>
   
   
  </SafeAreaView>
  )
}
