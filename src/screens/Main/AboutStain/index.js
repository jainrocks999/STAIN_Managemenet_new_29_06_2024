import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import {ScrollView, Dimensions} from 'react-native';
import StatusBar from '../../../component/StatusBar';
//import HTMLView from 'react-native-htmlview';
import HTMLView from 'react-native-render-html';
//import style from './style';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import WebView from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AboutStain = ({route}) => {
  const navigation = useNavigation();
  const selector = useSelector((state) => state.StainPagesDetails);

  const isFetching = useSelector((state) => state.isFetching);
  const [Button, setButton] = useState('');
  const [contents, setContent] = useState('');

  useEffect(() => {
    const selectedName = selector.map((element) => {
      if (element.id == '1') {
        setContent(element.mobile_content);
        setButton(element.name);
      }
    });
  });

  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.goBack()}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <TitleText
            title={Button.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <WebView
            style={{marginTop: hp('1%')}}
            startInLoadingState={true}
            source={{
              uri: 'https://staincarepro.com/stain-app-page/',
            }}
          />
        </ScrollView>
      </ImageBackground>
      <StatusBar />
      <BottomTab />
    </View>
  );
};

export default AboutStain;
