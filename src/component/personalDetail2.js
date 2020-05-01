import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, AsyncStorage, Alert, FlatList, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box'
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkbox = ({ checked, onPress }) => (
    <Icon size={25} onPress={() => onPress()} name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'} />
)

export default class personalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            shopCategory: [],
            shopId: '',
            responseData: [],
            isChecked2: false,
            dataId: ''
        };
    }

    modelSelected = (value, index, data) => {

        let cityId = data[index].id;
        console.log("shop id", cityId);
        this.setState({
            shopId: cityId
        })
        this.getData()

        console.log("shop id", this.state.shopId);
    };

    componentDidMount() {
        this.ModelFunction()

    }

    ModelFunction() {
        fetch('http://aajo.in/public/api/categorylist', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("response ", responseJson.list[1].id)
                var len = responseJson.list.length;
                let drop_down_data = [];
                for (let i = 0; i < len; i++) {
                    // const data = responseJson.list[i];
                    // alert(JSON.stringify(data));    
                    // console.log("make data",data)
                    drop_down_data.push({ value: responseJson.list[i].category_name, id: responseJson.list[i].id });
                    // this.state.drop_down_data.push({ value: responseJson.cities[i].name,id:responseJson.cities[i].id });
                }
                this.setState({ shopCategory: drop_down_data })
                console.log("data shop", this.state.shopCategory)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    getData() {
        let id = this.state.shopId
        console.log("id", id)
        let url = `http://aajo.in/public/api/subcategorylist/${id}`;
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

        // this.state.dataId = data[i].id
        console.log("id array", this.state.dataId)
        this.setState({ dataId: data[i].id })
    }

    final = async () => {

        const { shopId, dataId } = this.state
        if (shopId === '') {
            Alert.alert('Please select main category')
        }
        else if (dataId === '') {
            Alert.alert('Please select sub category')
        }
        else {
            await AsyncStorage.getItem('ID').then(id => {
                console.log("offer id", id)
                fetch(`http://aajo.in/public/api/retailer_shopcategory/${id}`, {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        category_id: shopId,
                        subcategory_id: dataId,
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log("response", responseJson);

                        if (responseJson.success === '1') {
                            this.props.navigation.navigate('#')
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

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView>
                        <Text style={styles.headerText}>Shop Category</Text>
                        <View style={styles.InputStyle}>
                            <Dropdown
                                label="Shop Category"
                                data={this.state.shopCategory}
                                onChangeText={this.modelSelected}
                            />
                        </View>
                        <Text style={{ marginLeft: wp('5%') }}>SELECT SHOP SUB CATEGORY</Text>

                        <FlatList data={this.state.data}
                            renderItem={({ item, index }) => (

                                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('0%') }}>
                                    <Text style={{ color: '#666666', fontSize: 18 }}>{item.category_name}</Text>
                                    <Checkbox onPress={() => this.setChecked(index)} checked={item.checked} />
                                </View>
                            )}
                        />

                        <View style={styles.buttom}>
                            <Text style={styles.skip}>Back</Text>
                            <View style={styles.dotView}>
                                <View style={styles.dot}></View>
                                <View style={styles.dot}></View>
                                <View style={styles.dot}></View>
                            </View>
                            <TouchableOpacity onPress={() => this.final()}
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
        marginTop: wp('5%'),
        marginBottom: wp('5%'),
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    InputStyle: {
        backgroundColor: 'white',
        marginRight: 15,
        marginLeft: 15,
        paddingLeft: 10,
        marginTop: 10
    },
    categoryName: {
        marginTop: wp('5%'),

    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrow: {
        alignSelf: 'center',

    },
    checkIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 15
    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginHorizontal: wp('0%'),
        marginVertical: hp('2%')
    },
    main: {
        marginHorizontal: wp('5%'),
    },
    Picker: {
        borderColor: '#00cb9c',
        borderWidth: 2,
        marginHorizontal: wp('5%'),
        marginTop: wp('5%'),

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
        marginBottom: wp('3%'),
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