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
const Cart: () => React$Node = () => {
  return (
    <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
      <ScrollView tabLabel="iOS">
        <Text>ok</Text>
      </ScrollView>
      <ScrollView tabLabel="Android">
        <Text>oki</Text>
      </ScrollView>
    </ScrollableTabView>
  );
};
export default Cart;
