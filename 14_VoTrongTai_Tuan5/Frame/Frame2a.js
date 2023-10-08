import {
    Button,
    Image,
    Linking,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React from "react";
  
  export default function Frame2a() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.wrapper}>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <Image
                source={require("../assets/user.png")}
                style={{width : 30, height : 30}}
              />
            </View>
            <TextInput placeholder="Name" style={{width : 300, height: 40, marginLeft: 10, fontSize: 18}} />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <Image
                source={require("../assets/Vector.png")}
                style={{width : 30, height : 30}}
              />
            </View>
            <TextInput placeholder="Password" style={{width : 250, height: 40, marginLeft: 10, fontSize: 18}} />
          </View>
  
          <View style={styles.icon}>
            <Image source={require("../assets/eye1.png")} style={styles.eyeIcon} />
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 50, height: 40 }}>
          <Button title="LOGIN" color="#000"/>
        </View>
        <Text style={styles.text}>Forgot your password?</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 70,
      textAlign: "center",
      alignItems: "center",
      backgroundColor: "#f2c400",
    },
    title: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 80,
      alignSelf: "flex-start" 
    },
    wrapper: {
      backgroundColor: "#dcbe3b",
      width: "100%",
      height: 50,
      marginBottom: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      borderWidth: 1,
      borderColor: "#eee",
    },
    inside: {
      display: "flex",
      flexDirection: "row",
    },
    icon: {
      width: 30,
      height: 20,
    },
    eyeIcon: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    button: {
      marginBottom: 30,
    },
    text: {
      marginTop: 35,
      fontSize: 20,
      fontWeight: 700,
    },
  });