import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState }  from 'react'
import Features from '../components/Features';
import { dummyMessages } from '../constants/Index';
export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={styles.header1}>
      <SafeAreaView style={styles.header2}>
            {/* Bot Icon*/}
            <View style={styles.class1}>
             <Image source={require('../../assets/images/Welcome1.png')} 
             style={styles.Imagebot}
             />
            </View>
       {/* features \\ messages */}
       {
        messages.length>0? (
            <View style={styles.class2}>
               <Text style={styles.Text1}>
                 Assistant
               </Text>
               <View style={styles.class3}>
               <ScrollView
         bounces={false}
         style={styles.scview}
         showsVerticalScrollIndicator={false}
      >
        {
            messages.map((messages, index)=> {
                if (messages.role=='assistant'){
                    if (messages.content.includes('https')){
                        // its an ai image
                        return (
                            <View key={index} style={styles.class4}>
                          <View style={styles.class7}>
                             <Image
                             source={{uri: messages.content}}
                             style={styles.Image1}
                             />
                          </View>
                        </View>
                        )
                    } else {
                        //Text response
                        return (
                            <View key={index} >
                              <View style={styles.class6}>
                                <Text style={styles.Text2}>
                                    {messages.content}
                                </Text>
                              </View>
                            </View>
                        )
                    }
                } else {
                    // userinput
                    return (
                        <View key={index} style={styles.class4}>
                          <View style={styles.class5}>
                            <Text style={styles.Text2}>
                                {messages.content}
                            </Text>
                          </View>
                        </View>
                    )
                }

            })
        }

      </ScrollView>

               </View>
            </View>
        ) : (
            <Features/>
        )
       }
      </SafeAreaView>
   

    </View>
  )
}
 const styles = StyleSheet.create({
    header1:{
        flex:1,
        backgroundColor:'white',
    },
    header2:{
        flex:1,
        marginVertical:5,
    },
    class1:{
        flexDirection:'row',
        justifyContent:'center',
    },
    Imagebot:{
        height:hp(20),
        width:hp(20),
    },
    class2:{
        marginHorizontal:15,
        flex:1,
   },
   Text1:{
    color:'grey',
    fontWeight:'600',
    marginLeft:1,
    fontSize:wp(6),
    padding:5,
},
class3:{
    height:hp(58),
    backgroundColor:"lightgrey",
    borderRadius:27,
    padding:15,
},
scview:{
  
},
Text2:{
    fontSize:17,
},
class4:{
    flexDirection:'row',
    justifyContent:'flex-end',
 },
 class5:{
    backgroundColor:'white',
    borderRadius:9,
    padding:7,
   
},
class6:{
    backgroundColor:'lightgreen',
    borderRadius:9,
    padding:7,
    
},
class7:{
    backgroundColor:'lightgreen',
    borderRadius:9,
    padding:2,
    
},
Image1:{
    borderRadius:8,
    resizeMode:'contain',
    height:wp(60),
    width:wp(60),
},

    
});