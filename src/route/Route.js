import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import selectColor from './../component/selectColor';
const Route =  createStackNavigator({
    
    selectColor: {
        screen: selectColor,
        navigationOptions: {
            header: null,
        },
    },

  },
  {
      initialRouteName: 'splash'
  })

export default createAppContainer(Route);

