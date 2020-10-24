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

const DATA_RECOMMEND = [
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
  {
    id: 2,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
  {
    id: 3,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
];
const DATA_SALE = [
  {
    id: 1,
    name: 'Phin sua da',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
  {
    id: 2,
    name: 'Cà phê bạc hà',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
  {
    id: 1,
    name: 'Phin sua da',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
  {
    id: 2,
    name: 'Cà phê bạc hà',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
  {
    id: 1,
    name: 'Phin sua da',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
  {
    id: 2,
    name: 'Cà phê bạc hà',
    Id_type: 1,
    price: 25,
    promo_price: 22,
    imgSrc:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    decription: null,
  },
];
const DATA_VOUCHER = [
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
];

function Home({navigation}) {
  const renderItemRecommend = ({item, index}) => (
    <TouchableOpacity>
      <View
        style={[
          styles.border8,
          styles.marginItem,
          {width: 150, height: 200, backgroundColor: '#DDECEC'},
        ]}>
        <Image
          style={[{flex: 1, width: 150}, styles.image]}
          source={{uri: item.img}}
        />
        <View
          style={[styles.horizontalItem, styles.borderBottom8, {padding: 8}]}>
          <Text style={styles.textBlack14}>{item.title}</Text>
          <Text style={styles.textPink14}>{item.price}</Text>
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
        source={{uri: item.img}}
      />
      <View
        style={{marginTop: 4, marginStart: 8, marginEnd: 8, marginBottom: 4}}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textBlueLight12}>{item.content}</Text>
        <TouchableOpacity>
          <Text style={styles.borderTextRed}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItemSale = ({item, index}) => (
    <View
      style={[
        styles.border8,
        styles.marginItem,
        {backgroundColor: '#7E8EAA', height: 200, flex: 0.5},
      ]}>
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
    </View>
  );
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.horizontal}>
          <Image
            source={require('../Images/logo_cf.png')}
            style={styles.image}
          />
          <Image
            source={require('../Images/profile_avatar.png')}
            style={styles.image}
          />
        </View>
        <View style={[styles.horizontal, {marginTop: 8}]}>
          <Text style={styles.title}>Đề xuất</Text>
          <TouchableOpacity>
            <Text style={styles.textLink}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA_RECOMMEND}
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
            onPress={() => navigation.navigate('Details')}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/iceblend.png')} />
            <Text style={styles.textMenu}>Ice Blend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/smoothie.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
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
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/cocktail.png')} />
            <Text style={styles.textMenu}>Special</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/cupcake.png')} />
            <Text style={styles.textMenu}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image
              style={{marginTop: 24}}
              source={require('../Images/menu.png')}
            />
            <Text style={[styles.textMenu, {marginTop: 24}]}>More</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.title, {margin: 8}]}>Ưu đãi</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA_VOUCHER}
            renderItem={renderItemVoucher}
          />
        </View>
        <Text style={[styles.title, {margin: 8}]}>Khuyến mãi</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={DATA_SALE}
            renderItem={renderItemSale}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
});
export default Home;
