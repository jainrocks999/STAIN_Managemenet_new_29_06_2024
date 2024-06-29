import React, {useEffect, useState} from 'react';
import {ImageBackground, View, ScrollView, Dimensions} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import HTML from 'react-native-render-html';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import WebView from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HowTo = ({route}) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState('');
  const [Button, setButton] = useState('');
  const selector = useSelector((state) => state.StainPagesDetails);
  const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {
    const selectedName = selector.map((element) => {
      if (element.id == '3') {
        setButton(element.name);
        setContent(element.mobile_content);
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
          // showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <TitleText
            title={Button.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <WebView
            style={{marginTop: hp('1%')}}
            startInLoadingState={true}
            source={{uri: 'https://staincarepro.com/stain-app-page/?uid=3'}}
          />
          {/* <HTML html={contents} imagesMaxWidth={wp('100%')} /> */}
        </ScrollView>
      </ImageBackground>
      <StatusBar />
      <BottomTab />
    </View>
  );
};

export default HowTo;
