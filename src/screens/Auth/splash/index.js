import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Headertext from '../../../component/Headertext';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../../../component/storage';
import StatusBar from '../../../component/StatusBar';
import {useDispatch, useSelector, connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import TitleText from '../../../component/TitleText';

import moment from 'moment';
import axios from 'axios';
import Modal from 'react-native-modal';
import Loader from '../../../component/loader';

const SplashScreen = () => {
  const navigation = useNavigation();
  const isFetching = useSelector(state => state.isFetching);
  const SubscribeDetails = useSelector(state => state.GetSubscribeDetails);
  const VersionDetails = useSelector(state => state.VersionDetails);
  const notificationDetails = useSelector(state => state.NotificationDetails);
  const [isModalVisible, setModalVisible] = useState(false);
  const [version, setVersion] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [heading, setHeading] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getstainpage();
    appVersion();
    notification();
    apiCall();
    getSubscribeDetail();
    loadData();
    loadData1();
    loadData2();
    loadData3();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    //setModalVisible(true);
  };

  const loadData = async () => {
    dispatch({
      type: 'User_Stain_Request',
      url: 'v1/stain/all',
    });
  };
  const loadData2 = async () => {
    dispatch({
      type: 'User_StainPost_Request',
      url: 'v1/stain/post',
    });
  };
  const loadData3 = async () => {
    dispatch({
      type: 'User_StainDefination_Request',
      url: 'v1/stain/definition',
    });
  };
  const getstainpage = () => {
    dispatch({
      type: 'User_StainPages_Request',
      url: 'v1/stain/stain_pages',
    });
  };
  const notification = async () => {
    dispatch({
      type: 'User_Notification_Request',
      url: 'v1/stain/stain_notifications',
    });
  };
  const loadData1 = async () => {
    dispatch({
      type: 'User_CaseStudy_Request',
      url: 'v1/stain/case_studies',
    });
  };

  const appVersion = async url => {
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://staincarepro.com/wp-json/wp/v1/app/vesion',
      });
      console.log('yogi update', response.data);

      if (Platform.OS === 'ios') {
        setHeading(response.data.message_heading);
        setMessage(response.data.ios_message);
        setUrl(response.data.ios_url);
        setVersion(response.data.ios_version);
        if (response.data.ios_version > 1) {
          toggleModal();
        } else {
          directCall();
        }
      } else {
        setHeading(response.data.message_heading);
        setMessage(response.data.android_message);
        setUrl(response.data.android_url);
        setVersion(response.data.android_version);
        if (response.data.android_version > 2) {
          toggleModal();
        } else {
          directCall();
        }
      }

      AsyncStorage.setItem(
        storage.Android_Version,
        response.data.android_version,
      );
      AsyncStorage.setItem(storage.ios_Version, response.data.ios_version);
    } catch (error) {
      throw error;
    }
  };
  const onDownloadPress = async () => {
    Linking.openURL(url);
  };
  const apiCall = async () => {
    await fetch('https://staincarepro.com/wp-json/wp/v1/app/vesion').then(res =>
      res.json(),
    );
    // .then((response) => setVersion(response));
  };
  const directCall = async () => {
    let Username = await AsyncStorage.getItem(storage.Username);
    let noti = await AsyncStorage.getItem(storage.notificationID);
    if (Username == null) {
      setTimeout(() => navigation.replace('Login'), 1000);
    } else {
      const currentDate = moment().format('MMM-DD-YYYY hh:mm:ss');
      setTimeout(() => navigation.replace('Home'), 1000);
    }
  };

  const getSubscribeDetail = async () => {
    let userId = await AsyncStorage.getItem(storage.UserId);
    dispatch({
      type: 'User_SubScribeDetails_Request',
      url: `v1/user/get_subscribe_detail?user_id=${userId}`,
    });
  };

  return (
    <View style={styles.MainView}>
      {isFetching ? <Loader /> : null}
      <View style={styles.header}></View>
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <View style={styles.SecondView}>
          <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
          <Image
            style={styles.logo}
            source={require('../../../assets/Images/stain.png')}
          />
          <View
            style={{
              marginTop: 10,
              height: 30,
              width: 390,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Image
              style={styles.logo1}
              source={require('../../../assets/Images/stain_text.png')}
            />
          </View>
          {/* 
          <View style={{marginTop: 8}}>
            <TitleText
              title={'Interactive Stain App For Hard Porous Surfaces'}
              color={'#000'}
              fontSize={13}
            />
          </View> */}
        </View>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              marginTop: '6%',
            }}
            source={require('../../../assets/Images/stainnew.png')}
          />
        </View>
      </ImageBackground>
      <StatusBar />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="right"
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {heading}
            </Text>
          </View>
          <TouchableOpacity style={styles.ModelmsgView}>
            <Text style={styles.ModelMsgText}>{message}</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <TouchableOpacity style={styles.popup} onPress={onDownloadPress}>
              <Text style={styles.ModelBtntext}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popup} onPress={directCall}>
              <Text style={styles.ModelBtntext}>Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SplashScreen;
