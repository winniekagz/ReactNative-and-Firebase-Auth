import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login,Register,ResetPassword,ForgotPassword ,Home} from './screens';
import { ToastProvider } from 'react-native-toast-notifications'

const Stack=createNativeStackNavigator()
export default function App() {

  return (
   
    <ToastProvider  successColor="green"
    dangerColor="red"

    warningColor="orange">
    <NavigationContainer>
  
        <Stack.Navigator
        initialRouteName=''

        >
          <Stack.Screen 
           name='welcome'
           component={Home}  
          options={{headerShown:false}}/>
           <Stack.Screen 
           name='login'
           component={Login}  
          options={{headerShown:false}}/>
           <Stack.Screen 
           name='register'
           component={Register}  
          options={{headerShown:false}}/>
           <Stack.Screen 
           name='forgot-password'
           component={ForgotPassword}  
          options={{headerShown:false}}/>
           <Stack.Screen 
           name='reset-password'
           component={ResetPassword}  
          options={{headerShown:false}}/>

        </Stack.Navigator>
       
     
    </NavigationContainer>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
});
