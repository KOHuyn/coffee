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
  Modal,
} from 'react-native';
import Domain from '../Api/domain';
// import * as moment from 'moment';

const Cart: () => React$Node = () => {
  const [dataCart, setDataCart] = useState([]);
  const [refreshing, setRefresh] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [dataBill, setDataBill] = useState([]);

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

  const ItemFoodDrink = (item, index) => {
    console.log(item);
    return (
      <View
        style={{
          marginBottom: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
          backgroundColor: '#F2F2F2',
        }}>
        <Text>{item.item.name}</Text>
        <Text>{item.item.nameSize}</Text>
        <Text>{item.item.price}đ</Text>
      </View>
    );
  };

  const ConfirmPostDetail = () => {
    return (
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        transparent={true}
        visible={isShowModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 10,
              borderRadius: 8,
              padding: 12,
              margin: 30,
            }}>
            <FlatList renderItem={ItemFoodDrink} data={dataBill} />
            <Text
              style={{
                padding: 8,
                backgroundColor: '#78A1FF',
                borderRadius: 10,
                color: 'white',
                textAlign: 'center',
              }}
              onPress={() => setShowModal(false)}>
              Đóng
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  const getDetailItem = (id) => {
    fetch(Domain + '/infoDetailcart/' + id)
      .then((response) => response.json())
      .then((json) => setDataBill(json.data))
      .then(() => setShowModal(true));
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
        }}
        onPress={() => getDetailItem(item.id)}>
        <Text style={{color: 'white'}}>
          {/*{moment.utc(item.dateBill).local().format('DD/MM/YYYY')}*/}
          {item.dateBill.toString().substring(0, 10)}
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
        Đơn hàng đã mua
      </Text>
      <SafeAreaView />
      <ConfirmPostDetail />
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
