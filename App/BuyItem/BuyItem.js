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
  TouchableOpacity,
} from 'react-native';
import Domain from '../Api/domain';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BuyItem({route, navigation}) {
  const {listOrder} = route.params;
  const [priceTotal, setPriceTotal] = useState(0);
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
              Size: {item.item.id_size}
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
    for (i = 0; i < list.length - 1; i++) {
      price += list[i].item.price;
    }
    return price;
  }

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
          <Text style={styles.text12}>{priceTotal}đ</Text>
        </View>
        <View style={[styles.horizontalItem, {marginTop: 8}]}>
          <Text style={styles.text12}>Phí giao hàng</Text>
          <Text style={styles.text12}>1$</Text>
        </View>
        <View style={[styles.horizontalItem, {marginTop: 8}]}>
          <Text style={styles.text12}>Thành tiền:</Text>
          <Text style={styles.text12}>3$</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#F2F2F2'}}>
        <Text />
      </View>
      <TouchableOpacity style={{backgroundColor: '#F27F7F', padding: 16}}>
        <Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>
          Mua ngay
        </Text>
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
