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
import Icon from 'react-native-vector-icons/Ionicons';

import Domain from '../Api/domain';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Home({navigation}) {
  const [isShowModal, setShowModal] = useState(false);
  const [item, setItem] = useState({
    title: '',
    image: '',
    price: 0,
    description: '',
  });
  const [refreshing, setRefreshing] = useState(false);
  const [dataRecommend, setDataRecommend] = useState([]);
  const [dataVoucher, setDataVoucher] = useState([]);
  const [dataSale, setDataSale] = useState([]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    fetch(Domain + '/proSale')
      .then((response) => response.json())
      .then((json) => setDataSale(json.data))
      .then(() => setRefreshing(false));
    fetch(Domain + '/sale')
      .then((response) => response.json())
      .then((json) => setDataVoucher(json.data))
      .then(() => setRefreshing(false));
    fetch(Domain + '/menu/7')
      .then((response) => response.json())
      .then((json) => setDataRecommend(json.data))
      .then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    fetch(Domain + '/proSale')
      .then((response) => response.json())
      .then((json) => setDataSale(json.data))
      .then(() => setRefreshing(false));
    console.log(Domain + '/proSale');
  }, []);
  useEffect(() => {
    fetch(Domain + '/sale')
      .then((response) => response.json())
      .then((json) => setDataVoucher(json.data))
      .then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    fetch(Domain + '/menu/7')
      .then((response) => response.json())
      .then((json) => setDataRecommend(json.data))
      .then(() => setRefreshing(false));
  }, []);
  const renderItemRecommend = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        setShowModal(true);
        setItem({
          title: item.name,
          image: item.imgSrc,
          price: item.price,
          description: item.decripsion,
        });
      }}>
      <View
        style={[
          styles.border8,
          styles.marginItem,
          {width: 150, height: 200, backgroundColor: '#DDECEC'},
        ]}>
        <Image
          style={[{flex: 1, width: 150}, styles.image]}
          source={{uri: item.imgSrc}}
        />
        <View style={[styles.borderBottom8, {padding: 8}]}>
          <Text style={styles.textBlack14}>{item.name}</Text>
          <Text style={styles.textPink14}>{item.price}đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItemVoucher = ({item, index}) => (
    <View
      style={[
        styles.border8,
        styles.marginItem,
        {backgroundColor: '#e9e9e9', width: 200, height: 220},
      ]}>
      <Image
        style={[styles.image, {flex: 1, width: 200}]}
        source={{uri: item.imgSrc}}
      />
      <View
        style={{marginTop: 4, marginStart: 8, marginEnd: 8, marginBottom: 4}}>
        <Text style={styles.textTitle}>{item.nameSales}</Text>
        <Text style={styles.textBlueLight12}>{item.dercipsion}</Text>
        <TouchableOpacity>
          <Text style={styles.borderTextRed}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItemSale = ({item, index}) => (
    <TouchableOpacity
      style={[styles.marginItem, {height: 200, flex: 0.5}]}
      onPress={() => {
        setShowModal(true);
        setItem({
          title: item.name,
          image: item.imgSrc,
          price: item.promo_price,
          description: item.decripsion,
        });
      }}>
      <View style={[styles.border8, {backgroundColor: '#7E8EAA', height: 200}]}>
        <Image style={[styles.image, {flex: 1}]} source={{uri: item.imgSrc}} />
        <View style={[styles.borderBottom8]}>
          <Text
            style={[
              styles.textWhite14,
              {
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 4,
              },
            ]}>
            {item.name}
          </Text>
          <View
            style={[
              styles.horizontalItem,
              {paddingStart: 8, paddingEnd: 8, paddingBottom: 8},
            ]}>
            <Text
              style={[styles.textPink14, {textDecorationLine: 'line-through'}]}>
              {item.price}đ
            </Text>
            <Text style={styles.textWhite14}>{item.promo_price}đ</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const ShowModalItem = (props) => {
    let [countItem, setCountItem] = useState(1);
    let [priceSize, setPriceSize] = useState(0);
    return (
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        transparent={true}
        visible={props.isShowModalItem}
        onRequestClose={() => {}}>
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
              margin: 30,
            }}>
            <View style={[styles.horizontalItem]}>
              <View style={{flexDirection: 'row', padding: 16}}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    elevation: 5,
                    borderRadius: 20,
                    resizeMode: 'stretch',
                  }}
                  source={{uri: props.itemModal.image}}
                />
                <View style={{marginStart: 8, alignSelf: 'center'}}>
                  <Text style={styles.textBlack14}>
                    {props.itemModal.title}
                  </Text>
                  <Text style={styles.textPink14}>
                    {props.itemModal.price}đ
                  </Text>
                </View>
              </View>
              <Text
                onPress={() => setShowModal(false)}
                style={[styles.textPink14, {padding: 8}]}>
                Đóng
              </Text>
            </View>
            <Text style={{padding: 4, backgroundColor: '#F2F2F2'}}>Size</Text>
            <Text
              style={priceSize === 5000 ? styles.checked : styles.uncheck}
              onPress={() => {
                setPriceSize(5000);
              }}>
              Size L | +5.000đ
            </Text>
            <Text
              style={priceSize === 3000 ? styles.checked : styles.uncheck}
              onPress={() => {
                setPriceSize(3000);
              }}>
              Size M | +3.000đ
            </Text>
            <Text
              style={priceSize === 0 ? styles.checked : styles.uncheck}
              onPress={() => {
                setPriceSize(0);
              }}>
              Size S
            </Text>
            <Text
              style={{
                backgroundColor: '#F2F2F2',
                padding: 4,
                paddingStart: 16,
                marginTop: 8,
              }}>
              Giới thiệu
            </Text>
            <Text style={{color: '#A1ABBC', padding: 12, fontSize: 12}}>
              {props.itemModal.description}
            </Text>
            <View style={styles.horizontalItem}>
              <View style={{flexDirection: 'row', padding: 8}}>
                <Text
                  onPress={() => {
                    if (countItem === 0) {
                      setCountItem(0);
                    } else {
                      setCountItem((countItem -= 1));
                    }
                  }}
                  style={{
                    backgroundColor: '#A5A5A5',
                    color: '#FFFFFF',
                    paddingStart: 8,
                    paddingEnd: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 30,
                  }}>
                  {' '}
                  -{' '}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginStart: 4,
                    marginEnd: 4,
                    fontSize: 20,
                  }}>
                  {' '}
                  {countItem}{' '}
                </Text>
                <Text
                  onPress={() => setCountItem((countItem += 1))}
                  style={{
                    backgroundColor: '#F27F7F',
                    color: '#FFFFFF',
                    paddingStart: 6,
                    paddingEnd: 6,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 30,
                  }}>
                  {' '}
                  +{' '}
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingStart: 30,
                  paddingEnd: 30,
                  paddingTop: 8,
                  paddingBottom: 8,
                  marginEnd: 16,
                  borderRadius: 20,
                  fontSize: 16,
                  color: '#FFFFFF',
                  backgroundColor: '#F27F7F',
                }}>
                {countItem * (props.itemModal.price + priceSize)}đ
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{position: 'relative', flex: 1}}>
      <SafeAreaView />
      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignSelf: 'stretch',
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.horizontal}>
          <Image
            source={require('../Images/99coffee.png')}
            style={{
              height: 50,
              width: 160,
              marginTop: 8,
              resizeMode: 'stretch',
            }}
          />
        </View>
        <ShowModalItem itemModal={item} isShowModalItem={isShowModal} />
        <View style={[styles.horizontal, {marginTop: 8}]}>
          <Text style={styles.title}>Đề xuất</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataRecommend}
            renderItem={renderItemRecommend}
          />
        </View>
        <Text style={[styles.title, {margin: 8}]}>Thể loại</Text>
        <View
          style={[
            styles.horizontalItem,
            {
              marginTop: 8,
              paddingStart: 8,
              paddingEnd: 8,
            },
          ]}>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => navigation.navigate('Details', {keyType: 1})}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Cà phê</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => navigation.navigate('Details', {keyType: 2})}>
            <Image source={require('../Images/iceblend.png')} />
            <Text style={styles.textMenu}>Đá bào</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => navigation.navigate('Details', {keyType: 3})}>
            <Image source={require('../Images/smoothie.png')} />
            <Text style={styles.textMenu}>Sinh tố</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.horizontalItem,
            {
              marginTop: 8,
              paddingStart: 8,
              paddingEnd: 8,
            },
          ]}>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => navigation.navigate('Details', {keyType: 4})}>
            <Image source={require('../Images/cocktail.png')} />
            <Text style={styles.textMenu}>Đặc biệt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => navigation.navigate('Details', {keyType: 5})}>
            <Image source={require('../Images/cupcake.png')} />
            <Text style={styles.textMenu}>Đồ ăn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image
              style={{marginTop: 24}}
              source={require('../Images/menu.png')}
            />
            <Text style={[styles.textMenu, {marginTop: 24}]}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.title, {margin: 8}]}>Ưu đãi</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataVoucher}
            renderItem={renderItemVoucher}
          />
        </View>
        <Text style={[styles.title, {margin: 8}]}>Khuyến mãi</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={dataSale}
            renderItem={renderItemSale}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          elevation: 10,
          backgroundColor: '#F2F2F2',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View>
          <Ionicons name="cart-outline" size={20} color="#78A1FF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBottom8: {
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    shadowColor: '#000',
    marginBottom: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  borderTop8: {
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  border8: {
    borderRadius: 8,
    shadowColor: '#000',
    marginBottom: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
  },
  marginItem: {
    marginTop: 8,
    marginStart: 4,
    marginEnd: 4,
    marginBottom: 8,
  },
  textMenu: {
    marginTop: 8,
    color: '#E1B9B1',
    fontSize: 14,
  },
  buttonMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDECEC',
    height: 100,
    borderRadius: 8,
    flex: 1,
    marginEnd: 4,
    marginStart: 4,
    elevation: 5,
  },
  textBlack14: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  textWhite14: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  textBlack16: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  textPink14: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F27F7F',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  textBlueLight12: {
    fontSize: 12,
    fontWeight: '500',
    color: '#7E8EAA',
  },
  image: {
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  textLink: {
    fontSize: 12,
    color: '#78A1FF',
    textDecorationLine: 'underline',
  },
  borderTextRed: {
    borderRadius: 16,
    borderColor: '#9b9b9b',
    borderWidth: 1,
    padding: 4,
    color: '#F27F7F',
    marginTop: 4,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 80,
  },
  checked: {
    marginTop: 4,
    backgroundColor: '#F27F7F',
    borderRadius: 4,
    padding: 4,
    color: 'white',
  },
  uncheck: {
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    color: 'black',
    padding: 4,
    borderWidth: 1,
    borderColor: '#F27F7F',
  },
});
export default Home;
