import React, {Component, Fragment} from 'react';
import {ImageBackground, View, ScrollView, Text} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';

import CustomHeader from '../../../component/MainHeader';
import HTML from 'react-native-render-html';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/BottomTab';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MenuProvider} from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Overlay from 'react-native-modal-overlay';
import Tooltip from 'react-native-walkthrough-tooltip';
import {TouchableHighlight} from 'react-native-gesture-handler';

class StainChartDetail extends Component {
  constructor(props) {
    super(props);
    const {navigation, route} = this.props;
    const {selectId} = route.params;
    this.state = {
      button: '',
      content: ``,
      itemId: selectId,

      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      backgroundColor: '#fff',
      modalVisible: false,
      defination: '',
      htmlContent: `<p>You can reach Michael at:</p>

      <ul>
        <li><a id="1" href="https://example.com">Website</a></li>
        <li><a id="2" href="mailto:m.bluth@example.com">Email</a></li>
        <li><a id="3" href="tel:+123456789">Acetone</a></li>
      </ul>
      `,
    };
  }
  async componentDidMount() {
    const {selector, StainDefination} = this.props;
    console.log('StainDefination:', StainDefination);
    const {navigation, route} = this.props;
    const {indexItem, selectId, btnName, DataArray} = route.params;
    this.setState({
      itemId: parseInt(selectId),
    });
    let arrayLength = DataArray.length;
    console.log('DataArray  length', arrayLength);
    console.log('DataArray  DataArray new', DataArray);
    DataArray.map((element) => {
      if (element.id == this.state.itemId) {
        console.log();
        this.setState({
          content: element.mobile_content,
          button: element.name,
        });
      }
    });
  }

  async onSwipeLeft(gestureState) {
    const {navigation, route} = this.props;
    const {indexItem, selectId, btnName, DataArray} = route.params;
    console.log('Data artray length', DataArray.length);
    if (this.state.itemId == DataArray.length) {
      DataArray.map((element) => {
        this.setState({
          myText: 'You swiped left!',
          itemId: 1,
        });
        var itemdulicate = 1;
        if (element.id == itemdulicate) {
          this.setState({
            content: element.mobile_content,
            button: element.name,
          });
        }
      });
    } else {
      DataArray.map((element) => {
        this.setState({
          myText: 'You swiped left!',
          itemId: this.state.itemId + 1,
        });
        var itemdulicate = this.state.itemId + 1;
        if (element.id == itemdulicate) {
          this.setState({
            content: element.mobile_content,
            button: element.name,
          });
        }
      });
    }
  }

  async onSwipeRight(gestureState) {
    const {navigation, route} = this.props;
    const {indexItem, selectId, btnName, DataArray} = route.params;
    // console.log('API itemId', this.state.itemId);
    if (this.state.itemId == 1) {
      DataArray.map((element) => {
        this.setState({
          myText: 'You swiped right!',
          itemId: 82,
        });
        var itemdulicate = 82;
        if (element.id == itemdulicate) {
          // console.log('Left itemId', this.state.itemId);
          // console.log('element.name', element.name);

          this.setState({
            content: element.mobile_content,
            button: element.name,
          });
        }
      });
    } else {
      DataArray.map((element) => {
        this.setState({
          myText: 'You swiped right!',
          itemId: this.state.itemId - 1,
        });
        var itemdulicate = this.state.itemId - 1;
        if (element.id == itemdulicate) {
          // console.log('Left itemId', this.state.itemId);
          // console.log('element.name', element.name);

          this.setState({
            content: element.mobile_content,
            button: element.name,
          });
        }
      });
    }
  }

  onSwipe(gestureName, gestureState) {
    const {navigation, route} = this.props;
    const {DataArray} = route.params;
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        DataArray.map((element) => {
          this.setState({
            myText: 'You swiped left!',
            itemId: this.state.itemId + 1,
          });
          if (element.id == this.state.itemId) {
            this.setState({
              content: element.mobile_content,
              button: element.name,
            });
          }
        });
        break;
      case SWIPE_RIGHT:
        DataArray.map((element) => {
          this.setState({
            myText: 'You swiped right!',
            itemId: this.state.itemId - 1,
          });
          if (element.id == this.state.itemId) {
            console.log();
            this.setState({
              content: element.mobile_content,
              button: element.name,
            });
          }
        });
        break;
    }
  }

  onClose = () => this.setState({modalVisible: false});
  tooltipOnPress = (item) => {
    console.log('htmlAttribs', item);
    console.log('id', item.id);
    const {selector, StainDefination} = this.props;
    console.log('StainDefination:', StainDefination);

    StainDefination.map((element) => {
      if (element.id == item.id) {
        console.log('StainDefination name: ', element.name);
        console.log('element content ', element.content);
        console.log('element id ', element.id);
        this.setState({
          defination: element.content,
        });
      }
    });
    this.setState({modalVisible: true});
  };

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor,
        }}>
        <View style={styles.imageBackground}>
          <CustomHeader
            goBack={() => this.props.navigation.goBack()}
            goToNotification={() =>
              this.props.navigation.navigate('Notifications')
            }
          />
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}>
            <ScrollView style={styles.scroll}>
              <TitleText
                title={this.state.button}
                color={'#9E3B22'}
                fontSize={hp('3%')}
              />
              <Tooltip
                isVisible={this.state.modalVisible}
                contentStyle={{backgroundColor: 'black'}}
                content={
                  <View style={{flex: 1}}>
                    <HTML
                      baseFontStyle={{fontSize: hp('1.7%'), color: 'white'}}
                      html={this.state.defination}
                      onLinkPress={(item) => this.tooltipOnPress(item)}
                    />
                  </View>
                }
                placement="center"
                onClose={() => this.setState({modalVisible: false})}></Tooltip>
              <HTML
                baseFontStyle={{fontSize: hp('1.7%')}}
                html={this.state.content}
                onLinkPress={(event, href, htmlAttribs, children) => {
                  this.tooltipOnPress(htmlAttribs);
                }}
                tagsStyles={{
                  i: {
                    textAlign: 'center',
                    fontStyle: 'italic',
                  },
                  color: 'grey',
                }}
              />
            </ScrollView>
          </ImageBackground>
          <BottomTab />
          <StatusBar />
        </View>
      </GestureRecognizer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    selector: state.StainDetails,
    StainPagesDetails: state.StainPagesDetails,
    StainDefination: state.StainDefination,
  };
};
export default connect(mapStateToProps)(StainChartDetail);
const triggerStyles = {
  triggerText: {
    color: 'white',
  },
  triggerOuterWrapper: {
    backgroundColor: 'orange',
    padding: 5,
    flex: 1,
  },
  triggerWrapper: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  triggerTouchable: {
    underlayColor: 'darkblue',
    activeOpacity: 70,
    style: {
      flex: 1,
    },
  },
};
const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'green',
    padding: 5,
    // width: '100%',
  },
  optionsWrapper: {
    backgroundColor: 'purple',
  },
  optionWrapper: {
    backgroundColor: 'yellow',
    margin: 5,
  },
  optionTouchable: {
    underlayColor: 'gold',
    activeOpacity: 70,
  },
  optionText: {
    color: 'brown',
  },
};

const optionStyles = {
  optionTouchable: {
    underlayColor: 'red',
    activeOpacity: 40,
  },
  optionWrapper: {
    backgroundColor: 'pink',
    margin: 5,
  },
  optionText: {
    color: 'black',
  },
};
