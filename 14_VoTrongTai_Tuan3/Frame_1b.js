import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Frame_1b() {
  return (
      <View style={styles.container}>
        <Image
          source={require("./assets/Vector.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.title}>FORGET</Text>
        <Text style={styles.title}>PASSWORD</Text>
        <Text style={styles.text}>
            Provide your account's email for which you want to reset your password 
        </Text>

        <View style={styles.emailContainer}>
            <Image
                source={require("./assets/Email.png")}
                style={styles.iEmail}
            ></Image>
            <TextInput placeholder=' Email' style={styles.input}></TextInput>
        </View>

        <View style={{width: 350}}>
            <Button title = 'NEXT' color = '#E3C000' style={styles.button}></Button>
        </View>
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
    height: 160,
    marginTop: 70,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    maxWidth: 200,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center",
    maxWidth: 350,
  },
  emailContainer: {
    marginHorizontal: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    width: 350,
    marginBottom: 20,
  },
  iEmail: {
    width: 60,
    height: 40,
  },
  input: {
    width: '100%',
  },
  button: {
    marginTop: 20,
    width: 350,
  },
});
