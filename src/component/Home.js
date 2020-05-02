import React from 'react';
import { StyleSheet, Text, TextInput, View, Image,FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            responseData: []
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign
                name='home'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    componentDidMount() {
        axios.get(`https://adloop.malangis.com/public/api/categorylist`)
            .then((response) => {
                console.log(response.data.list);
                if (response.data.success == "1") {
                    this.setState({ responseData: response.data.list})
                    //console.log(this.state.responseData)
                }
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
    }

    renderDayRow = ({ item, }) => {
        //console.log(item.image)
        return (
            <View style={styles.mainCategory}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('subCategory')}
                    style={styles.innerCategoryView}>
                    <Image source={{uri: item.image =  "https://adloop.malangis.com/public/assets/category/thumb/1585209822Roman_03102015rf-73b-679239107.jpg"}}
                    
                        style={styles.imageCategory} />
                    <Text style={styles.categoryText}>{item.category_name}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <Ionicons name='ios-notifications' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginLeft: wp('63%') }}>
                        <MaterialIcons name='location-on' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#5f5d70' }}>India</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('searchScreen')}>
                        <AntDesign
                            // reverse
                            name='search1'
                            type='font-awesome'
                            color='#5f5d70'
                            size={22}
                            style={{ marginHorizontal: 20 }}
                        />
                    </TouchableOpacity>
                    <TextInput
                        numberOfLines={6}
                        placeholderTextColor='#666666'
                        style={styles.searchInput}
                        placeholder={'Find prodects or retailer'}
                        containerStyle={{ marginVertical: '5%' }}
                    />
                    <FontAwesome
                        // reverse
                        name='microphone'
                        type='font-awesome'
                        color='#5f5d70'
                        size={22}
                        style={{ marginHorizontal: 10 }}
                    />
                </View>

                <ScrollView>
                    <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Categories</Text>
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('32%'), fontWeight: 'bold', color: '#00cb9c' }}>SEE ALL</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <AntDesign name='arrowright' color='#00cb9c' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                    <FlatList
                        data={this.state.responseData}
                        renderItem={this.renderDayRow}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />

                    <View style={{ marginTop: hp('5%'), marginBottom: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Fresh & Nes Offers</Text>
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('8%'), fontWeight: 'bold', color: '#00cb9c' }}>VIEW ALL</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <AntDesign name='arrowright' color='#00cb9c' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                    <View style={styles.mainAdsView}>
                        <View style={styles.adsView}>
                            <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>50% off</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                        <View style={styles.adsView1}>
                            <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>Buy 1 Get 1 Free</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                    </View>
                    <View style={styles.mainAdsView}>
                        <View style={styles.adsView}>
                            <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>50% off</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                        <View style={styles.adsView1}>
                            <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>Buy 1 Get 1 Free</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                    </View>
                    <View style={styles.mainAdsView}>
                        <View style={styles.adsView}>
                            <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>50% off</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                        <View style={styles.adsView1}>
                            <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <Text style={styles.offer}>Buy 1 Get 1 Free</Text>
                            <Text style={styles.top} >By Seven top retailer</Text>
                        </View>
                    </View>
                    <Text onPress={
                        () => this.props.navigation.navigate('allOfferListing')}
                        style={styles.allOffers}>VIEW ALL OFFERS</Text>
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
    inputContainer: {
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: 3,
        marginTop: hp('2%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#f4f4f8',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        fontSize: 15,
        width: wp('95%'),
        marginRight: wp('-35%')
    },
    mainCategory: {
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    innerCategoryView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: wp('30%')
    },
    imageCategory: {
        width: wp('12%'),
        height: hp('6%'),
    },
    categoryText: {
        color: '#666666',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    mainAdsView: {
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginLeft: wp('5%'),
        marginRight: wp('1%'),
        paddingTop: wp('1%')
    },
    adsView1: {
        paddingHorizontal: wp('1%'),
        paddingTop: wp('1%'),
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('2%')
    },
    top: {
        fontSize: 15,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    allOffers: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00cb9c',
        marginBottom: hp('5%'),
        marginTop: hp('5%'),
    }
});