import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
const DATA_BILL = [
    {
        name:'',
        date:'2020/09/10',
        count:3
    }
]
const Cart: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <FlatList
      data={} />
    </View>
  );
};
export default Cart;
