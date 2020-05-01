import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Picker, AsyncStorage, Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class personalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender: '',
            email: '',
            date: '',
            ID: this.props.navigation.getParam('uid'),
        };
        console.log("IDDD", this.state.ID)
    }
    personal = async () => {

        const { email, date, Gender, } = this.state;

        if (email === '') {
            alert("Please Enter email");
            return;
        }
        else if (date === '') {
            alert("Please Enter date");
            return;
        }
        else {
            await AsyncStorage.getItem('ID').then(id => {
                console.log("id", id)

                fetch(`http://aajo.in/public/api/retailer_personoldetail/${id}`, {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        gender: Gender,
                        email: email,
                        dob: date
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log("response", responseJson);

                        if (responseJson.success === '1') {

                            // this.props.navigation.navigate('otp', {COUNTRYCODE:responseJson.user.country_code, PHONE:responseJson.user.phonenumber});
                            // AsyncStorage.setItem("UID", responseJson.user.id);
                            // this.props.navigation.navigate('home2', {uid:responseJson.user.id});
                            this.props.navigation.navigate('personalDetail1')
                            Alert.alert('successfully')
                        }
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <Text style={styles.headerText}>Fill in your personal details</Text>

                    <View style={styles.mainRadioView}>
                        <Text style={styles.choose}>Choose Gender</Text>
                        <View>
                            <Picker style={styles.input2}
                                selectedValue={this.state.Gender}
                                onValueChange={(itemValue) =>
                                    this.setState({ Gender: itemValue })}>
                                <Picker.Item label="Gender" value="" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </View>
                    </View>
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='Email ID'
                        placeholder="Email ID"
                        placeholderTextColor={'#666666'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='Date of Birth'
                        placeholder="Date of Birth"
                        placeholderTextColor={'#666666'}
                        value={this.state.date}
                        onChangeText={date => this.setState({ date })}

                    />
                    <View style={styles.buttom}>
                        <Text style={styles.skip}>Back</Text>
                        <View style={styles.dotView}>
                            <View style={styles.dot}></View>
                            <View style={styles.dot1}></View>
                            <View style={styles.dot1}></View>
                        </View>
                        <TouchableOpacity onPress={() => this.personal()}
                            style={styles.rightIcon}>
                            <AntDesign
                                name='arrowright'
                                type='font-awesome'
                                color='#fff'
                                style={styles.arrow}
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    headerText: {
        marginLeft: wp('5%'),
        marginTop: wp('5%'),
        marginBottom: wp('5%'),
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    input: {
        marginTop: wp('12%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    input1: {
        marginTop: wp('4%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    input2: {
        marginTop: wp('4%'),
        marginLeft: 0,
        marginHorizontal: wp('6%'),
        backgroundColor: '#F1F3F4',
    },
    location: {
        position: 'absolute',
        marginLeft: wp('80%'),
        marginTop: hp('40%')
    },
    radioButton: {
        marginRight: 30,
        marginTop: 10
    },
    mainRadioView: {
        marginLeft: wp('5%'),
        marginTop: hp('3%')
    },
    choose: {
        fontSize: 15,
        color: '#666666'
    },
    buttom: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginTop: wp('55%'),
        justifyContent: 'space-between'
    },
    dotView: {
        flexDirection: 'row',
        marginTop: wp('15%'),

    },
    dot: {
        backgroundColor: '#00cb9c',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    dot1: {
        backgroundColor: '#f0f0f0',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    rightIcon: {
        backgroundColor: '#00cb9c',
        width: wp('16%'),
        height: hp('9%'),
        borderRadius: wp('25%'),
        marginTop: hp('5%'),
        justifyContent: 'center',
        marginBottom: hp('6%')
    },
    arrow: {
        alignSelf: 'center',

    },
    skip: {
        marginTop: hp('8%'),

    },
});