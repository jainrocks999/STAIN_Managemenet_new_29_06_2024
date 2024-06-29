import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import {ScrollView, Dimensions} from 'react-native';
import colors from '../../../component/colors';
import StatusBar from '../../../component/StatusBar';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';

const VideoList = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Video = useSelector((state) => state.VideoDetails);
  const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    dispatch({
      type: 'User_Video_Request',
      url: 'v1/stain/video_gallery',
    });
  };

  const renderCaseStudies = () => {
    return Video.map((element) => {
      let imageArray = [];
      images = element.images;
      imageArray.push(images);
      return (
        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Video', {
                elementdata: element,
              });
            }}
            style={{margin: 5}}>
            <View
              style={styles.cardViewStyle}>
              <Image
                source={{uri: element.video_image}}
                style={styles.cardView_Image}
              />
              <View
                style={styles.textView}>
                <Text
                  style={styles.cardView_InsideText}>
                  {element.video_name}
                </Text>
                <Text style={styles.cardView_InsideText1}>
                  {element.video_caption}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };
  return (
    <View style={styles.imageBackground}>
       <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView
          contentContainerStyle={styles.scroll}>
          <TitleText title={'Videos'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          {renderCaseStudies()}
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
      <BottomTab />
    </View>
  );
};

export default VideoList;
