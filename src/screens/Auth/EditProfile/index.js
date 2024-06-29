import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/MainHeader';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import CustomButton from '../../../component/Button';
import TextValue from '../../../component/StaticText';
import BottomTab from '../../../component/BottomTab';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      username: '',
      name: '',
      lastname: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  }
  componentDidMount = async () => {
    let userId = await AsyncStorage.getItem(storage.UserId);
    this.props.dispatch({
      type: 'User_Get_Edit_Profile_Request',
      url: `v1/user/get_edit_profile?user_id=${userId}`,
    });
    // this.props.dispatch({
    //   type: 'User_SubScribeDetails_Request',
    //   url: `v1/user/get_subscribe_detail?user_id=${userId}`,
    // });
    let username = await AsyncStorage.getItem(storage.Username);
    let email = await AsyncStorage.getItem(storage.Email);
    let name = await AsyncStorage.getItem(storage.Name);
    let lastname = await AsyncStorage.getItem(storage.Lastname);
    //console.log('ename', lastname)
    this.setState({
      username: username,
      email: email,
      name: name,
      lastname: lastname,
      userId: userId,
    });
  };

  loadData = async () => {
    const {userId, username, email, name, lastname} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username == '') {
      Toast.show('Please Enter Username');
    } else if (name == '') {
      Toast.show('Please Enter Name');
    } else if (lastname == '') {
      Toast.show('Please Enter Lastname');
    } else if (email == '') {
      Toast.show('Please enter valid email');
    } else
      this.props.dispatch({
        type: 'User_Edit_Profile_Request',
        url: 'v1/user/edit_profile',
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        userId: userId,
      });
  };

  ChangePassword = async () => {
    const {userId, oldPassword, newPassword, confirmPassword, lastname} =
      this.state;
    if (oldPassword == '') {
      Toast.show('Please enter old password');
    } else if (newPassword == '') {
      Toast.show('Please enter  new Password');
    } else if (confirmPassword == '') {
      Toast.show('Please Confirm Password');
    } else {
      this.props.dispatch({
        type: 'User_Change_Password_Request',
        url: 'v1/user/change_password?',
        Old: oldPassword,
        New: newPassword,
        Id: userId,
      });
    }
  };

  render() {
    const {username, email, name, lastname} = this.state;

    const {isFetching, GetSubscribeDetails, getEditDetails} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          goBack={() => this.props.navigation.goBack()}
          goToNotification={() =>
            this.props.navigation.navigate('Notifications')
          }
        />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <TitleText
            title={'Account Management'.toUpperCase()}
            color={'#9E3B22'}
            fontSize={22}
          />

          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 20,
              //paddingBottom: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 10,
                  borderRadius: 10,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#9E3B22',
                  alignItems: 'center',
                }}>
                <Text style={styles.SignIn}>Edit Your Profile</Text>

                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    value={name}
                    placeholderTextColor={colors.textGrey}
                    onChangeText={text =>
                      this.setState({
                        name: text,
                      })
                    }
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    value={lastname}
                    placeholderTextColor={colors.textGrey}
                    onChangeText={text => this.setState({lastname: text})}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor={colors.textGrey}
                    value={getEditDetails.email}
                    editable={false}
                  />
                </View>

                <CustomButton title="Update" onPress={this.loadData} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#9E3B22',
                  alignItems: 'center',
                }}>
                <TitleText
                  title={'Subscription Details'}
                  color={'#9E3B22'}
                  fontSize={22}
                />

                <View style={styles.textInputContainer}>
                  <View style={styles.settingsItems}>
                    <Text style={styles.settingsItemsText}>
                      {' '}
                      {'Start Date :'}
                    </Text>
                    {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                    <Text style={styles.settingsItemsText}>
                      {GetSubscribeDetails.purchase_date}
                    </Text>
                  </View>

                  <View style={styles.settingsItems}>
                    <Text style={styles.settingsItemsText}>
                      {' '}
                      {'End Date :'}
                    </Text>
                    {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                    <Text style={styles.settingsItemsText}>
                      {GetSubscribeDetails.exp_date}
                    </Text>
                  </View>

                  <View style={styles.settingsItems}>
                    <Text style={styles.settingsItemsText}> {'Amount :'}</Text>
                    {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
                    <Text style={styles.settingsItemsText}>
                      {GetSubscribeDetails.amount}
                    </Text>
                  </View>

                  <View style={styles.settingsItems}>
                    <Text style={styles.settingsItemsText}>
                      {'Payment Mode :'}
                    </Text>

                    <Text style={styles.settingsItemsText}>
                      {GetSubscribeDetails.payment_mode}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#9E3B22',
                  alignItems: 'center',
                }}>
                <Text style={styles.SignIn}>{TextValue.ChangePassword}</Text>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.oldPassword}
                    placeholder={TextValue.PlaceholderOldpwd}
                    placeholderTextColor={colors.textGrey}
                    // secureTextEntry={true}
                    onChangeText={text =>
                      this.setState({
                        oldPassword: text,
                      })
                    }
                  />

                  <TextInput
                    value={this.state.newPassword}
                    style={styles.textInput}
                    placeholder={TextValue.PlaceholderNewpwd}
                    placeholderTextColor={colors.textGrey}
                    //secureTextEntry={true}
                    onChangeText={text =>
                      this.setState({
                        newPassword: text,
                      })
                    }
                  />
                  <TextInput
                    value={this.state.confirmPassword}
                    style={styles.textInput}
                    placeholder={TextValue.PlaceholderConpwd}
                    placeholderTextColor={colors.textGrey}
                    //secureTextEntry={true}
                    onChangeText={text =>
                      this.setState({
                        confirmPassword: text,
                      })
                    }
                  />
                </View>

                <CustomButton
                  title={TextValue.BtnSEND}
                  onPress={this.ChangePassword}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        <StatusBar
          backgroundColor={colors.darkOrange}
          barStyle="light-content"
        />
        <BottomTab />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    GetSubscribeDetails: state.GetSubscribeDetails,
    getEditDetails: state.getEditDetails,
  };
};
export default connect(mapStateToProps)(EditProfile);
