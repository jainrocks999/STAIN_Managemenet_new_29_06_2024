import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, View, Dimensions} from 'react-native';
import styles from './style';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import TitleText from '../../../component/Headertext';
import HTML, { RenderHTML } from 'react-native-render-html';
import BottomTab from '../../../component/BottomTab';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SupportTwo = () => {
  const StainPagesDetails = useSelector((state) => state.StainPagesDetails);
  const selector = useSelector((state) => state.StainDetails);
  const isFetching = useSelector((state) => state.isFetching);
  const [Button, setButton] = useState('');
  const [Content, setContent] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    // setButton('About Stains'.toUpperCase());
    const selectedName = StainPagesDetails.map((element) => {
      if (element.id == '11') {
        // console.log('ggggg:', JSON.stringify(element));
        // console.log('gggggsssss:', element.name);
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
          <TitleText
            title={Button.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <View style={styles.subHeadingView}>
            {/* <HTML
              html={Content}
              imagesMaxWidth={Dimensions.get('window').width}
            /> */}
            <RenderHTML
  contentWidth={Dimensions.get('window').width}
  source={{ html: Content || '' }}
/>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomTab />
    </View>
  );
};

export default connect()(SupportTwo);
