import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity,} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
export default class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <Text>Heelo</Text>
                <TextInput
                style = {styles.input}
                mode = 'outlined'
                    label='Email'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
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
    input:{
        marginTop: 50,
    }
});