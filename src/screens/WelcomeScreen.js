import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.className}>
    <View >
  <Text style={styles.classText1}>Jarvis</Text>
  <Text style={styles.classText2}>The Future is here, Powered by AI.</Text>
  </View>
  <View style={styles.className2}>
    <Image source={require('../../assets/images/Welcome1.png')} 
    style={styles.classImage1}/>
  </View>
  <TouchableOpacity 
      onPress={()=> navigation.navigate('Home')}
      style={styles.classPressB1} >
    <Text style={styles.classText3}> Get Started </Text>
  </TouchableOpacity>
</SafeAreaView>
)
}
const styles = StyleSheet.create({
className:{
    flex:1,
    justifyContent:'space-around',
    backgroundColor:'white',
    
},
classText1:{
    textAlign:'center',
    fontWeight:'bold',
    color:'grey',
    fontSize:wp(10),
    marginTop:100,
},
classText2:{
    textAlign:'center',
    fontWeight:'700',
    fontSize:wp(4),
    marginTop:11,
},
className2:{
  flexDirection:'row',
  justifyContent:'center',
},
classImage1:{
    width:wp(75),
    height:wp(75),
    //justifyContent:'center',
    //alignItems:'center',
},
classPressB1:{
    backgroundColor:'lightgrey',    // pending - change after
    borderRadius:10,
    padding:9,
    marginHorizontal:40,
    alignItems:'center',
},
classText3:{
    fontSize:wp(6),
    fontWeight:'600'
},
})