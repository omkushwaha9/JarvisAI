import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
    return (
        <View style={styles.class1}>
            <Text style={styles.Text1}>Features</Text>
            <View style={styles.class2}>
                <View style={styles.class3}>
                    <Image
                          style={styles.image1}
                          source={require('../../assets/images/chatgpt-icon.png')} />
                    <Text style={styles.Text2}>
                        ChatGPT
                    </Text>
                </View>
                <Text style={styles.Text3}>
                    ChatGPT can provide you with instant and knowledgeable responses,
                    assist you with creative ideas on a wide range of topics.
                </Text>
            </View>
             {/* 2 */}
            <View style={styles.class4}>
                <View style={styles.class3}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/Dall-E.png')} />
                    <Text style={styles.Text2}>
                        DALL-E
                    </Text>
                </View>
                <Text style={styles.Text3}>
                    DALL-E can generate imaginative and diverse image from textual
                    descriptions, expanding the boundaries of visual creativity.
                </Text>
            </View>
            {/* 3 */}
            <View style={styles.class5}>
                <View style={styles.class3}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/smartAI.png')} />
                    <Text style={styles.Text2}>
                        Smart AI
                    </Text>
                </View>
                <Text style={styles.Text3}>
                    A powerful voice assistant with the abilities of ChatGPT and Dall-E,
                    providing you the best of both worlds.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    class1: {
        height: hp(60),
        marginVertical: 4,
    },
    Text1: {
        fontSize: wp(6.5),
        fontWeight: '600',
        color: 'grey',
        paddingHorizontal:20,
    },
    class2: {
        backgroundColor: '#90EE90',  // improve color 
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    class4: {
        backgroundColor: '#D8BFD9',   // improve color 
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    class5: {
        backgroundColor: 'lightblue',   // improve color 
        padding: 15, 
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    class3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    image1: {
        height: hp(4),
        width: hp(4),
    },
    Text2: {
        fontSize: wp(4.8),
        fontWeight: '600',
        color: 'black',
        paddingHorizontal: 9,
    },
    Text3: {
        fontSize: wp(3.8),
        color: '#36454F',
        fontWeight: '500',
    },
})