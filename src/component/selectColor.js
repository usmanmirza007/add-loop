import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button, TabBarIOS } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class selectColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <Text>hello</Text>
            </View>
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
});