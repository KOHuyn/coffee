import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Modal,
  Text,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Domain from '../Api/domain';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BuyItem({route, navigation}) {
  const {listOrder} = route.params;
  const [isShowModal, setShowModal] = useState(false);
  const [idBill, setIdBill] = useState(0);
  const [isLoading, setShowLoading] = useState(false);

  function setNameSize(idSize) {
    var name = '';
    if (idSize === 1) {
      name = 'L';
    } else if (idSize === 2) {
      name = 'M';
    } else {
      name = 'S';
    }
    return name;
  }

  const ItemCart = (item, index) => {
    return (
      <View style={[styles.horizontalItem, {marginTop: 4}]}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              borderColor: '#979797',
              borderWidth: 1,
              paddingStart: 8,
              paddingEnd: 8,
              paddingTop: 4,
              fontSize: 16,
              paddingBottom: 4,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            {item.item.count}
          </Text>
          <View style={{alignSelf: 'center', marginStart: 8}}>
            <Text style={{fontSize: 16, color: '#000000'}}>
              {item.item.name_food_drink}
            </Text>
            <Text style={{fontSize: 12, color: '#979797'}}>
              Size: {setNameSize(item.item.id_size)}
            </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            color: '#000000',
            fontSize: 14,
          }}>
          {item.item.price}đ
        </Text>
      </View>
    );
  };

  function totalMoney(list) {
    var price = 0;
    var i;
    for (i = 0; i < list.length; i++) {
      price += list[i].price;
    }
    return price;
  }

  function jsonPostDetail(list) {
    var arr = [];
    var i;
    for (i = 0; i < list.length; i++) {
      arr.push({
        id_bill: idBill,
        id_food_drink: list[i].id_food_drink,
        price: list[i].price,
        id_size: list[i].id_size,
        count: list[i].count,
      });
    }
    console.log(list);
    console.log(arr);
    return arr;
  }

  const BuyItem = () => {
    setShowLoading(true);
    fetch(Domain + '/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: totalMoney(listOrder),
        dateBill: '2020/10/28',
        id_user: 2,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setIdBill(json.data[json.data.length - 1].id);
          setShowLoading(false);
          setShowModal(true);
        } else {
          alert('Server đang bị lỗi,vui lòng liên hệ NTD');
        }
      });
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
            <Text style={{fontSize: 18, color: '#F27F7F', fontWeight: 'bold'}}>
              Xác nhận mua hàng
            </Text>
            <Text style={{fontSize: 16, color: '#7E8EAA', marginTop: 8}}>
              Bạn có chắc chắn mua hàng không?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  padding: 8,
                  backgroundColor: '#F27F7F',
                  borderRadius: 10,
                  color: 'white',
                }}
                onPress={() => setShowModal(false)}>
                Oh No
              </Text>
              <Text
                style={{
                  padding: 8,
                  backgroundColor: '#78A1FF',
                  borderRadius: 10,
                  color: 'white',
                }}
                onPress={() => postBillDetail()}>
                Yes madam
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const postBillDetail = () => {
    setShowModal(false);
    fetch(Domain + '/billDetail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonPostDetail(listOrder)),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status === 200) {
          alert(
            'Mua hàng thành công.\nBạn đợi 15p nữa shipper sẽ giao tới nhé',
          );
        } else {
          alert('Server đang bị lỗi,vui lòng liên hệ NTD');
        }
      });
  };

  return (
    <SafeAreaView>
      <View style={[styles.horizontalItem, {backgroundColor: '#DDECEC'}]}>
        <Ionicons
          style={{padding: 8}}
          name="arrow-back"
          size={20}
          backgroundColor="#000000"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={[
            styles.textTitle,
            {padding: 8, alignSelf: 'center', justifyContent: 'center'},
          ]}>
          Giỏ hàng của bạn
        </Text>
        <View style={{width: 20}} />
      </View>
      <ConfirmPostDetail />
      <View style={{backgroundColor: '#F2F2F2'}}>
        <Text style={{padding: 4}}>Thời gian nhận hàng</Text>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
        <Image
          style={{
            width: 36,
            height: 36,
            marginStart: 16,
            marginTop: 8,
            marginEnd: 16,
            marginBottom: 8,
          }}
          source={require('../Images/coffeewait.png')}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 12, color: '#979797'}}>Hẹn giờ</Text>
          <Text>Trong 15-30 phút</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#F2F2F2'}}>
        <Text style={{padding: 4}}>Chi tiết đơn hàng</Text>
      </View>
      <View style={{backgroundColor: '#FFFFFF', padding: 8}}>
        <FlatList renderItem={ItemCart} data={listOrder} />
        <View style={[styles.horizontalItem, {marginTop: 8}]}>
          <Text style={styles.text12}>Tạm tính</Text>
          <Text style={styles.text12}>{totalMoney(listOrder)}đ</Text>
        </View>
        <View style={[styles.horizontalItem, {marginTop: 8}]}>
          <Text style={styles.text12}>Phí giao hàng</Text>
          <Text style={styles.text12}>20000d</Text>
        </View>
        <View style={[styles.horizontalItem, {marginTop: 8}]}>
          <Text style={styles.text12}>Thành tiền</Text>
          <Text style={styles.text12}>{totalMoney(listOrder) + 20000}d</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#F2F2F2'}}>
        <Text />
      </View>
      <TouchableOpacity
        style={{backgroundColor: '#F27F7F', padding: 16}}
        onPress={() => {
          if (!isLoading) {
            BuyItem();
          }
        }}>
        {isLoading ? <ActivityIndicator size="small" color="#FFFFFF" /> : null}

        {!isLoading ? (
          <Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>
            Mua ngay
          </Text>
        ) : null}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  horizontalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  text12: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
});
