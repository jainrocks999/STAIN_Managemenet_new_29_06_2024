import React, { Component } from 'react';
import {
  Alert,
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
import Modal from 'react-native-modal';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import { connect, useSelector } from 'react-redux';
import HTML, { RenderHTML } from 'react-native-render-html';
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
    const { StainPagesDetails } = this.props;
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
    this.setState({ modalVisible: visible });
  };

  dolink = async () => {
    await Linking.openURL('mailto:apps@surphaces.com');
  };
  dismiss = () => {
    this.setState({ visible: false });
  };
  showModal = () => {
    this.hideMenu()
    setTimeout(() => {
      this.setState({ visible: true });
    }, 500)
  };

  render() {
    const { modalVisible } = this.state;
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
                style={{ height: '100%', width: '100%' }}
                resizeMode="contain"
                source={require('../../assets/Icons/menu.png')}
              />
            </View>
            <Menu
              style={{ width: wp('40%') }}
              ref={this.setMenuRef}
              onRequestClose={() => {
                this.hideMenu()
              }}
            >
              <MenuItem style={styles.itemSeperator} onPress={this.showModal}>
                <Text style={{ fontFamily: 'Arial', fontSize: hp('1.5%') }}>
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

        {/* <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({visible: false});
          }}
          >
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
                <RenderHTML
                  contentWidth={Dimensions.get('window').width}
                  source={{ html: this.state.Content || '' }}
                />
              </View>

              <TouchableOpacity style={styles.popup} onPress={()=>{
                 this.setState({visible: false});
              }}>
                <Text style={styles.ModelBtntext}>Skip</Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog> */}
        <Modal
          isVisible={this.state.visible}
          onBackdropPress={() => this.setState({ visible: false })}
          onBackButtonPress={() => this.setState({ visible: false })}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropTransitionOutTiming={0}>
          <View style={styles.modal}>
            <View style={{ width: '100%' }}>
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
              <RenderHTML
                contentWidth={Dimensions.get('window').width}
                source={{ html: this.state.Content || '' }}
              />
            </View>

            <TouchableOpacity
              style={styles.popup}
              onPress={() => this.setState({ visible: false })}>
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
export default connect(mapStateToProps)(LoginHeader2);
