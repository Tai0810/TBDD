import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen3 = ({navigation, route}) => {

    const [item, setItem] = useState(
        route.params?.item || {
            image: require('../assets/pinarello.png'),
            name: 'Pinarello',
            price: '$1800',
            type: 'RoadBike',
            decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    });
  return (
    <View style={styles.component}>
        <View style={styles.imageComponenet}>
            <Image source={item.image} style={styles.imageBike}></Image>
        </View>
        <Text style={styles.nameBike}>{item.name}</Text>
        <View style={styles.saleComponent}>
            <Text style={styles.salePrice}>15% OFF | 350$</Text>
            <Text style={styles.priceOri}>{item.price}</Text>
        </View>
        <Text style={styles.txtDescrip}>Description</Text>
        <Text style={styles.areaDescrip}>{item.decription}</Text>
        <View style={styles.addComponent}>
            <Image source={require('../assets/heart.png')} style= {styles.heartIcon}></Image>
            <Pressable style={styles.addPress}>Add to card</Pressable>
        </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    imageComponenet: {
        width: 360,
        height: 350,
        backgroundColor: '#E941411A',
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    imageBike: {
        width: 300,
        height: 340,
        resizeMode: 'contain' 
    },
    nameBike: {
        fontSize: 30,
        fontWeight: 500,
        marginLeft: 15,
        marginTop: 15,
    },
    saleComponent: {
        display: 'flex',
        flexDirection: 'row'
    },
    salePrice: {
        fontSize: 25,
        fontWeight: 400,
        color: '#00000096',
        marginLeft: 15,
    },
    priceOri: {
        fontSize: 25,
        fontWeight: 400,
        marginLeft: 40,
        textDecorationLine: 'line-through' 
    },
    txtDescrip: {
        fontSize: 25,
        fontWeight: 400,
        marginLeft: 15,
        marginTop: 15,
    },
    areaDescrip: {
        fontSize: 20,
        fontWeight: 400,
        color: '#00000091',
        marginLeft: 15,
        marginTop: 15,
    },
    addComponent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    heartIcon: {
        width: 35,
        height: 35,
        marginLeft: 20,
    },
    addPress: {
        width: 270,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E94141',
        borderRadius: 30,
        marginLeft: 40,
        fontSize: 25,
        fontWeight: 400,
        color: '#FFFAFA'
    }
})