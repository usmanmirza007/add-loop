import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const {width: WIDTH} = Dimensions.get('window')
export default class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
              <View style = {{backgroundColor: '#000', height: '4%'}}></View>
              <View style = {{height: '10%', backgroundColor: '#263238',}}>
                <View style = {{ marginTop: 15, flexDirection: 'row' }}>
                  <View style = {{marginLeft: 20}}>
                      <Icon  name = 'menu' color = '#FFA726' size = {35} 
                  onPress={
                      () => this.props.navigation.openDrawer()
                  }/>
                  </View>
                  <View style = {{marginTop: 5,}}>
                      <Text style = {{fontSize: 20, marginLeft: 100, fontWeight: 'bold', color: '#fff'}}>Home</Text>
                  </View>
                </View>
              </View>
              <ImageBackground source = {require('./../image/background.png')} style = {{width: '100%', height: '100%'}} resizeMode= 'stretch'>
              <ScrollView>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15), }}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                  <View style = {{justifyContent: 'space-between', flexDirection: 'row', height:height(15)}}>
                    <View style = {{flexDirection: 'row'}}>
                      <View style={{ justifyContent:'center', alignItems: 'center',}}>
                          <Image source={require('./../image/user1.png')} style={{width: 50, height: 50, marginLeft: 20}}></Image>
                      </View>
                      <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                        <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{alignSelf: 'flex-start', fontSize: 15, color: '#fff'}}>USD</Text>
                      </View>
                    </View>
                    <View style = {{justifyContent: 'center', marginRight: 20}}>
                      <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>55.122 $</Text>
                      <TouchableOpacity
                        style={{backgroundColor: '#FFA726', borderRadius: 10, width: 75, marginTop: 5, height: 30, justifyContent: 'center'}}
                        onPress={this.onPress}
                      >
                        <Text style = {{alignSelf: 'center', color: '#263238', fontSize: 15}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                
                
              </ScrollView>
              </ImageBackground>
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