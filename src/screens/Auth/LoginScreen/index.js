import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';
import TitleText from '../../../component/TitleText';
import Headertext from '../../../component/Headertext';
import CustomButton from '../../../component/Button';
import StaticBar from '../../../component/StatusBar';
import DeviceInfo from 'react-native-device-info';
//import messaging from '@react-native-firebase/messaging';
import Header from '../../../component/LoginHeader';
import LoginHeader from '../../../component/LoginHeader2';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
let pusToken = null;
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCheckBox: '',
      Username: '',
      Password: '',
      url: '',
      btn: '',
      msg: '',
      isVisible: false,
      msg_text: '',
      button_text: '',
      Wrong: '',
      spinner: false,
      token: '',
    };
    this.keepmevalue();
    // this.loadToken();
  }
  async componentDidMount() {
    // await messaging().registerDeviceForRemoteMessages();
    // pusToken = await messaging().getToken();
  }

  keepmevalue = async () => {
    let Username = await AsyncStorage.getItem(storage.rememberUserName);
    let Pass = await AsyncStorage.getItem(storage.rememberuserpass);
    let Token = await AsyncStorage.getItem('Token');
    this.setState({
      Username: Username,
      Password: Pass,
      token: Token,
    });
  };
  keepme = async newValue => {
    this.setState({
      toggleCheckBox: newValue,
    });
  };
  dolink = async () => {
    await Linking.openURL('https://staincarepro.com/register/');
    // this.setState({
    //   isVisible: false
    // })
  };

  loginbtn = async () => {
    const {Username, Password} = this.state;
    const device_type = Platform.OS == 'android' ? 'Android' : 'Ios';
    const device_id = DeviceInfo.getDeviceId();
    const fcm_token = pusToken;
    this.setState({
      spinner: true,
    });
    const data = new FormData();
    data.append('username', Username);
    data.append('password', Password);
    data.append('device_id', device_id);
    data.append('fcm_token', fcm_token);
    data.append('device_type', device_type);
    const headers = {
      'content-type': 'multipart/form-data',
      Accept: 'multipart/form-data',
    };
    Axios.post('https://staincarepro.com/wp-json/wp/v1/user/login', data, {
      headers,
    })
      .then(async p => {
        console.log(p.data);
        const formatRes = await JSON.parse(p.data);
        if (formatRes.status == 'true') {
          console.log("Venom",formatRes)
          if (formatRes.url == '') {
            await AsyncStorage.setItem(storage.Email, formatRes.email);
            await AsyncStorage.setItem(storage.Name, formatRes.name);
            await AsyncStorage.setItem(
              storage.UserId,
              JSON.stringify(formatRes.user_id),
            );
            // console.log('dhjkfbdbhdbhdbc' + formatRes.lastname);
            await AsyncStorage.setItem(storage.Lastname, formatRes.lastname);
            await AsyncStorage.setItem(storage.Username, formatRes.username);
            this.setState({
              spinner: false,
            });
            Toast.show(formatRes.message);
            this.props.navigation.replace('Home');
          } else {
            await AsyncStorage.setItem(storage.Url, formatRes.url);

            this.setState({
              isVisible: true,
              msg_text: formatRes.msg_text,
              Url: formatRes.url,
              button_text: formatRes.button_text,
              spinner: false,
            });
          }
        } else {
          Toast.show(formatRes.message);
          // Toast.show('Please Enter Valid Username and Password');
          // setspinner(false)
          this.setState({
            spinner: false,
          });
        }
      })
      .catch(Error);
  };
  forgotPassLink = async () => {
    await Linking.openURL('https://staincarepro.com/forgot-password/');
  };

  doLogin = async () => {
    const {Username, Password, url, btn, msg, toggleCheckBox, isVisible} =
      this.state;
    if (Username == '') {
      Toast.show('Please Enter Username');
    } else if (Password == '') {
      Toast.show('Please Enter Password');
    } else {
      if (this.state.toggleCheckBox == true) {
        await AsyncStorage.setItem(storage.rememberUserName, Username);
        await AsyncStorage.setItem(storage.rememberuserpass, Password);

        this.loginbtn();
      } else {
        this.setState({
          Username: Username,
          Password: Password,
        });
        this.loginbtn();
      }
    }
  };

  render() {
    const {Username, Password, url, btn, msg, toggleCheckBox, isVisible} =
      this.state;
    const {SubscribeDetails} = this.props;
    return (
      <SafeAreaView style={styles.MainView}>
        {/* <Header /> */}
        <LoginHeader />
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{color: 'white'}}
        />
        <ImageBackground
          style={styles.MainView}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.SecondView}>
              <Headertext
                title={'Fred Hueston’s'}
                color={'#000'}
                fontSize={hp('2%')}
              />

              <View
                style={{
                  height: hp('10%'),
                  width: wp('45%'),
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Image
                  style={styles.logo}
                  resizeMode="contain"
                  source={require('../../../assets/Images/stain.png')}
                />
              </View>
              <View
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Image
                  style={styles.logo1}
                  source={require('../../../assets/Images/stain_text.png')}
                />
              </View>
              <View style={{marginTop: hp('1.5%')}}>
                <View style={{width: '80%', alignSelf: 'center'}}>
                  <Text
                    style={{
                      fontSize: hp('1.8%'),
                      fontWeight: 'bold',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                    }}>
                    For Stone, Concrete and Other Hard Porous Surfaces
                  </Text>
                </View>
                {/* <View
                  style={{
                    width: wp('100%'),
                    alignSelf: 'center',
                    marginTop: hp('1%'),
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('1.6%'),
                    }}>
                    For Stone, Concrete and Other Hard Porous Surfaces
                  </Text>
                </View> */}
              </View>
              <View style={{marginTop: hp('2%')}}>
                <Headertext
                  title={'Login'}
                  color={'#9E3B22'}
                  fontSize={hp('2%')}
                />
              </View>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder=" Username (Email Id)"
                value={Username}
                placeholderTextColor={colors.textGrey}
                onChangeText={text =>
                  this.setState({
                    Username: text,
                  })
                }
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textInput}
                value={Password}
                placeholder="Password"
                placeholderTextColor={colors.textGrey}
                secureTextEntry={true}
                onChangeText={p =>
                  this.setState({
                    Password: p,
                  })
                }
              />
            </View>
            <View style={styles.ViewMiddle}>
              <Text
                onPress={this.forgotPassLink}
                style={[
                  styles.checkbox,
                  {color: '#0058FF', alignSelf: 'center', fontSize: hp('1.5%')},
                ]}>
                Forgot password? Go to web app to reset.
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View
                style={{height: hp('2.5%'), width: wp('5%'), marginRight: 15}}>
                <CheckBox
                  style={{height: '100%', width: '100%'}}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => this.keepme(newValue)}
                  boxType="square"
                  onFillColor="orange"
                />
              </View>
              <Text style={styles.checkbox}>Keep me logged in</Text>
            </View>

            <CustomButton title="Login" onPress={this.doLogin} />
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <View style={styles.logoContainer1}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%', marginTop: '6%'}}
                  source={require('../../../assets/Images/stainnew.png')}
                />
              </View>
            </View>
            <Modal
              isVisible={this.state.isVisible}
              onSwipeComplete={() =>
                this.setState({
                  isVisible: false,
                })
              }
              swipeDirection="right"
              onBackdropPress={() =>
                this.setState({
                  isVisible: false,
                })
              }>
              <View style={styles.modal}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignItems: 'center',
                  }}>
                  Subscribe Alert
                </Text>
                <View style={styles.ModelmsgView}>
                  <Text style={styles.ModelMsgText}>{this.state.msg_text}</Text>
                </View>

                <TouchableOpacity style={styles.popup} onPress={this.dolink}>
                  <Text style={styles.ModelBtntext}>
                    {this.state.button_text}
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </ScrollView>
        </ImageBackground>
        <StaticBar />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    UserDetails: state.UserDetails,
    SubscribeDetails: state.GetSubscribeDetails,
  };
};
export default connect(mapStateToProps)(LoginScreen);
