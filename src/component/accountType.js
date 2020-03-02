import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity,} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
export default class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.headerText}>Account Type</Text>
                <View style = {styles.innerContainer}>
                    <Text style = {styles.innerText}>I AM A SHOPPER</Text>
                </View>
                <View style = {styles.innerContainer1}>
                    <Text style = {styles.innerText1}>I AM A RETAILER</Text>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerText:{
        marginLeft: 20,
        marginTop: 50,
        fontSize: 25,
        fontWeight: 'bold'
    },
    innerContainer:{
        width: WIDTH - 50,
        backgroundColor: '#00cb9c',
        height: '30%',
        marginLeft: 25,
        marginTop: 30,
        borderRadius: 5
    },
    innerContainer1:{
        width: WIDTH - 50,
        borderColor: '#f0f0f0',
        borderWidth: 1,
        height: '30%',
        marginLeft: 25,
        marginTop: 30,
        borderRadius: 5
    },
    innerText:{
        color: '#fff',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: '40%'
    },
    innerText1:{
        color: '#00cb9c',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: '40%'
    }
});