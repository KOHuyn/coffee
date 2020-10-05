import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import DetailItem from '../DetailItem/detailItem';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Mua hàng') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Mua hàng" component={DetailItem} />
      <Tab.Screen name="Hồ sơ" component={Home} />
    </Tab.Navigator>
  );
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tabs" component={Tabs} />
        <Stack.Screen name="Details" component={DetailItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
