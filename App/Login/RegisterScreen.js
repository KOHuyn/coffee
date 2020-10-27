'use strict';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Component} from 'react';
// import {StackNavigator, getParam} from 'react-navigation';
import Domain from '../Api/domain';

export default class RegisterScreen extends Component {
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
    this.register = this.register.bind(this);
  }
  register = () => {
    if (this.state.username !== '') {
      if (this.state.password !== '') {
        if (this.state.fullName !== '') {
          if (this.state.address !== '') {
            if (this.state.phone !== '') {
              console.log(this.state.username);
              fetch(Domain + '/user', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: this.state.username,
                  password: this.state.password,
                  address: this.state.address,
                  phone: this.state.phone,
                  fullName: this.state.fullName,
                }),
              })
                .then((res) => res.json())
                .then((res1) => {
                  console.log(res1);
                  // alert(res1.message);
                  if (res1.status === 1) {
                    alert(res1.message);
                    // this.props.navigation.popToTop();
                  } else {
                    alert(res1.message);
                  }
                })
                .catch((err) => {
                  console.log(err);
                  alert(err);
                });
            } else {
              alert('Hãy nhập số điện thoại');
            }
          } else {
            alert('Hãy nhập địa chỉ');
          }
        } else {
          alert('Hãy nhập họ tên');
        }
      } else {
        alert('Hãy nhập mât khẩu');
      }
    } else {
      alert('Hãy nhập tài khoản');
    }
  };
  render() {
    console.log(this.props.route.params);
    return (
      <View style={{flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Images/99coffee.png')}
              style={styles.img}
            />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                value={this.state.username}
                onChangeText={(username) => this.setState({username: username})}
                placeholder="Tên đăng nhập"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                value={this.state.password}
                onChangeText={(password) => this.setState({password: password})}
                placeholder="Mật khẩu"
                keyboardType="default"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                value={this.state.fullName}
                onChangeText={(fullName) => this.setState({fullName: fullName})}
                placeholder="Tên của bạn"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                value={this.state.address}
                onChangeText={(address) => this.setState({address: address})}
                placeholder="Địa chỉ"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                value={this.state.phone}
                onChangeText={(phone) => this.setState({phone: phone})}
                placeholder="Số điện thoại"
                keyboardType="numeric"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.register}>
              <Text style={styles.buttonTextStyle}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#E1B9B1',
    borderWidth: 0,
    color: 'black',
    borderColor: '#E1B9B1',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  img: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 25,
  },
});
