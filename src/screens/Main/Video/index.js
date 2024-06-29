import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/MainHeader';
import {useNavigation} from '@react-navigation/native';
import HTML from 'react-native-render-html';
//import YouTubePlayer from 'react-native-youtube-sdk';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
const Video = ({route}) => {
  const {elementdata} = route.params;
  const navigation=useNavigation()
  let videoId = elementdata.video_iframe_code.slice(30);
  useEffect(() => {});
  const play = () => {
    player.playVideo();
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
      

          <View style={{padding: 10}}>
            <Text style={styles.video_name}>{elementdata.video_name}</Text>
            <HTML
              value={elementdata.video_content}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
    </View>
  );
};

export default connect()(Video);
