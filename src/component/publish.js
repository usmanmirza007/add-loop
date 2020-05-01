import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class publish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>

                    <View style={styles.checkIcon}>
                        <AntDesign
                            name='check'
                            type='font-awesome'
                            color='#fff'
                            size={40}
                            containerStyle={{ width: width(10) }} />
                    </View>
                    <Text style = {{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginTop: 30}}>Congratulation Your</Text>
                    <Text style = {{fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>Offer is live</Text>
                    <Text style = {{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginTop: 30, marginBottom: 70}}>Happy Selling!!</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('home2')}>
                        <Text style={styles.buttonText}>GO TO DASHBOARD</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    checkIcon: {
        marginHorizontal: 10,
        marginTop: hp('15%'),
        backgroundColor: '#00cb9c',
        height: 100,
        width: 100,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#00cb9c',
        borderRadius: wp('10%'),
        height: 50,
        marginHorizontal: wp('10%')
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
});