import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import DetailItem from '../DetailItem/detailItem';
import BuyItem from '../BuyItem/BuyItem';
import LoginScreen from '../Login/LoginScreen';
import RegisterScreen from '../Login/RegisterScreen';
import UserScreen from '../User/UserScreen';
import EditProfile from '../User/EditProfile';
import ChangePassword from '../Login/ChangePassword';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const CartStack = createStackNavigator();
import Cart from '../Cart/cart';

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Details"
        component={DetailItem}
        initialParams={{keyType: 1}}
      />
    </HomeStack.Navigator>
  );
}

function CartStackScreen() {
  return (
    <CartStack.Navigation screenOptions={{headerShown: false}}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="BuyItem" component={BuyItem} />
    </CartStack.Navigation>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Register" component={RegisterScreen} />
      <LoginStack.Screen name="User" component={UserScreen} />
      <LoginStack.Screen name="Edit" component={EditProfile} />
      <LoginStack.Screen name="Change" component={ChangePassword} />
    </LoginStack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else {
              iconName = focused ? 'person' : 'person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Cart" component={BuyItem} />
        <Tab.Screen name="Profile" component={LoginStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
