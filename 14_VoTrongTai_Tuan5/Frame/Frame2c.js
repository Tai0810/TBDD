import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import React, { useState } from 'react';


export default function Page2c() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.input}/>
        <View style={styles.checkArea}>
          <Text style={styles.pwText}>Password lenght</Text>
          <TextInput style={{ width: 140, height: 40}} />
        </View>
        <View>
          <Checkbox.Item
          color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include lower case letters  " />

          <Checkbox.Item 
          color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include upcase letters" />

          <Checkbox.Item 
          color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include number" />

          <Checkbox.Item 
          color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include special symbol" />
        </View>
        <Button labelStyle={{ fontSize: 20, fontWeight: 'bold' }} theme={{ colors: { primary: '#fff' } }} style={{ width: 300, height: 60, justifyContent: 'center', marginTop: 20, marginBottom: 10, borderRadius: 3, backgroundColor: '#0D5DB6' }} mode="elevated" >
          GENERATE PASSWORD
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8181B8',
    alignItems: 'center',
  },
  insideContainer: {
    alignItems: 'center',
    width: 370,
    // height: 640,
    border: '1px solid #C4C4C4',
    backgroundColor: '#23235B',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    width: 330,
    height: 50,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#151537',
  },
  checkArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  pwText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 0,
    paddingRight: 30,
  }
});