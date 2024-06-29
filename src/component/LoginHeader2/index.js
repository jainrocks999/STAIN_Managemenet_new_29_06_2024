import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  Button,
  Linking,
  Dimensions,
} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';
import {connect, useSelector} from 'react-redux';
import HTML from 'react-native-render-html';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class LoginHeader2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCheckBox: '',
      Username: '',
      Password: '',
      url: '',
      btn: '',
      msg: '',

      msg_text: '',
      Wrong: '',
      spinner: false,
      token: '',
      Button: '',
      Content: '',
      modalVisible: false,
      visible: false,
    };
  }

  async componentDidMount() {
    const {StainPagesDetails} = this.props;
    StainPagesDetails.map(element => {
      if (element.id == '14') {
        // console.log('ggyyyyggg:', JSON.stringify(element));
        // console.log('ggyyygggsssss:', element.name);
        this.setState({
          Content: element.mobile_content,
          Button: element.name,
        });
      }
    });
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  setModalVisible = visible => {
    //console.log('helloModal');
    this.setState({modalVisible: visible});
  };

  dolink = async () => {
    await Linking.openURL('mailto:apps@surphaces.com');
  };
  dismiss = () => {
    this.setState({visible: false});
  };
  showModal = () => {
    this.setState({visible: true});
    this._menu.hide();
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.header}>
        <View style={styles.header1}>
          <TouchableOpacity
            style={{
              width: wp('8%'),
              height: hp('4%'),
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.showMenu}>
            <Menu
              style={{width: wp('40%')}}
              ref={this.setMenuRef}
              button={
                <View
                  activeOpacity={0.6}
                  underlayColor="transparent"
                  style={{
                    height: hp('4%'),
                    width: wp('6%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/Icons/menu.png')}
                  />
                </View>
              }>
              <MenuItem style={styles.itemSeperator} onPress={this.showModal}>
                <Text style={{fontFamily: 'Arial', fontSize: hp('1.5%')}}>
                  Help
                </Text>
                {/* <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => this.setModalVisible(true)}>
                  <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable> */}
              </MenuItem>
            </Menu>
          </TouchableOpacity>
        </View>

        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({visible: false});
          }}>
          <DialogContent>
            <View style={styles.modal}>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: hp('2.5%'),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {this.state.Button.toUpperCase()}
                </Text>
              </View>
              <View
                style={{
                  width: '90%',
                  marginTop: hp('1%'),
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HTML
                  html={this.state.Content}
                  imagesMaxWidth={Dimensions.get('window').width}
                />
              </View>

              <TouchableOpacity style={styles.popup} onPress={this.dismiss}>
                <Text style={styles.ModelBtntext}>Skip</Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
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
export default connect(mapStateToProps)(LoginHeader2);
