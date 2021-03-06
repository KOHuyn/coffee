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
  Alert,
} from 'react-native';
import {AsyncStorage} from 'react-native';
import Domain from '../Api/domain';
import {Component} from 'react';
// import {StackNavigator} from 'react-navigation';
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.mainBody}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{marginTop: 100}}>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../Images/99coffee.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  value={this.state.username}
                  onChangeText={(username) =>
                    this.setState({username: username})
                  }
                  placeholder="Nhập tài khoản"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  value={this.state.password}
                  underlineColorAndroid="transparent"
                  onChangeText={(password) =>
                    this.setState({password: password})
                  }
                  secureTextEntry={true}
                  placeholder="Nhập mật khẩu"
                  keyboardType="default"
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.2}
                onPress={this.test}>
                <Text style={styles.buttonTextStyle}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Register', {
                    username: this.state.username,
                  })
                }>
                <Text style={styles.registerTextStyle}>
                  Bạn chưa có tài khoản? Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.props.navigation;
    this.state = {
      username: 'sa',
      password: 'sa',
    };
    this.test = this.test.bind(this);
  }
  test = () => {
    if (this.state.username !== '') {
      if (this.state.password !== '') {
        console.log(Domain + '/user/login');
        fetch(Domain + '/user/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
        })
          .then((res) => res.json())
          .then((res1) => {
            if (res1.status === 1) {
              var username = res1.message;
              AsyncStorage.setItem('username', username);
              this.props.navigation.navigate('User');
            } else {
              alert(res1.message);
            }
          })
          .catch((err) => {
            console.log(err);
            alert('Server lỗi,vui lòng thử lại sau');
          });
      } else {
        alert('Hãy nhập mật khẩu!!');
      }
    } else {
      alert('Hãy nhập tài khoản !!');
    }
  };
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
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
  buttonTextStyle: {
    color: '#FFFFFF',
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
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  img: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
});
