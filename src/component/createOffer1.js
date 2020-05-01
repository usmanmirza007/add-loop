import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, AsyncStorage, Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, Picker, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkbox = ({ checked, onPress }) => (
  <Icon size={25} onPress={() => onPress()} name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'} />
)

export default class createOffer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Gender: '',
      age: '',
      data: [],
      counter: 0,
      shopCategory: [],
      dataId: '',
      Name: this.props.navigation.getParam('NAME'),
      Description: this.props.navigation.getParam('DES'),
    };
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseCounter = () => {

    this.setState({ counter: this.state.counter - 1 })

  }

  creatOffer = async () => {

    const { Gender, age, isChecked, counter, dataId, Name, Description } = this.state;

    if (Gender === '') {
      alert("Please Enter Gender");
      return;
    }
    else if (age === '') {
      alert("Please Enter Age");
      return;
    }
    else {
      await AsyncStorage.getItem('OFFERID').then(id => {
        console.log("offer id", id)
        fetch(`http://aajo.in/public/api/addoffer2/${id}`, {

          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            gender: Gender,
            age: age,
            location_radius: counter,
            category_id: dataId
          })
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log("response", responseJson);

            if (responseJson.success === '1') {
              this.props.navigation.navigate('createOffer2', { GENDER: Gender, AGE: age, RADIUS: counter, OFFERNAME: Name, DESCRIPTION: Description })
              // AsyncStorage.setItem('OFFERID2', ID);
              console.log("OFFERID", responseJson.obj.id)
              let ID = `${responseJson.obj.id}`;
              AsyncStorage.setItem('OFFERID', ID);
              Alert.alert('successfully')
            }
          })
          .catch((error) => {
            alert(error);
          });
      })
    }
  }
  componentDidMount() {
    this.getData()

  }
  getData() {
    let url = 'http://aajo.in/public/api/categorylist';
    fetch(url)
      .then(r => r.json())
      .then(response => this.setState({

        data: response.list.map(r => {
          console.log(response.list)
          r.checked = false;
          return r;
        })
      }))
      .catch(e => console.log(e))
  }

  setChecked(i) {
    const data = this.state.data;
    data[i].checked = !data[i].checked;
    this.setState({ data });
    console.log("data", this.state.data)

    this.state.dataId = data[i].id
    console.log("id", this.state.dataId)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ScrollView>
          <Text style={styles.headerText}>Create Your Offer</Text>
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Choose Gender</Text>
          <View>
            <Picker style={styles.input2}
              selectedValue={this.state.Gender}
              mode={'dropdown'}
              onValueChange={(itemValue) =>
                this.setState({ Gender: itemValue })}>
              <Picker.Item label="Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View>
            <Picker style={styles.input2}
              selectedValue={this.state.age}
              mode={'dropdown'}
              onValueChange={(itemValue) =>
                this.setState({ age: itemValue })}>
              <Picker.Item label="Age Group" value="" />
              <Picker.Item label="18 - 24" value="18 - 24" />
              <Picker.Item label="25 - 31" value="25 - 31" />
            </Picker>
          </View>
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Location Radius</Text>
          <View style={styles.mainView}>
            <TouchableOpacity onPress={() => this.decreaseCounter()} style={styles.increase}>
              <Text style={styles.increaseText}>-</Text>
            </TouchableOpacity>
            <View style={styles.kms}>
              <Text style={styles.kmsText}>{this.state.counter} Kms</Text>
            </View>
            <TouchableOpacity onPress={() => this.increaseCounter()} style={styles.increase}>
              <Text style={styles.increaseText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >From Shop Location</Text>
          <View style={{ borderBottomColor: '#666666', borderBottomWidth: 1, marginTop: hp('3%') }}></View>
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >REFERENCE</Text>

          <FlatList data={this.state.data}
            renderItem={({ item, index }) => (

              <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%') }}>
                <Text style={{ color: '#666666', fontSize: 18 }}>{item.category_name}</Text>
                <Checkbox onPress={() => this.setChecked(index)} checked={item.checked} />
              </View>
            )}
          />
          <View style={styles.buttom}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.dotView}>
              <View style={styles.dot1}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot1}></View>
            </View>
            <TouchableOpacity onPress={() => this.creatOffer()}
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
    marginTop: wp('10%'),
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#5f5d70'
  },
  input2: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#F1F3F4',
  },
  mainView: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    justifyContent: 'space-between',
    marginTop: hp('2.5%')
  },
  increase: {
    backgroundColor: '#e6e6e6',
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 5,
    justifyContent: 'center'
  },
  increaseText: {
    alignSelf: 'center',
    fontSize: 30
  },
  kms: {
    borderColor: '#666666',
    borderWidth: 2,
    width: wp('40%'),
    borderRadius: 5,
    height: hp('10%'),
    justifyContent: 'center'
  },
  kmsText: {
    alignSelf: 'center',
    color: '#666666',
    fontSize: 15
  },
  buttom: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: wp('0%'),
    justifyContent: 'space-between'
  },
  border: {
    borderBottomColor: '#e8e8e9',
    borderBottomWidth: 2,
    marginHorizontal: wp('0%'),
    marginVertical: hp('2%')
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
    marginRight: wp('2%'),
  },
  dot1: {
    backgroundColor: '#f0f0f0',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: wp('2%'),
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