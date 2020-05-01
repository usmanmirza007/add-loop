import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, AsyncStorage, Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class personalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopName: '',
            address: '',
            city: '',
            locationStatic: '',
            State: '',
            error: '',
            location: null,
            geocodes: '',
            errorMessage: "",
            CurrentLatitude: '',
            CurrentLongitude: ''
        };
        console.log('location', this.state.geocodes)
    }

    componentDidMount() {
        this.getLocationAsync();
    }
    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
        const { latitude, longitude } = location.coords
        this.getGeocodeAsync({ latitude, longitude })
        // this.setState({ location: { latitude, longitude } });
        this.setState({
            CurrentLatitude: latitude,
            CurrentLongitude: longitude
        });

    };
    getGeocodeAsync = async (location) => {
        let geocode = await Location.reverseGeocodeAsync(location)
        // console.log("one",geocode[0].isoCountryCode, geocode[0].name, geocode[0].city, )
        let city = geocode[0].city
        let region = geocode[0].region
        let name = geocode[0].country
        let combaine = `${city}, ${region}, ${name}`
        console.log("combaine", combaine)
        this.setState({ geocodes: combaine })
    }

    personal = async () => {

        const { shopName, address, city, geocodes, State, CurrentLatitude, CurrentLongitude } = this.state;
        console.log("geo", CurrentLatitude, CurrentLongitude)
        if (shopName === '') {
            alert("Please Enter Shop Name");
            return;
        }
        else if (address === '') {
            alert("Please Enter address");
            return;
        }
        else if (city === '') {
            alert("Please Enter city");
            return;
        }
        else if (State === '') {
            alert("Please Enter state");
            return;
        }
        else {
            await AsyncStorage.getItem('ID').then(id => {
                console.log("id", id)
                fetch(`http://aajo.in/public/api/retailer_businessdetail/${id}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        shopname: shopName,
                        address: address,
                        city: city,
                        state: State,
                        location: geocodes,
                        latitude: CurrentLatitude,
                        longitude: CurrentLongitude
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log("response", responseJson);

                        if (responseJson.success === '1') {

                            // this.props.navigation.navigate('otp', {COUNTRYCODE:responseJson.user.country_code, PHONE:responseJson.user.phonenumber});
                            // AsyncStorage.setItem("UID", responseJson.user.id);
                            // this.props.navigation.navigate('home2', {uid:responseJson.user.id});
                            this.props.navigation.navigate('personalDetail2')
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
        const { location, geocodes, errorMessage } = this.state
        console.log("geo location", geocodes)
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <Text style={styles.headerText}>Fill in your Business details</Text>

                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='Shop Name'
                        placeholder="Shop Name"
                        placeholderTextColor={'#666666'}
                        value={this.state.shopName}
                        onChangeText={shopName => this.setState({ shopName })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='Shop Address'
                        placeholder="Shop Address"
                        placeholderTextColor={'#666666'}
                        value={this.state.address}
                        onChangeText={address => this.setState({ address })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='City'
                        placeholder="City"
                        placeholderTextColor={'#666666'}
                        value={this.state.city}
                        onChangeText={city => this.setState({ city })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='State'
                        placeholder="State"
                        placeholderTextColor={'#666666'}
                        value={this.state.State}
                        onChangeText={State => this.setState({ State })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#00cb9c',
                            }
                        }}
                        label='Location'
                        placeholder="Location"
                        placeholderTextColor={'#666666'}
                        value={geocodes}
                    />
                    <View style={styles.buttom}>
                        <Text style={styles.skip}>Back</Text>
                        <View style={styles.dotView}>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
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
    location: {
        position: 'absolute',
        marginLeft: wp('80%'),
        marginTop: hp('52%')
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
        marginTop: wp('35%'),
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