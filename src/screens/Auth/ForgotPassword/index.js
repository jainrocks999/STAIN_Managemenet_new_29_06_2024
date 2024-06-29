import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  TextInput,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import Loader from '../../../component/loader';
import {useDispatch, useSelector} from 'react-redux';
import TitleText from '../../../component/TitleText';
import TitleText1 from '../../../component/Headertext';
import Headertext from '../../../component/Headertext';

import CustomButton from '../../../component/Button';
import StatusBar from '../../../component/StatusBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);

  const loadData = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '') {
      Toast.show('Please enter Email');
    } else if (reg.test(email) === false) {
      Toast.show('Email is Not Correct');
    } else {
      dispatch({
        type: 'User_Forgot_Password_Request',
        url: 'v1/user/forgot_password?',
        email: email,
      });
    }
  };

  // https://staincarepro.com/wp-json/wp/v1/user/forgot_password?
  // //email=akhilesh.kforebear@gmail.com
  return (
    // <View style={styles.imageBackground}>
    //   <CustomHeader />
    //   {isFetching ? <Loader /> : null}
    //   <ImageBackground
    //     style={styles.imageBackground}
    //     source={require('../../../assets/Images/AppBackground.jpg')}>
    //     <ScrollView
    //       contentContainerStyle={styles.scroll}>
    //       <View style={styles.logoContainer1}>
    //         <Image
    //           source={require('../../../assets/Images/logo.png')}
    //         />

    //         <TitleText title={'Forgot Password'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
    //         </View>
    //       <View style={styles.textInputContainer}>
    //         <TextInput
    //           style={styles.textInput}
    //           value={email}
    //           placeholder="Enter Email"
    //           placeholderTextColor={colors.textGrey}
    //           onChangeText={(text) => setEmail(text)}
    //         />
    //       </View>

    //       <CustomButton title='SEND' onPress={loadData} />
    //     </ScrollView>
    //   </ImageBackground>
    //   <StatusBar/>
    // </View>
    <View style={styles.MainView}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* <View
            style={styles.SecondView}>
            <TitleText title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/stain.png')}
            />

            <TitleText title={'STAIN CARE PRO'.toUpperCase()} color={'#9E3B22'} fontSize={26} />
              <TitleText title={'Interactive Stain App For Hard Porous Surfaces.'} color={'#000'} fontSize={14} />
        
            <TitleText1 title={'Forgot Password'.toUpperCase()} color={'#9E3B22'} fontSize={20} />
          
          </View>   */}
          <View style={styles.SecondView}>
            <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/stain.png')}
            />
            <View
              style={{
                height: 30,
                width: 345,
                marginTop: 10,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={styles.logo1}
                resizeMode="contain"
                source={require('../../../assets/Images/stain_text.png')}
              />
            </View>

            <View style={{marginTop: 10}}>
              <View style={{width: '80%', alignSelf: 'center', marginTop: 5}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 22,
                  }}>
                  THE ULTIMATE GUIDE TO PROFESSIONAL STAIN MANAGEMENT
                </Text>
              </View>
              <View style={{width: wp('100%'), marginTop: 5}}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  For Stone, Concrete and Other Hard Porous Surfaces
                </Text>
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Headertext
                title={'Forgot Password'}
                color={'#9E3B22'}
                fontSize={18}
              />
            </View>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Enter Email"
              placeholderTextColor={colors.textGrey}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <CustomButton title="SEND" onPress={loadData} />

          {/* <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/Images/logo.png')}
            />
          </View> */}
          <View style={styles.logoContainer1}>
            <Image
              style={{height: '100%', width: '100%', marginTop: '6%'}}
              source={require('../../../assets/Images/stainnew.png')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar />
    </View>
  );
};

export default ForgotPassword;
