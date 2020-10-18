import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import DetailItem from '../DetailItem/detailItem';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
import Login from '../Login/LoginScreen';

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={DetailItem} />
    </HomeStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="login" component={Login} />
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
        <Tab.Screen name="Cart" component={LoginStackScreen} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
