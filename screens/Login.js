import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/Colors'

export default function Login() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{marginHorizontal:22,flex:1}}>
      <Text style={{
        fontSize:22,
        fontWeight:'bold',
        marginVertical:12,
        color:COLORS.primary
      }}>Welcome Back... </Text>
      </View>
     
    </SafeAreaView>
  )
}
