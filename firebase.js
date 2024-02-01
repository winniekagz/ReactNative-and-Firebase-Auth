// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'; 
import {initializeApp} from 'firebase/app'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage


const firebaseConfig = {
  apiKey: "AIzaSyCDZM8axaib0_6TuSMUQaKGAmdRbpSVWlk",
  authDomain: "native-auth-1ba87.firebaseapp.com",
  projectId: "native-auth-1ba87",
  storageBucket: "native-auth-1ba87.appspot.com",
  messagingSenderId: "470761838502",
  appId: "1:470761838502:web:92809d2913df58d1b5a167"
};

let app;
// if (firebase?.app?.length===0){
    app=initializeApp(firebaseConfig);
// }else{
//     app=firebase.getApp()
// }
const db=getFirestore()
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {auth,db}
