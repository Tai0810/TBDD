import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen3 = ({navigation, route}) => {
  const { user } = route?.params;
  const [job, setJob] = useState("");
  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/user/";
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={user.avatar} style={styles.avtImage}
            ></Image>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={{fontSize: 20, fontWeight: 600, marginLeft: 10}}>Hi {user.name}</Text>
                <Text style={{fontSize: 18, color: 'grey', fontWeight: 500}}>Have agrate day a head</Text>
            </View>
            <Pressable onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{width: 30, height: 30, marginLeft: 60}}></Image>
            </Pressable>
        </View>
        <Text style={{fontSize: 32, fontWeight: 700, marginTop: 20}}>ADD YOUR JOB</Text>
        <View style={styles.inputJob}>
            <Image source={require('../assets/paper.png')} style={{width: 30, height: 30, marginLeft: 10}}></Image>
            <TextInput placeholder='Input your job' style={styles.jobInput} onChangeText={setJob}></TextInput>
      </View>
      <Pressable style={styles.pressFinish}
      onPress={() => {
        fetch(url + user.id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              todo: [
                ...user.todo,
                {
                  id: (user.todo.length+1).toString(),
                  job:job
                },
              ],
            }),
          }).then(response =>{
            if(response.ok)
                return navigation.navigate("Screen2",{id:user.id});
          })
      }}
      >FINISH</Pressable>
      <Image source={require('../assets/note.png')} style={{width: 200, height: 200, marginTop: 50, resizeMode: 'contain'}}></Image>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    avtImage: {
        width: 60,
        height: 60,
        borderRadius: 45,
        resizeMode: 'contain',
        backgroundColor: 'pink',
        marginLeft: 10,
    },
    inputJob: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    jobInput: {
        height: 45,
        width: 300,
        color: 'grey',
        marginLeft: 10,
    },
    pressFinish: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BDD6',
        color: '#FFFFFF',
        borderRadius: 20,
        marginTop: 80,
        fontSize: 20,
        fontWeight: 500,
    }
})