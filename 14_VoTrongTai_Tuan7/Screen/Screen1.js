import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
      <View style={styles.borderImage}>
        <Image source={require('../assets/blueBike.png')} style={styles.image}></Image>
      </View>
      <Text style={styles.name}>POWER BIKE SHOP</Text>
      <Pressable style={styles.btnGet} onPress={() => {navigation.navigate('Screen2')}}>Get Started</Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    component: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 50,
        marginLeft: 12,
    },
    borderImage: {
        width: 359,
        height: 388,
        borderRadius: 50,
        backgroundColor: '#E941411A',
        marginTop: 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 292,
        height: 270,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 26,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 21,
    },
    btnGet: {
        width: 340,
        height: 61,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 17,
        marginTop: 30,
        backgroundColor: '#E94141',
        borderRadius: 30,
        fontSize: 27,
        fontWeight: 400,
        color: '#FEFEFE',
    }
})