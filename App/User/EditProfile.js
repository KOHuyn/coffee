'use strict';
import React from 'react';
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
import {AsyncStorage} from 'react-native';
import Domain from '../Api/domain';

class EditProfile extends Component {
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
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.loadData().done();
  }
  loadData = async () => {
    var values = await AsyncStorage.getItem('username');
    var url = Domain + '/user/' + values;
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
          username: res1.username,
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

  update = () => {
    var url = Domain + '/user/' + this.state.username;
    console.log(url);
    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: this.state.password,
        adress: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
        fullName: this.state.fullName,
      }),
    })
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        if (res1.status === 1) {
          alert('Cập nhật thành công');
          this.props.navigation.navigate('User');
        } else {
          alert('Cập nhật thất bại');
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Images/99coffee.png')}
              style={styles.img}
            />
            <Text style={styles.name}>Đổi thông tin liên hệ</Text>
          </View>
          <KeyboardAvoidingView enabled>
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
              onPress={this.update}>
              <Text style={styles.buttonTextStyle}>Lưu</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
export default EditProfile;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '500',
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
