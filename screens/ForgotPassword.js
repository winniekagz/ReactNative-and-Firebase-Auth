// Register.js
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/Colors';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomButton from '../components/Button';
import Input from '../components/FormInputs/Input';
import { useForm} from 'react-hook-form';
import PageHeader from '../components/PageHeader';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useToast } from "react-native-toast-notifications";
import { auth } from '../firebase';

export default function ForgotPassword({ navigation }) {
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    

  });
  const toast = useToast();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
     
    },
  });

  const handleForgotPassword = async (data) => {
    setLoading(true);
  
    try {
      await sendPasswordResetEmail(auth  ,data?.email);
  
      toast.show("Check your email to reset password", {
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
      <View style={{ marginHorizontal: 22, flex: 1, justifyContent: 'center' }}>
     <PageHeader title={'Forgot password...'} subTitle={'Fill in the form to change password'}/>
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
      </View>

      <View style={{  }}>
          <CustomButton
            buttonText={'Submit'}
            color={COLORS.secondary}
            onPress={handleSubmit(handleForgotPassword)}
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
