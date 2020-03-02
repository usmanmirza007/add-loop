import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Forget from '../component/Forget';
import selectColor from '../component/splash';
import accountType from '../component/accountType';
import DashBoard from './DashBoard';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    accountType: {
        screen: accountType,
        navigationOptions: {
            header: null,
        },
    },
    selectColor: {
        screen: selectColor,
        navigationOptions: {
            header: null,
        },
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        },
       
    },
    Forget: {
        screen: Forget,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: DashBoard,
        navigationOptions: {
            header: null,
        },
    },
    
  },{
      initialRouteName: 'selectColor'
  })

export default createAppContainer(Route);

