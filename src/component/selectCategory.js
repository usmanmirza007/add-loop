import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class selectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('4%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Select Categories</Text>
                    </View>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 80, fontWeight: 'bold', color: '#00cb9c' }}>Next</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <AntDesign name='arrowright' color='#00cb9c' size={26}
                            onPress={
                                () => this.props.navigation.navigate('tab')
                            } />
                    </View>
                </View>
                <Text style={styles.headerText}>Please select categories you want to see ads from</Text>
                <ScrollView>
                    <View style = {{flexDirection: 'row', marginTop: hp('10%'),  borderTopWidth: 2, borderTopColor: '#ccc'}}>
                        <View 
                            style={{
                                width: WIDTH - wp('50%'),
                                height: hp('25%'),
                                backgroundColor: '#00cb9c'
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor: '#fff',
                                }} />
                            <Text style={{
                                color: '#fff',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>ELECTRONICS</Text>
                        </View>

                        <View 
                            style={{
                                width: WIDTH - wp('50%'),
                                backgroundColor: '#fff',
                                height: hp('25%'),
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor:  '#00cb9c',
                                }} />
                            <Text style={{
                                color: '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>HOME & TEXTILE</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: hp('0%'), }}>
                        <View 
                            style={{
                                width: WIDTH - wp('50%'),
                                height: hp('25%'),
                                backgroundColor: '#fff'
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor: '#00cb9c',
                                }} />
                            <Text style={{
                                color: '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>PERSONAL CARE</Text>
                        </View>

                        <View 
                            style={{
                                width: WIDTH - wp('50%'),
                                backgroundColor: '#00cb9c',
                                height: hp('25%'),
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor:  '#fff',
                                }} />
                            <Text style={{
                                color: '#fff',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>INDEPENDENT GROCER</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: hp('0%'),  borderBottomWidth: 2, borderBottomColor: '#ccc', marginBottom: hp('10%')}}>
                    <View 
                        style={{
                            width: WIDTH - wp('50%'),
                            height: hp('25%'),
                            backgroundColor: '#00cb9c'
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/video1.png')}
                            style={{
                                width: wp('15%'),
                                height: hp('10%'),
                                alignSelf: 'center',
                                tintColor: '#fff',
                            }} />
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>GIFT/BOOK STORE</Text>
                    </View>

                    <View 
                        style={{
                            width: WIDTH - wp('50%'),
                            backgroundColor: '#fff',
                            height: hp('25%'),
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/video1.png')}
                            style={{
                                width: wp('15%'),
                                height: hp('10%'),
                                alignSelf: 'center',
                                tintColor:  '#00cb9c',
                            }} />
                        <Text style={{
                            color: '#666666',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>PET SUPPLY STORE</Text>
                    </View>
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
        marginHorizontal: wp('5%'),
        marginTop: hp('2%'),
        fontSize: 15,
        color: '#666666'
    },
    checkIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 15
    },
});