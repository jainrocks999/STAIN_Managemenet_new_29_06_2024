import React, {useEffect, useState} from 'react';
import {
  Button,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import TitleText from '../../../component/Headertext';
import HTMLView from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';
import WebView from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AboutTheApp = () => {
  const navigation = useNavigation();
  const StainPagesDetails = useSelector((state) => state.StainPagesDetails);
  const [androidVersion, setAndroidVersion] = useState('');
  const [iosVersion, setIosVersion] = useState('');
  const [chart, setChart] = useState(false);
  const [Button, setButton] = useState('');
  const [contents, setContent] = useState('');

  useEffect(() => {
    const selectedName = StainPagesDetails.map((element) => {
      if (element.id == '9') {
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
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText title={Button} color={'#9E3B22'} fontSize={hp('3%')} />
          <WebView
            style={{marginTop: hp('1%')}}
            startInLoadingState={true}
            source={{
              uri: 'https://staincarepro.com/stain-app-page/?uid=9',
            }}
          />
        </ScrollView>

        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default connect()(AboutTheApp);
