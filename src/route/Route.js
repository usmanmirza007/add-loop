import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Forget from '../component/Forget';
import selectColor from '../component/splash';
import accountType from '../component/accountType';
import otp from '../component/otp';
import selectCategory from '../component/selectCategory';
import subCategory from '../component/subCategory';
import chatDetail from '../component/chatDetail';
import searchScreen from '../component/searchScreen';
import allChat from './../component/allChat';
import allOfferListing from './../component/allOfferListing';
import dashBoardBottomTab from './dashBoardBottomTab';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    allOfferListing: {
        screen: allOfferListing,
        navigationOptions: {
            header: null,
        },
    },
    searchScreen: {
        screen: searchScreen,
        navigationOptions: {
            header: null,
        },
    },
    allChat: {
        screen: allChat,
        navigationOptions: {
            header: null,
        },
    },
    subCategory: {
        screen: subCategory,
        navigationOptions: {
            header: null,
        },
    },
    chatDetail: {
        screen: chatDetail,
        navigationOptions: {
            header: null,
        },
    },
    tab: {
        screen: dashBoardBottomTab,
        navigationOptions: {
            header: null,
        },
    },
    selectCategory: {
        screen: selectCategory,
        navigationOptions: {
            header: null,
        },
    },
    otp: {
        screen: otp,
        navigationOptions: {
            header: null,
        },
    },
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
    
  },{
      initialRouteName: 'selectColor'
  })

export default createAppContainer(Route);

