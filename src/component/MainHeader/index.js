import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Animated,
} from 'react-native';
import Axios from 'axios';
import styles from './style';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../storage';
import Toast from 'react-native-simple-toast';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//import { connect, useDispatch, useSelector } from 'react-redux';

let arrID = [];

const CustomHeader = ({ goBack, goToNotification }) => {
  const dispatch = useDispatch();
  const [anim, setAnim] = useState(new Animated.Value(0));
  const [NotificationValue, setNotificationValue] = useState('');
  const navigation = useNavigation();
  let _menu = null;
  const notificationDetails = useSelector(state => state.NotificationDetails);
  const [notificationFisrtId, setnotificationFisrtId] = useState('');
  useEffect(() => {
    dispatch({
      type: 'User_Notification_Request',
      url: 'v1/stain/stain_notifications',
    });

    directCall();
  }, []);

  const directCall = async () => {
    let NotificationViewId = await AsyncStorage.getItem('ViewNotificationId');
    console.log('notification ID ', NotificationViewId);
    console.log(' notificationDetails ', notificationDetails[0].id);
    if (notificationDetails != '') {
      setnotificationFisrtId('');
    } else {
      setnotificationFisrtId(notificationDetails[0].id);
    }
    setNotificationValue(NotificationViewId);

    renderIcon();
  };
  console.log('notificationFisrtId ', notificationFisrtId);
  console.log('NotificationValue ', NotificationValue);
  const renderIcon = () => {
    if (NotificationValue == notificationFisrtId) {
      return (
        <Animated.View
          style={{ alignSelf: 'center', transform: [{ rotate: rotation }] }}>
          <Image
            source={require('../../assets/Icons/bell.png')}
            style={{ tintColor: '#fff', height: '100%', width: '100%' }}
            resizeMode="contain"
          />
        </Animated.View>
      );
    } else {
      return (
        <Image
          source={require('../../assets/Icons/bell.png')}
          style={{ tintColor: '#fff', height: '100%', width: '100%' }}
          resizeMode="contain"
        />
      );
    }
  };
  const setMenuRef = ref => {
    _menu = ref;
  };

  const About = () => {
    navigation.navigate('About');
    _menu.hide();
  };

  const Support = () => {
    navigation.navigate('supportTwo');
    _menu.hide();
  };
  const Logout = () => {
    // _menu.hide();
    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        { text: 'ok', onPress: () => setlog() },
      ],
      { cancelable: false },
    );
  };
  const setlog = async () => {
    try {
      // _menu.hide();
      const user_id = await AsyncStorage.getItem(storage.UserId);
      Axios.get(
        `https://staincarepro.com/wp-json/wp/v1/user/logout?user_id=${user_id}&device_id=null`,
      ).then(responce => {
        Toast.show('Logout Successful');
      });
      navigation.replace('Login');
      AsyncStorage.setItem(storage.Username, '');
      AsyncStorage.setItem(storage.Password, '');
      AsyncStorage.setItem(storage.Email, '');
      AsyncStorage.setItem(storage.Name, '');
      AsyncStorage.setItem(storage.UserId, '');
      AsyncStorage.setItem(storage.Url, '');
    } catch (error) {
      console.error(error);
    }
  };

  const showMenu = () => {
    _menu.show();
  };
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true,
          // delay: 800
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  const rotation = anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-20deg', '20deg'],
  });
  if (goBack) {
    return (
      <View style={[styles.header, { justifyContent: 'space-between' }]}>
        <TouchableOpacity style={styles.iconmain} onPress={goBack}>
          <Image
            source={require('../../assets/Icons/arrow1.png')}
            style={styles.icon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={styles.header1}>
          <TouchableOpacity
            style={{
              width: wp('8%'),
              height: hp('3.5%'),

              // height: 26,
              // width: 26,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            onPress={goToNotification}>
            {renderIcon()}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: wp('8%'),
              height: hp('4%'),
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={showMenu}>

            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="transparent"
              style={{
                width: wp('8%'),
                height: hp('3%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={showMenu}>
              <Image
                style={{ height: '100%', width: '100%' }}
                resizeMode="contain"
                source={require('../../assets/Icons/menu.png')}
              />
            </TouchableHighlight>

            <Menu
              style={{ width: wp('40%') }}
              ref={setMenuRef}
               onRequestClose={() => {
                 _menu.hide();
              }}
            >
              {/* <MenuItem style={styles.itemSeperator} onPress={Profile}>
                <Text style={{fontFamily: 'Arial'}}>My Account</Text>
              </MenuItem> */}

              <MenuItem style={styles.itemSeperator} onPress={About}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  About The App
                </Text>
              </MenuItem>

              <MenuItem style={styles.itemSeperator} onPress={Support}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  Support
                </Text>
              </MenuItem>
              <MenuItem style={styles.itemSeperator} onPress={Logout}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  Logout
                </Text>
              </MenuItem>
            </Menu>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.header, { justifyContent: 'flex-end' }]}>
        <View style={styles.header1}>
          <TouchableOpacity
            style={{
              width: wp('8%'),
              height: hp('3.5%'),
              // height: 26,
              // width: 26,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            onPress={goToNotification}>
            {renderIcon()}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: wp('8%'),
              height: hp('4%'),
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={showMenu}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="transparent"
              style={{
                width: wp('8%'),
                height: hp('3%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                showMenu()
              }}>
              <Image
                style={{ height: '100%', width: '100%', tintColor: "white" }}
                resizeMode="contain"
                source={require('../../assets/Icons/menu.png')}
              />
            </TouchableHighlight>
            <Menu
              style={{ width: wp('40%') }}
              ref={setMenuRef}
              onRequestClose={() => {
                _menu.hide();
              }}

            >



              <MenuItem style={styles.itemSeperator} onPress={About}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  About The App
                </Text>
              </MenuItem>

              <MenuItem style={styles.itemSeperator} onPress={Support}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  Support
                </Text>
              </MenuItem>
              <MenuItem style={styles.itemSeperator} onPress={Logout}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
                  Logout
                </Text>
              </MenuItem>
            </Menu>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default connect()(CustomHeader);
