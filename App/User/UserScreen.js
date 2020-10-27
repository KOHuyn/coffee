'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  TextInput,
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
} from 'react-native';
import {AsyncStorage} from 'react-native';
import Domain from '../Api/domain';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation;
    this.state = {
      username: '',
      password: '',
      fullName: '',
      address: '',
      phone: '',
      email: '',
    };
    this.edit = this.edit.bind(this);
  }
  componentDidMount() {
    this.loadData().done();
  }
  loadData = async () => {
    var values = await AsyncStorage.getItem('username');
    this.setState({username: values});
    var url = Domain + '/user/' + this.state.username;
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        this.setState({
          password: res1.password,
          phone: res1.phone,
          fullName: res1.fullname,
          address: res1.adress,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  edit = () => {
    this.props.navigation.navigate('Edit');
  };
  change = () => {
    this.props.navigation.navigate('Change');
  };
  render() {
    console.log(this.props);
    return (
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Images/bgCoffee.jpg')}>
        <Text style={{fontSize: 20, color: 'white',backgroundColor:'#484848',padding:4,borderRadius:10, fontWeight: '600',alignSelf:'center'}}>
          Xin chào: {this.state.fullName}
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            borderRadius: 20,
            padding: 16,
            margin: 16,
          }}>
          <Text style={{fontSize: 16, color: '#7E8EAA', marginTop: 0}}>
            Tên đăng nhập: {this.state.username}
          </Text>
          <Text style={{fontSize: 16, color: '#979797', marginTop: 0}}>
            Số điện thoại: {this.state.phone}
          </Text>
          <Text style={{fontSize: 16, color: '#979797', marginTop: 0}}>
            Địa chỉ: {this.state.address}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.5}
          onPress={this.edit}>
          <Text style={styles.buttonTextStyle}>Sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.5}
          onPress={this.change}>
          <Text style={styles.buttonTextStyle}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.popToTop()}>
          <Text style={styles.buttonTextStyle}>Đăng xuất</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#E1B9B1',
    borderWidth: 0,
    borderColor: '#E1B9B1',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 37,
    marginLeft: 20,
    marginBottom: 5,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  header: {
    backgroundColor: '#E1B9B1',
    height: 180,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    flex: 2,
  },
  text: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#E1B9B1',
  },
});
