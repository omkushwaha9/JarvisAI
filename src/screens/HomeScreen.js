import { View, Text } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import Features from '../components/Features';
import { dummyMessages } from '../constaints';
export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Features/>
    </View>
  )
}