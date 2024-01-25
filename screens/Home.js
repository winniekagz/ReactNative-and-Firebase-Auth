import React from 'react'
import { Text, View,SafeAreaView, Image, StyleSheet, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/Colors';
import image from '../assets/hero2.jpg'
import image2 from '../assets/hero3.jpg'
import image3 from '../assets/hero1.jpg'
import CustomButton from '../components/Button';


export default function Home({navigation}) {
  return (

      <LinearGradient style={{flex:1}}
     colors={[COLORS.secondary,COLORS.primary]}
      >
        <View>
          <Image
           source={image}
            style={{height:100,width:100,borderRadius:20,
              position:'absolute' ,
              top:10,
              transform:[
              {translateX:20},
              {translateY:50},
              {rotate:'-15deg'}
            ]}}/>
               <Image
           source={image2}
            style={{height:100,
              width:100,
              borderRadius:20,
              position:'absolute' ,
              top:-30,
              left:100,
              transform:[
              {translateX:50},
              {translateY:50},
              {rotate:'-1deg'}
            ]}}/>
              <Image
           source={image3}
            style={{height:100,
              width:100,
              borderRadius:20,
              position:'absolute' ,
              top:10,
              right:70,
              transform:[
              {translateX:70},
              {translateY:50},
              {rotate:'15deg'}
            ]}}/>
                <Image
           source={image}
            style={{height:250,
              width:200,
              borderRadius:20,
              position:'absolute' ,
              top:110,
              left:100,
              transform:[
              {translateX:50},
              {translateY:50},
              {rotate:'-15deg'}
            ]}}/>
        </View>
        <View style={HomeStyles.homeContainer}>
          <Text style={HomeStyles.headerstyle}>Let's Get</Text>
          <Text style={HomeStyles.subHeaderstyle}>Started</Text>
          <View style={{marginVertical:22}}>
          <Text style={{fontSize:16,color:COLORS.white ,marginVertical:4}}>
            Connect with each other with chatting
          </Text>
          <Text style={{fontSize:16,color:COLORS.white ,marginVertical:4}}>
           calling,Enjoy safe and private texting
          </Text>
        </View>
        <CustomButton 
        buttonText={'Get Started'}
         color={COLORS.secondary}
         onPress={()=>navigation.navigate('register')
        }
         style={{
          marginVertical:22,
          padding:10,
          width:'100%',
        
         }}/>

<View style={{
          flexDirection:'row',
          marginTop:12,
          justifyContent:'center', 
          alignItems:'center', 
          }}>
<Text style={{fontSize:16,color:COLORS.white}}>
  Already have an account?

</Text>
<Pressable onPress={()=>navigation.navigate('login')}>
    <Text style={{fontSize:16,color:COLORS.white ,fontWeight:'bold'}}>Login</Text>
  </Pressable>
        </View>
        </View>

      
      

      </LinearGradient>
     
  
  )
}

export const  HomeStyles=StyleSheet.create({
  homeContainer:{
paddingHorizontal:22,
position:'absolute',
top:450,
width:'100%'
  },
  headerstyle:{
    fontSize:50,
    color:COLORS.white,
    fontWeight:'bold'
  },
  subHeaderstyle:{
    fontSize:46,
    color:COLORS.white,
    fontWeight:'800'
  }
})