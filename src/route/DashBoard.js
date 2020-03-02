import SafeAreaView from 'react-native-safe-area-context';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import Home from './../component/Home';
import SideMenu from './../route/SideMenu';

const DashBoard = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  

  }, {
    drawerWidth: 300,
    initialRouteName:'Home',
    contentComponent: SideMenu,
  });
  

export default (DashBoard);

