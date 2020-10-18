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
    img: require('../Images/cfdemo.png'),
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
  {
    id: 2,
    img: require('../Images/cfdemo.png'),
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
  {
    id: 3,
    img: require('../Images/cfdemo.png'),
    title: 'First Item',
    price: '2.5$',
    star: 5,
  },
];
const DATA_VOUCHER = [
  {
    id: 1,
    img: require('../Images/cfdemo.png'),
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img: require('../Images/cfdemo.png'),
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img: require('../Images/cfdemo.png'),
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img: require('../Images/cfdemo.png'),
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
  {
    id: 1,
    img: require('../Images/cfdemo.png'),
    title: 'Ưu đãi dành riêng 8/3',
    content: '8/3 này cùng 99Coffee cảm ơn người phụ nữ tôi yêu',
  },
];

function Home({navigation}) {
  const renderItemRecommend = ({item, index}) => (
    <View style={styles.itemRecommend}>
      <View style={{height: 190, width: 180}}>
        <Image style={{height: 190, width: 180}} source={item.img} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View
          style={{
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemStar}>{item.star}</Text>
        </View>
      </View>
    </View>
  );
  const renderItemVoucher = ({item, index}) => (
    <View style={styles.itemVoucher}>
      <Image style={{flex: 1, height: 100}} source={item.img} />
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
      <View>
        <Text>Xem thêm</Text>
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
            <Text style={styles.seeMore}>Xem thêm</Text>
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
          style={{
            marginTop: 8,
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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
          style={{
            marginTop: 8,
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/cocktail.png')} />
            <Text style={styles.textMenu}>Special</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/cupcake.png')} />
            <Text style={styles.textMenu}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMenu}>
            <Image source={require('../Images/menu.png')} />
            <Text style={styles.textMenu}>More</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textMenu: {
    marginTop: 8,
    color: '#E1B9B1',
    fontSize: 14,
  },
  buttonMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDECEC',
    height: 120,
    borderRadius: 8,
    flex: 1,
    marginEnd: 4,
    marginStart: 4,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    paddingStart: 8,
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F27F7F',
  },
  itemStar: {
    fontSize: 12,
    fontWeight: '500',
    color: '#7E8EAA',
  },
  itemRecommend: {
    width: 180,
    height: 240,
    marginTop: 8,
    marginStart: 4,
    marginEnd: 4,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemVoucher: {
    width: 200,
    height: 190,
    marginTop: 8,
    marginStart: 4,
    marginEnd: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    resizeMode: 'stretch',
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
  seeMore: {
    fontSize: 10,
    color: '#78A1FF',
    textDecorationLine: 'underline',
  },
});
export default Home;
