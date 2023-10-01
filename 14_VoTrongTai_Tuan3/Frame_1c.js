import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Frame_1c() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>CODE</Text>
        <Text style={styles.text1}>VERIFICATION</Text>
        <Text style={styles.text2}>
            Enter onetime password sent on ++849092605798
        </Text>

        <View style={styles.inputContainer}> 
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
        </View>

        <View style={{width: 350}}>
            <Button title = 'VERIFI CODE' color = '#E3C000' style={styles.button}></Button>
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
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 70,
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
  },
  text2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 50,
    textAlign: "center",
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    width: 50,
    height: 50
  }
});
