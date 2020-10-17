import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {
//   createAppContainer,
//   createSwitchNavigator,
//   createMaterialTopNavigation,
//   createBottomTabNavigatior,
//   createDrawerNavigation,
// } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  }),
);

// const Stack = createStackNavigator();

// function Routes() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Tindev" component={Main} />
//     </Stack.Navigator>
//   );
// }

// export default Routes;
