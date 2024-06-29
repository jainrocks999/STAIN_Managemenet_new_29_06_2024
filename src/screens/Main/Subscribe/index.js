import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';

const SubScribeDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [contents, setContent] = useState();
  const selector = useSelector(state => state.GetSubscribeDetails);
  const isFetching = useSelector(state => state.isFetching);
  const [userId, setuserId] = useState('');
  //console.log('jjjjjjjjjjjj'+JSON.stringify(selector))
  const [button, setButton] = useState(null);
  const [chart, setChart] = useState(false);
  useEffect(() => {
    subscription();
  }, []);

  const subscription = async () => {
    let UserId = await AsyncStorage.getItem(storage.UserId);

    setuserId(UserId);
    dispatch({
      type: 'User_SubScribeDetails_Request',
      url: `v1/user/get_subscribe_detail?user_id=${UserId}`,
    });
  };

  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => this.props.navigation.goBack()}
        goToNotification={() => this.props.navigation.navigate('Notifications')}
      />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText
            title={'Subscription Details'.toUpperCase()}
            color={'#9E3B22'}
            fontSize={22}
          />

          <View style={{flex: 0.6, justifyContent: 'center'}}>
            <View style={styles.settingsContainer}>
              <View>
                <TouchableOpacity style={styles.settingsItems}>
                  <Text style={styles.settingsItemsText}>
                    {' '}
                    {'Start Date :'}
                  </Text>
                  {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                  <Text style={styles.settingsItemsText}>
                    {selector.purchase_date}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.settingsItems}>
                  <Text style={styles.settingsItemsText}> {'End Date :'}</Text>
                  {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                  <Text style={styles.settingsItemsText}>
                    {selector.exp_date}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.settingsItems}>
                  <Text style={styles.settingsItemsText}> {'Amount :'}</Text>
                  {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                  <Text style={styles.settingsItemsText}>
                    {selector.amount}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.settingsItems}>
                  <Text style={styles.settingsItemsText}>
                    {'Payment Mode :'}
                  </Text>

                  <Text style={styles.settingsItemsText}>
                    {selector.payment_mode}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SubScribeDetails;
