import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Screen1({navigation}) {
    return (
        <View style={styles.container}>
            <View><Text style={styles.text1}>Welcome to Cafe world</Text></View>
            <View style={{ top: '72px', alignItems: 'center', marginTop: "72px" }}><Image style={styles.img1} source={require('../assets/img/Image.png')}></Image> </View>
            <View style={{ top: '72px', alignItems: 'center', marginTop: "72px" }}><Image style={styles.img1} source={require('../assets/img/Image (1).png')}></Image></View>
            <View style={{ top: '72px', alignItems: 'center', marginTop: "72px" }}><Image style={styles.img1} source={require('../assets/img/Image (2).png')}></Image></View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                <View style={styles.btn}>
                    <Text style={styles.textBtn}>GET STARTED</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE1E6',
        width:'390px',
        height:'844px',
    },

    text1: {
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '36px',
        textAlign: 'center',
        fontFamily: 'Inter',
        top: '89px'
    },

    img1: {
        width: '200px',
        height: '62px',
        borderRadius: "6px",
    },

    btn: {
        backgroundColor: '#00BDD6',
        width: '312px',
        height: '50px',
        borderRadius: '6px',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "120px",
    },
    textBtn: {
        fontSize: '14px',
        fontWeight: "400",
        lineHeight: "22px",
        color: "#FFFFFF",

    },

});

export default Screen1;
