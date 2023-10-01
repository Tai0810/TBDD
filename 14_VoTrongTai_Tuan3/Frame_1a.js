import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Frame_1a() {
  return (
      <View style={styles.container}>
        <Image
          source={require("./assets/Ellipse.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
        <div style={styles.button}>
          <div style={styles.account}>LOGIN</div>
          <div style={styles.account}>SIGN UP</div>
        </div>
        <Text style={styles.textBot}>HOW WE WORK?</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 70,
    marginBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    maxWidth: 200,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: 700,
    marginTop: 60,
    marginBottom: 45,
    textAlign: "center",
    maxWidth: 350,
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  account: {
    backgroundColor: "#E3C000",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 20,
    padding: 20,
    width: 100,
  },
  textBot: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '20px',
  },
});
