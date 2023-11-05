import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Screen2 = ({navigation, route}) => {
  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/user/";
  const [user, setUser] = useState({});

  useEffect(()=>{
    fetch(url + route.params?.id)
      .then((response) => response.json())
      .then((json) => setUser(json));
    },[route])

  return (
    <View style={styles.component}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={{width: 30, height: 30}}></Image>
        </Pressable>
        <Image source={user.avatar} style={styles.avtImage}
        ></Image>
        <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: 600, marginLeft: 10}}>Hi {user.name}</Text>
            <Text style={{fontSize: 18, color: 'grey', fontWeight: 500}}>Have agrate day a head</Text>
        </View>
      </View>
      <View style={styles.findCon}>
        <Image source={require('../assets/search.png')} style={{width: 30, height: 30, marginLeft: 10}}></Image>
        <TextInput placeholder='Search' style={styles.findInput}></TextInput>
      </View>
      <View style={{marginTop: 50}}>
        <ScrollView>
          <FlatList data={user.todo} renderItem={({item}) => (
            <Pressable style={{width: 350, height: 50, backgroundColor: '#DEE1E678', alignItems: 'center', borderRadius: 30, marginBottom: 10, padding: 15, display: 'flex', flexDirection: 'row'}}>
            <Image source={require('../assets/check.png')} style={{width: 30, height: 30,}}></Image>
            <Text style={{width: '100%', marginLeft: 10}}>{item.job}</Text>
            <Image source={require('../assets/pen.png')} style={{width: 30, height: 30, marginLeft:40}}></Image>
          </Pressable>
          )}>
          </FlatList>
        </ScrollView>
      </View>
      <Pressable style={styles.add} onPress={() => navigation.navigate('Screen3', {user})}>+</Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    component: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    avtImage: {
        width: 60,
        height: 60,
        borderRadius: 45,
        resizeMode: 'contain',
        backgroundColor: 'pink',
        marginLeft: 70,
    },
    findCon: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    findInput: {
        height: 45,
        width: 300,
        color: 'grey',
        marginLeft: 10,
    },
    add: {
        width: 70,
        height: 70,
        borderRadius: 45,
        backgroundColor: '#00BDD6',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 700,
        color: 'white',
        marginTop: 20,
    }
})