import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Domain from '../Api/domain';

export default function DetailItem({route, navigation}) {
  const [title, setTitle] = useState('Coffee');
  const {keyType} = route.params;
  const [dataItem, setDataItem] = useState([]);

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
    alert(item.name);
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
  return (
    <SafeAreaView style={{flex: 1}}>
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
      <FlatList
        style={{flex: 1}}
        data={dataItem}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
      />
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
});
