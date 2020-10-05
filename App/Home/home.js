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
import {Colors} from 'react-native/Libraries/NewAppScreen';
const DATA = [
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
const Home: () => React$Node = () => {
  const renderItem = ({item, index}) => (
    <View onPress={() => navigation.navigate('Details')} style={styles.item}>
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
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.viewTop}>
          <Image
            source={require('../Images/logo_cf.png')}
            style={styles.image}
          />
          <Text>avatar</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
          />
        </View>
        <View
          style={{
            marginTop: 8,
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/iceblend.png')} />
            <Text style={styles.textMenu}>Ice Blend</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/smoothie.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image source={require('../Images/coffee-cup.png')} />
            <Text style={styles.textMenu}>Coffee</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  item: {
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
  image: {
    resizeMode: 'stretch',
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
export default Home;
