import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import HTMLView from 'react-native-render-html';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import {WebView} from 'react-native-webview';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
let images = '';
const SupportScreen = ({route}) => {
  const navigation = useNavigation();

  const selector = useSelector((state) => state.StainDetails);
  const CaseStudy = useSelector((state) => state.CaseStudyDetails);

  const [contents, setContent] = useState('');
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState('');
  //console.log('caseStudy:::', CaseStudy);
  let buttonName = 'Case Studies';

  useEffect(() => {
    setButton(buttonName);
    const selectedName = selector.map((element) => {
      if (element.name == buttonName) {
        setChart(false);
        setContent(element.mobile_content);
      }
    });
  });
  const renderCaseStudies = () => {
    if (button == 'Case Studies') {
      return CaseStudy.map((element) => {
        let imageArray = [];
        images = element.images;
        imageArray.push(images);
        //console.log('yogii:', element);

        return (
          <View style={styles.MainContainer}>
            <View style={styles.cardViewStyle}>
              <View
                style={{
                  width: wp('100%'),
                  height: hp('25%'),
                }}>
                <WebView
                  style={{marginTop: hp('1%'), width: wp('100%')}}
                  startInLoadingState={true}
                  javaScriptEnabled={true}
                  scrollEnabled={false}
                  allowsFullscreenVideo={true}
                  userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                  source={{
                    uri: element.video_url,
                  }}
                />
              </View>
              <View style={{alignSelf: 'flex-start', marginTop: hp('1%')}}>
                <Text style={styles.cardView_InsideText}>
                  {element.case_study_name}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginTop: 1,
                  marginBottom: 15,
                }}>
                <Text style={styles.cardView_InsideText1}>
                  {element.short_description}
                </Text>
              </View>
            </View>
          </View>
        );
      });
    } else return <HTMLView value={contents} />;
  };

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={styles.headerFooterStyle}>
        <TitleText
          title={buttonName.toUpperCase()}
          color={'#9E3B22'}
          fontSize={hp('3%')}
        />
      </View>
    );
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.navigate('Home')}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <View style={styles.scroll}>
          <TitleText
            title={buttonName.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          {/* {renderCaseStudies()} */}

          <FlatList
            data={CaseStudy}
            keyExtractor={(item) => item.id}
            // extraData={() => (
            //   <View>
            //     <Text>hi</Text>
            //   </View>
            // )}

            // ListHeaderComponent={ListHeader}
            renderItem={({item}) => (
              <View style={styles.MainContainer}>
                <View style={styles.cardViewStyle}>
                  <View
                    style={{
                      width: '100%',
                      height: hp('25%'),
                      paddingHorizontal: wp('2%'),
                    }}>
                    <WebView
                      style={{
                        marginTop: hp('1%'),
                        width: '100%',
                      }}
                      startInLoadingState={true}
                      javaScriptEnabled={true}
                      scrollEnabled={false}
                      allowsFullscreenVideo={true}
                      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
   (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                      source={{
                        uri: item.video_url,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      paddingHorizontal: wp('2%'),
                      marginTop: hp('1%'),
                    }}>
                    <Text style={styles.cardView_InsideText}>
                      {item.case_study_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginLeft: wp('2%'),
                      marginBottom: 15,
                    }}>
                    <Text style={styles.cardView_InsideText1}>
                      {item.short_description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
      <StatusBar />
      <BottomTab />
    </View>
  );
};

export default SupportScreen;
