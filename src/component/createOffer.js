import React from 'react';
import { StyleSheet, Text, View, Image,CheckBox, FlatList, ImageBackground, AsyncStorage, Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, Picker, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import moment from 'moment';

export default class createOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '15-05-2018',
      isVisible: false,
      chooseDate: '',
      chooseDateTo: '',
      pickerResult: null,
      offerName: '',
      offerDes: '',
      image: '',
      checkBoxChecked: [],
      
    }
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chooseDate: moment(datetime).format('YYYY-MM-DD')
    })
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    })
  };


  handlePickerTo = (datetime) => {
    this.setState({
      isVisibleTo: false,
      chooseDateTo: moment(datetime).format('YYYY-MM-DD')
    })
  };

  hidePickerTo = () => {
    this.setState({
      isVisibleTo: false,

    })
  };

  showPickerTo = () => {
    this.setState({
      isVisibleTo: true,
    })
  };

  componentDidMount() {
    this.getPermissionAsync()
  }

  _pickImg = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });

    this.setState({
      pickerResult,
    });
  };
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  creatOffer = async () => {

    const { offerName, offerDes, chooseDate, chooseDateTo, image } = this.state;

    if (offerName === '') {
        alert("Please Enter Offer Name");
        return;
    }
    else if (offerDes === '') {
        alert("Please Enter Offer Description");
        return;
    }
    else {
        await AsyncStorage.getItem('ID').then(id => {
            console.log("id", id)
            fetch(`http://aajo.in/public/api/addoffer/${id}`, {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  name: offerName,
                  description: offerDes,
                  validity_from: chooseDate,
                  validity_to: chooseDateTo,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("response", responseJson);

                    if (responseJson.success === '1') {
                        this.props.navigation.navigate('createOffer1', {NAME: offerName, DES: offerDes})
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

checkBoxChanged(id, value) {

  this.setState({
    checkBoxChecked: tempCheckValues
  })

  var tempCheckBoxChecked = this.state.checkBoxChecked;
  tempCheckBoxChecked[id] = !value;

  this.setState({
    checkBoxChecked: tempCheckBoxChecked
  })

}

renderDayRow = ({ item, }) => {
  console.log("item", item.value)
  return (
    <View key={val.id} style={{ flexDirection: 'column' }}>
    
    <CheckBox

      value={this.state.checkBoxChecked[val.id]}

      onValueChange={() => this.checkBoxChanged(val.id, this.state.checkBoxChecked[val.id])}

    />

  </View >
  )
}
  render() {
    
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ScrollView>
          <Text style={styles.headerText}>Create Your Offer</Text>
          {/* <Text style = {{marginHorizontal: wp('5%'), marginTop: hp('3')}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text> */}
          <TextInput
            style={styles.input}
            mode='outlined'
            theme={{
              colors: {
                primary: '#00cb9c',
              }
            }}
            label="Offer Name"
            placeholder="Buy one Get one free"
            placeholderTextColor={'#666666'}
            value={this.state.offerName}
            onChangeText={offerName => this.setState({ offerName })}
          />
          <TextInput
            style={styles.input3}
            mode='outlined'
            theme={{
              colors: {
                primary: '#00cb9c',
              }
            }}
            label='Offer Description'
            placeholder="Offer Description"

            placeholderTextColor={'#666666'}
            value={this.state.offerDes}
            onChangeText={offerDes => this.setState({ offerDes })}
          />
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Offer Validity</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={this.showPicker}>
              <TextInput
                style={styles.date}
                mode='outlined'
                theme={{
                  colors: {
                    primary: '#00cb9c',
                  }
                }}
                label='From Date'
                placeholder="From Date"
                placeholderTextColor={'#666666'}
                editable={false}
                value={this.state.chooseDate}
                onChangeText={chooseDate => this.setState({ chooseDate })}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={this.state.isVisible}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
              mode={'date'}
              datePickerModeAndroid={'spinner'}
            />
            <TouchableOpacity onPress={this.showPickerTo}>
              <TextInput
                style={styles.date}
                mode='outlined'
                theme={{
                  colors: {
                    primary: '#00cb9c',
                  }
                }}
                label='To Date'
                placeholder="To Date"
                placeholderTextColor={'#666666'}
                editable={false}
                value={this.state.chooseDateTo}
                onChangeText={chooseDateTo => this.setState({ chooseDateTo })}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={this.state.isVisibleTo}
              onConfirm={this.handlePickerTo}
              onCancel={this.hidePickerTo}
              mode={'date'}
              datePickerModeAndroid={'spinner'}
            />
          </View>
          <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Offer Catalog</Text>

          <View style={styles.dragFile}>
            <View style={styles.location}>
              <AntDesign
                // reverse
                name='addfile'
                type='font-awesome'
                color='#1485e0'
                size={24}

              />
              <Text style={{ marginTop: hp('2%'), color: '#666666', fontSize: 15 }}>Drag file here or <Text onPress={this._pickImg} style={{ color: '#00cb9c', fontWeight: 'bold', fontSize: 15 }}>Browse</Text></Text>
            </View>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 18, color: '#666666', }} >- or -</Text>

          <TouchableOpacity style={styles.image}>
            <View>
              <Entypo
                // reverse
                name='camera'
                type='font-awesome'
                color='#666666'
                size={24}

              />

            </View>
            <Text style={{ color: '#666666', marginLeft: wp('5%'), fontSize: 15 }}>Take Photo</Text>
          </TouchableOpacity>

          <View style={styles.buttom}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.dotView}>
              <View style={styles.dot}></View>
              <View style={styles.dot1}></View>
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
  date: {
    marginTop: wp('4%'),
    width: wp('42%'),
    backgroundColor: '#fff'
  },
  input3: {
    marginTop: wp('4%'),
    height: hp('20%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#fff',
    textAlignVertical: 'top',

  },
  input2: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#F1F3F4',
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
    alignItems: 'center',
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
  dragFile: {
    borderColor: '#00cb9c',
    borderStyle: "dashed",
    borderWidth: 2,
    marginHorizontal: wp('5%'),
    height: hp('20%'),
    marginVertical: hp('2%'),
    borderRadius: 3,
    justifyContent: 'center'

  },
  image: {
    borderColor: '#00cb9c',
    borderWidth: 2,
    marginHorizontal: wp('5%'),
    height: hp('10%'),
    marginVertical: hp('2%'),
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttom: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: wp('0%'),
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