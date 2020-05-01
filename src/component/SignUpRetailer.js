import React from 'react';
import { StyleSheet, Text, View, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

var radio_props = [
  { value: 0, label: 'Male' },
  { value: 1, label: 'Female' },
];
export default class SignUpRetailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mob_number: '',
      countryCode: '',
    };
  }

  register(){
  
        
    // const {imagebase} = this.state;
    // console.log(imagebase);
    // return;
    const {fname} = this.state;
    const {lname} = this.state;
    const {mob_number} = this.state;
    const {countryCode} = this.state;

      if(this.state.fname===''){
        alert("Please Enter Your First Name");
        return;
      }
      else if(this.state.lname===''){
        alert("Please Enter Your Last Name");
        return;
      }
      else if(this.state.mob_number===''){
        alert("Please Enter Your Email");
        return;
      }
      else if(this.state.countryCode===''){
        alert("Please Enter Your Country Code");
        return;
     }
      else{

    fetch('http://aajo.in/public/api/retailer_signup', {

        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
          firstname: fname,
          lastname: lname,
          country_code: countryCode,
          phonenumber: mob_number,
        })
    }).then((response) => response.json())
    .then((responseJson) =>{
        console.log(responseJson);
        // console.log(responseJson.user.id);
        if(responseJson.success == '1')
        {

            this.props.navigation.navigate('otp', {COUNTRYCODE: countryCode, PHONE: mob_number,});
            
        }else if (responseJson.message == 'Phonenumber already exist')
        {
          alert('Mobile Number is Already Exist');
            return;
        }else
        {
            alert('SOMETHING WENT WRONG !');
            return;
        }
    })
    .catch((error) => {
        alert(error);
    });
}

}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
          <ScrollView>
            <Text style={styles.headerText}>Create your{'\n'}account in 3 easy{'\n'}Steps</Text>
            <Text style = {{marginHorizontal: wp('5%'), marginTop: hp('3')}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
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
            label='Mobile Number'
            placeholder="Mobile Number"
            placeholderTextColor={'#666666'}
            value={this.state.mob_number}
            onChangeText={mob_number => this.setState({ mob_number })}
          />


          <View>
          <Picker style={styles.input2}
              selectedValue={this.state.countryCode}
              onValueChange={(itemValue) =>
                  this.setState({ countryCode: itemValue })}>
              <Picker.Item label="Select Country Code" value="" />
              <Picker.Item label="92" value="92" />
              <Picker.Item label="91" value="91" />
          </Picker>
          </View>


            <TouchableOpacity
              style={styles.button}
              onPress={() => this.register()}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.signupView}>
              <Text style={styles.alresdy}>Already have an account?</Text>
              <Text onPress={() => this.props.navigation.navigate('SignInShoper')}
                style={styles.signupText}>Sign In</Text>
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
  input2: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor:'#F1F3F4',
  },
});