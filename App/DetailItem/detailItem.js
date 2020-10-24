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
import LoginScreen from '../Login/LoginScreen';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

const DetailItem: () => React$Node = () => {
  return (
    <ScrollableTabView initialPage={3} renderTabBar={() => <DefaultTabBar />}>
      <Text tabLabel="Coffee">My</Text>
      <Text tabLabel="Ice blend">favorite</Text>
      <Text tabLabel="Smoothies">project</Text>
      <Text tabLabel="Special">project</Text>
      <Text tabLabel="Food">project</Text>
    </ScrollableTabView>
  );
};
export default DetailItem;
