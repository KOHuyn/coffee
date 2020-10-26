import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Domain from '../Api/domain';
let listOrder = [];

export default function DetailItem({route, navigation}) {
  const [title, setTitle] = useState('Coffee');
  const {keyType} = route.params;
  const [dataItem, setDataItem] = useState([]);
  const [isShowModal, setShowModal] = useState(false);
  let [idSize, setIdSize] = useState(3);
  const [item, setItem] = useState({
    title: '',
    image: '',
    price: 0,
    description: '',
  });
  useEffect(() => {
    switch (keyType) {
      case 1:
        setTitle('Cà phê');
        break;
      case 2:
        setTitle('Đá bào');
        break;
      case 3:
        setTitle('Sinh tố');
        break;
      case 4:
        setTitle('Đặc biệt');
        break;
      case 5:
        setTitle('Đồ ăn');
        break;
    }
  }, [keyType]);

  useEffect(() => {
    fetch(Domain + '/menu/' + keyType)
      .then((response) => response.json())
      .then((json) => setDataItem(json.data));
  }, [keyType]);

  const clickItem = (item) => {
    setShowModal(true);
    setItem({
      title: item.name,
      image: item.imgSrc,
      price: item.price,
      description: item.decripsion,
    });
  };
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.border8,
        styles.marginItem,
        {backgroundColor: '#7E8EAA', height: 250, flex: 0.5},
      ]}
      onPress={() => clickItem(item)}>
      <Image style={[styles.image, {flex: 1}]} source={{uri: item.imgSrc}} />
      <View style={[styles.borderBottom8]}>
        <Text
          style={[
            styles.textBlack16,
            {fontWeight: 'bold', textAlign: 'center', marginTop: 4},
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
            {item.price}$
          </Text>
          <Text style={styles.textWhite14}>{item.promo_price}$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const ShowModalItem = (props) => {
    let [countItem, setCountItem] = useState(1);
    let [priceSize, setPriceSize] = useState(0);
    let [idSize, setIdSize] = useState(3);
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
              style={idSize === 1 ? styles.checked : styles.uncheck}
              onPress={() => {
                setIdSize(1);
                setPriceSize(5000);
              }}>
              Size L | +5.000đ
            </Text>
            <Text
              style={idSize === 2 ? styles.checked : styles.uncheck}
              onPress={() => {
                setIdSize(2);
                setPriceSize(3000);
              }}>
              Size M | +3.000đ
            </Text>
            <Text
              style={idSize === 3 ? styles.checked : styles.uncheck}
              onPress={() => {
                setIdSize(3);
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
                }}
                onPress={() =>
                  addToCart({
                    id_food_drink: props.itemModal.idTitle,
                    name_food_drink: props.itemModal.title,
                    count: countItem,
                    price: countItem * (props.itemModal.price + priceSize),
                    id_size: idSize,
                  })
                }>
                {countItem * (props.itemModal.price + priceSize)}đ | Thêm
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const addToCart = (itemCart) => {
    listOrder.push(itemCart);
    setShowModal(false);
  };
  const CartBuyItemLayout = () => {
    return (
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
          navigation.navigate('BuyItem', {listOrder: listOrder});
          listOrder = [];
        }}>
        <View>
          <Ionicons name="cart-outline" size={20} color="#78A1FF" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
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
          {title}
        </Text>
        <View style={{width: 20}} />
      </View>
      <ShowModalItem itemModal={item} isShowModalItem={isShowModal} />

      <FlatList
        style={{flex: 1}}
        data={dataItem}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
      />
      {listOrder.length > 0 ? <CartBuyItemLayout /> : null}
    </View>
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
    elevation: 5,
  },
  marginItem: {
    marginTop: 8,
    marginStart: 4,
    marginEnd: 4,
    marginBottom: 8,
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
  image: {
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 8,
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
