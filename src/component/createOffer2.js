import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default class createOffer1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.navigation.getParam('AGE'),
            Gender: this.props.navigation.getParam('GENDER'),
            radius: this.props.navigation.getParam('RADIUS'),
            offerName: this.props.navigation.getParam('OFFERNAME'),
            Description: this.props.navigation.getParam('DESCRIPTION'),
        }
        console.log("gender", this.state.Gender)
    }

    publish = async () => {

            await AsyncStorage.getItem('OFFERID').then(id => {
                console.log("offer id", id)
                fetch(`http://aajo.in/public/api/offerpublish/${id}`, {
        
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                  },
                }).then((response) => response.json())
                  .then((responseJson) => {
                    console.log("response", responseJson);
        
                    if (responseJson.success === '1') {
                      this.props.navigation.navigate('publish')
                      // AsyncStorage.setItem('OFFERID2', ID);
                    //   console.log("OFFERID", responseJson.obj.id)
                    //   let ID = `${responseJson.obj.id}`;
                    //   AsyncStorage.setItem('OFFERID', ID);
                      Alert.alert('successfully')
                    }
                  })
                  .catch((error) => {
                    alert(error);
                  });
              })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <Text style={styles.headerText}>Create Your Offer</Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >PREVIEW</Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >{this.state.offerName} </Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#000', fontWeight: 'bold', fontSize: 18, marginTop: hp('2.5%') }} >Buy one Get one Free</Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Offer Description</Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#000', fontWeight: 'bold', fontSize: 18, marginTop: hp('2.5%') }} >{this.state.Description} </Text>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Offer Image</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), }}>
                        <Image source={require('./../image/ads1.png')} style={{ width: 70, height: 70, marginRight: 10 }} />
                        <Image source={require('./../image/ads1.png')} style={{ width: 70, height: 70, marginRight: 10 }} />
                        <Image source={require('./../image/ads1.png')} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={{ borderBottomColor: '#666666', borderBottomWidth: 1, marginTop: hp('3%') }}></View>
                    <Text style={{ marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >TARGETING</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15, marginTop: hp('2.5%') }} >{this.state.Gender}</Text>
                        <AntDesign
                            name='arrowright'
                            type='font-awesome'
                            color='#000'
                            style={{ marginTop: 13 }}
                            size={26} />
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15, marginTop: hp('2.5%') }} >{this.state.age} </Text>
                        <AntDesign
                            name='arrowright'
                            type='font-awesome'
                            color='#000'
                            style={{ marginTop: 13 }}
                            size={26} />
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15, marginTop: hp('2.5%') }} >{this.state.radius} </Text>
                    </View>
                    <View style={{ justifyContent: 'center', backgroundColor: '#f4f6f8', borderRadius: 5, marginTop: hp('2.5%'), marginHorizontal: wp('5%'), height: hp('20%') }}>
                        <Text style={{ alignSelf: 'center', marginHorizontal: wp('5%'), color: '#666666', marginTop: hp('2.5%') }} >Estimated reach as per above Estimations</Text>
                        <Text style={{ alignSelf: 'center', marginHorizontal: wp('5%'), color: '#000', fontWeight: 'bold', fontSize: 18, marginTop: hp('2.5%') }} >1749 shopers</Text>
                    </View>
                    <View style={styles.buttom}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('#')}>
                            <Text style={styles.skip}>Skip</Text>
                        </TouchableOpacity>
                        <View style={styles.dotView}>
                            <View style={styles.dot1}></View>
                            <View style={styles.dot1}></View>
                            <View style={styles.dot}></View>
                        </View>
                        <TouchableOpacity onPress={() => this.publish()}
                            style={styles.rightIcon}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Publish</Text>
                            <AntDesign
                                name='arrowright'
                                type='font-awesome'
                                color='#fff'
                                style={styles.arrow}
                                size={22}
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
        width: wp('30%'),
        height: hp('5%'),
        borderRadius: wp('5%'),
        marginTop: hp('7%'),
        justifyContent: 'center',
        marginBottom: hp('6%'),
        flexDirection: 'row'
    },
    arrow: {
        alignSelf: 'center',
        marginLeft: 10
    },
    skip: {
        marginTop: hp('8%'),

    },
});