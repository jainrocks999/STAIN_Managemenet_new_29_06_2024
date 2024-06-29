import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import TitleText from '../../../component/Headertext';
import HTMLView from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';
import {WebView} from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Resources = () => {
  const navigation = useNavigation();
  const StainPagesDetails = useSelector((state) => state.StainPagesDetails);
  const [Button, setButton] = useState('');
  const [contents, setContent] = useState('');
  let WebViewRef;
  useEffect(() => {
    const selectedName = StainPagesDetails.map((element) => {
      if (element.id == '10') {
        // console.log('uuuuuuuuu', element.name);
        // setContent(element.content);
        setButton(element.name);
        WebViewRef && WebViewRef.reload();
      }
    });
  });
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.goBack()}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <View style={styles.scroll}>
          <View style={styles.subHeadingView}>
            <TitleText
              title={Button.toUpperCase()}
              color={'#9E3B22'}
              fontSize={hp('3%')}
            />
            <WebView
              style={{marginTop: hp('1%')}}
              startInLoadingState={true}
              ref={(WEBVIEW_REF) => (WebViewRef = WEBVIEW_REF)}
              source={{
                uri: 'https://staincarepro.com/stain-app-page/?uid=10',
              }}
            />
          </View>
        </View>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default connect()(Resources);
