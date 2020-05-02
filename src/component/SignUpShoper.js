import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class SignUpShoper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fname: '',
      lname: '',
      email: '',
      mob_number: '',
      cuntry_code: '',
      radio_props: [
        { gender: 0, label: 'Male' },
        { gender: 1, label: 'Female' },
      ],
      location: '',
      dob: '',
      errorText: '',
      loading: false
    };
  }
  register = () => {
    // alert('ok')
    const { fname, lname, email, mob_number, country_code, radio_props, location, dob } = this.state;

    if (this.state.mob_number === '') {
      alert("Please Enter Phone Number");
      return;
    }
    else {

      fetch('http://shiamarriage.liftich.com/public/api/register', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          firsname: fname,
          lastname: lname,
          email: email,
          country_code: country_code,
          phonenumber: mob_number,
          gender: radio_props.gender,
          location: location,
          dob: dob,
        })
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          // if (responseJson.message == 'Phonenumber already exist') {
          //   alert('This Number Is Already Exist');
          //   return;
          // }
          if (responseJson.success === "1") {

            this.props.navigation.navigate('otp');
            // this.props.navigation.navigate('otp', {uid:responseJson.user.id});
          }
          // if (responseJson.message == 'User not registered') {
          //   alert('You Are Not Registered Something Went Wrong');
          //   return;
          // }

          // alert(responseJson);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity style={styles.button}
        onPress={() => this.onSigUp(this.state.fname, this.state.lname, this.state.email, this.state.dob, this.state.mob_number, this.state.cuntry_code, this.state.radio_props, this.state.location)}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    )
  }
  onSigupFail() {
    this.setState({ errorText: 'Authentication Failed.', loading: false })
  }
  onSignUpSuccess() {
    this.setState({
      loading: false,
      fname: '',
      lname: '',
      email: '',
      mob_number: '',
      cuntry_code: '',
      radio_props: '',
      dob: '',
      location: '',
      errorText: '',
    })
    this.props.navigation.navigate('otp')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView>
            <Text style={styles.headerText}>Create{'\n'}your account</Text>
            <TextInput
              style={styles.input}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='First Name'
              placeholder="First Name"
              placeholderTextColor={'#666666'}
              value={this.state.fname}
              onChangeText={fname => this.setState({ fname })}
            />
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Last Name'
              placeholder="Last Name"
              placeholderTextColor={'#666666'}
              value={this.state.lname}
              onChangeText={lname => this.setState({ lname })}
            />
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
              label='Mobile Number'
              placeholder="Mobile Number"
              placeholderTextColor={'#666666'}
              value={this.state.mob_number}
              onChangeText={mob_number => this.setState({ mob_number })}
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
              value={this.state.location}
              onChangeText={location => this.setState({ location })}

            />
            <View style={styles.location}>
              <MaterialIcons
                // reverse
                name='location-searching'
                type='font-awesome'
                color='#666666'
                size={24}
              />
            </View>
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Country Code'
              placeholder="Country Code"
              placeholderTextColor={'#666666'}
              value={this.state.cuntry_code}
              onChangeText={cuntry_code => this.setState({ cuntry_code })}
            />
            <View style={styles.mainRadioView}>
              <Text style={styles.choose}>Choose Gender</Text>
              <View style={styles.radioButton}>
                <RadioForm
                  radio_props={this.state.radio_props}
                  style={{ marginTop: 0, }}
                  initial={0}
                  radioStyle={{ padding: 3, marginRight: 50 }}
                  buttonColor={'#666666'}
                  buttonSize={10}
                  selectedButtonColor={'#00cb9c'}
                  formHorizontal={true}
                  onPress={gender => this.setState({ gender })}
                //buttonOuterSize={10}
                />
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
              label='Date of Birth'
              placeholder="Date of Birth"
              placeholderTextColor={'#666666'}
              value={this.state.dob}
              onChangeText={dob => this.setState({ dob })}

            />
            <View style={styles.person}>
              <MaterialIcons
                // reverse
                name='person-pin'
                type='font-awesome'
                color='#666666'
                size={24}
              />
            </View>

            <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
            <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('otp')}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

            <View style={styles.signupView}>
              <Text style={styles.alresdy}>Already have an account?</Text>
              <Text onPress={() => this.props.navigation.navigate('SignInShoper')}
                style={styles.signupText}>Sign In</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    marginTop: wp('10%'),
    fontSize: hp('5%'),
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
  signupView: {
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%')
  },
  alresdy: {
    fontSize: hp('2.5%'),
    color: '#666666'
  },
  signupText: {
    fontSize: hp('2.5%'),
    marginTop: hp('1%'),
    color: '#00cb9c',
    fontWeight: 'bold'
  },
  location: {
    position: 'absolute',
    marginLeft: wp('80%'),
    marginTop: hp('77.5%')
  },
  person: {
    position: 'absolute',
    marginLeft: wp('80%'),
    marginTop: hp('115%')
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
  }
});