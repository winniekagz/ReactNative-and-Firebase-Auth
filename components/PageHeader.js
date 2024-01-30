import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'

export default function PageHeader({title,subTitle}) {
  return (
    <View style={{marginBottom:16}}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 12,
          color: COLORS.primary
        }}>{title}</Text>
        <Text style={{
          color: COLORS.grey,
          fontSize: 16,
          marginBottom:8
        }}>{subTitle}</Text>
    </View>
  )
}