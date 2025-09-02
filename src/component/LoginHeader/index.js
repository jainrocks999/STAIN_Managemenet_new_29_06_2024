import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Animated,
  Linking,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import styles from './style';
import {connect, useSelector} from 'react-redux';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../storage';
import HTML from 'react-native-render-html';

import Modal from 'react-native-modal';
import TitleText from '../Headertext';
import colors from '../colors';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCheckBox: '',
      Username: '',
      Password: '',
      url: '',
      btn: '',
      msg: '',
      isVisible: false,
      msg_text: '',
      Wrong: '',
      spinner: false,
      token: '',
      Button: '',
      Content: '',
      isModalVisible: false,
    };

    // this.loadToken();
  }
  //const StainPagesDetails = useSelector((state) => state.StainPagesDetails);
  // const [Button, setButton] = useState('');
  // const [Content, setContent] = useState('');
  // const [anim, setAnim] = useState(new Animated.Value(0));
  // const [isVisible, setisVisible] = useState(false);
  // const [isModalVisible, setisModalVisible] = useState(false);
  _menu = null;

  async componentDidMount() {
    const {StainPagesDetails} = this.props;
    StainPagesDetails.map(element => {
      if (element.id == '14') {
        // console.log('ggyyyyggg:', JSON.stringify(element));
        // console.log('ggyyygggsssss:', element.name);
        this.setState({
          Button: element.mobile_content,
          Content: element.name,
        });
      }
    });
  }

  setMenuRef = ref => {
    _menu = ref;
  };

  toggleModal = () => {
    this.setState({
      isVisible: true,
    });
    //setisModalVisible(true);
    _menu.hide();
  };

  showMenu = () => {
    _menu.show();
  };

  popupshow = () => {
    // Alert.alert('hello');
    // console.log('modall:', this.state.isVisible);
    // console.log('hrello');
    this.setState({
      isVisible: true,
    });
    //  console.log('modalllllll:', this.state.isVisible);
  };
  dismiss = () => {
    this.setState({
      isVisible: false,
    });
    _menu.hide();
  };

  dolink = async () => {
    await Linking.openURL('mailto:apps@surphaces.com');
  };

  //   My account
  // About the App
  // Support
  // Logout
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header1}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.showMenu}>
            <Menu
              style={{width: '38%'}}
              ref={this.setMenuRef}
              button={
                <View
                  activeOpacity={0.6}
                  underlayColor="transparent"
                  style={{
                    height: 26,
                    width: 26,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: '90%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/Icons/menu.png')}
                  />
                </View>
              }>
              <MenuItem style={styles.itemSeperator} onPress={this.popupshow}>
                <Text style={{fontFamily: 'Arial'}}>Help</Text>
              </MenuItem>
            </Menu>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.isVisible}
          onSwipeComplete={() =>
            this.setState({
              isVisible: false,
            })
          }
          swipeDirection="right"
          onBackdropPress={() =>
            this.setState({
              isVisible: false,
            })
          }>
          <View style={styles.modal}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {this.state.Button.toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                marginTop: 10,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              {/* <HTML
                html={this.state.Content}
                imagesMaxWidth={Dimensions.get('window').width}
              /> */}
              <RenderHTML
                contentWidth={Dimensions.get('window').width}
                source={{ html: this.state.Content || '' }}
              />
            </View>

            <TouchableOpacity style={styles.popup} onPress={this.dismiss}>
              <Text style={styles.ModelBtntext}>Skip</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    UserDetails: state.UserDetails,
    StainPagesDetails: state.StainPagesDetails,
  };
};
export default connect(mapStateToProps)(CustomHeader);
