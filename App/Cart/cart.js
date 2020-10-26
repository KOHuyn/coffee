import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import moment from 'moment';
import Domain from '../Api/domain';

const Cart: () => React$Node = () => {
  const [dataCart, setDataCart] = useState([]);
  const [refreshing, setRefresh] = useState(false);
  useEffect(() => {
    fetch(Domain + '/infoIdcart/2')
      .then((response) => response.json())
      .then((json) => setDataCart(json.data));
  }, []);

  const swipeOnRefresh = () => {
    setRefresh(true);
    fetch(Domain + '/infoIdcart/2')
      .then((response) => response.json())
      .then((json) => setDataCart(json.data))
      .then(() => setRefresh(false));
  };

  const ItemBill = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
          backgroundColor: '#78A1FF',
          marginTop: 8,
          elevation: 2,
        }}>
        <Text style={{color: 'white'}}>
          {moment.utc(item.dateBill).local().format('DD/MM/YYYY')}
        </Text>
        <Text style={{color: 'white'}}>{item.price}đ</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          padding: 8,
          backgroundColor: '#DDECEC',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Sản phẩm đã mua
      </Text>
      <SafeAreaView />
      <FlatList
        data={dataCart}
        renderItem={ItemBill}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={swipeOnRefresh} />
        }
      />
    </View>
  );
};
export default Cart;
