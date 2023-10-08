import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Button } from 'react-native-paper';

export default function Frame2b() {
    return (
        <View style={styles.container}>
            <View style={styles.usbContainer}>
                <Image style={styles.usbImage} source={require('../assets/usb.png')} />
                <Text style={styles.usbInfor}>
                    USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
                </Text>
            </View>

             <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cực kỳ hài lòng</Text>
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Image source={require('../assets/Star.png')} style={styles.starImage}></Image>
                <Image source={require('../assets/Star.png')} style={styles.starImage}></Image>
                <Image source={require('../assets/Star.png')} style={styles.starImage}></Image>
                <Image source={require('../assets/Star.png')} style={styles.starImage}></Image>
                <Image source={require('../assets/Star.png')} style={styles.starImage}></Image>
            </View>

            <View style={styles.camArea}>
                <Image source={require('../assets/camera.png')} style={styles.cameraImage}></Image>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 5
                }}>Thêm hình ảnh</Text>

            </View>

            <TextInput
                placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                style={styles.textArea}
            />
            <Button labelStyle={{fontSize:20, fontWeight: 'bold'}} theme={{ colors: { primary: '#fff' } }}  style={{width:300, marginTop: 20, borderRadius:3, backgroundColor: '#0D5DB6'}} mode="elevated" >
                Gửi
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    usbContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    usbImage: {
        width: 70, 
        height: 70, 
        margin: 15
    },
    usbInfor: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5
    },
    starImage: {
        width: 39,
        height:39,
        margin: 5
    },
    camArea:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        border: '1px solid #1511EB',
        borderRadius: 5,
        width: 300,
        marginTop: 20,
    },
    cameraImage: {
        width: 39,
        height: 32,
        marginLeft: 30,
        marginRight: 10
    },
    textArea: {
        border: '1px solid #C4C4C4',
        width: 300,
        height: 200,
        marginTop: 20,
        borderRadius: 5,
    }
});