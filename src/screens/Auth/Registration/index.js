import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler,
  ScrollView,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../component/loader';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../../../component/storage';
import TitleText from '../../../component/TitleText';
import CustomButton from '../../../component/Button';

const Registration = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);

  useEffect(() => {});

  const doRegister = async () => {
    if (Email == '') {
      Toast.show('Please Enter Email');
      // } else if (Email == '') {
      //   Toast.show('Please Enter Email');
    } else if (Password == '') {
      Toast.show('Please Enter Password');
    } else if (Name == '') {
      Toast.show('Please Enter Name');
    } else if (LastName == '') {
      Toast.show('Please Enter LastName');
    } else {
      dispatch({
        type: 'User_Register_Request',
        url: 'v1/user/register',
        Username,
        Email,
        Password,
        Name,
        LastName,
        props: navigation,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../../assets/Images/logo.png')}
              />
            </View>
            <View style={styles.logoContainer}>
              <TitleText
                title={'Sign Up'.toUpperCase()}
                color={'#9E3B22'}
                fontSize={22}
              />
            </View>

            <View style={styles.textInputContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                  style={[{width: '49%'}, styles.textInput]}
                  placeholder=" First Name"
                  placeholderTextColor={colors.textGrey}
                  onChangeText={text => setName(text)}
                />

                <TextInput
                  style={[{width: '49%'}, styles.textInput]}
                  placeholder=" Last Name"
                  placeholderTextColor={colors.textGrey}
                  onChangeText={p => setLastName(p)}
                />
              </View>

              {/* <TextInput
                style={styles.textInput}
                placeholder=" Username"
                placeholderTextColor={colors.textGrey}
                onChangeText={(text) => setUsername(text)}
              /> */}
              <TextInput
                style={styles.textInput}
                placeholder=" Email"
                placeholderTextColor={colors.textGrey}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor={colors.textGrey}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />

              <CustomButton title="REGISTER" onPress={doRegister} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default Registration;
