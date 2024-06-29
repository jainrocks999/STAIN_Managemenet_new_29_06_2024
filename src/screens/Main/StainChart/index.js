import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
  Linking,
  Dimensions,
} from 'react-native';
import styles from './style';
import BottomTab from '../../../component/BottomTab';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/MainHeader';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HTML from 'react-native-render-html';
import Tooltip from 'react-native-walkthrough-tooltip';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

let Levelname = '';

class StainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: [],
      fill: [],
      button: 'STAIN CHART',
      defination: '',
      modalVisible: false,
      pageButton: '',
      content: '',
      Vlaue: '',
      value: '',
      itemId: 1,
      myText: "I'm ready to get swiped!",
      // colors:'';
    };
    this.arrayholder = [];
    this.fill = [];
    this.api();
  }
  async componentDidMount() {
    const {selector, StainPagesDetails, StainPost} = this.props;

    StainPagesDetails.map(element => {
      if (element.id == '7') {
        console.log('element.name', element.name);
        this.setState({
          pageButton: element.name,
          content: element.mobile_content,
        });
      }
    });
  }
  api = async () => {
    const {selector, StainPagesDetails, StainPost} = this.props;
    console.log('selectorororor', selector);
    console.log('StainPost    : ', StainPost);

    StainPost.map(element => {
      this.fill.push(element);

      this.arrayholder = this.fill;
    });
  };

  loadsearch = text => {
    console.log('testtttt ::::', text);

    this.setState({
      value: text,
      colors: 'Black',
    });
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}
        ${item.tag.toUpperCase()} `;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.fill = newData;

    if (newData == '') {
      Toast.show('No item found');
    }

    this.renderList();
  };
  onlistItemPress = item => {
    console.log('yogi item', item);
    this.setState({
      pageButton: item.name,
      content: item.mobile_content,
      itemId: parseInt(item.id),
      value: '',
    });
    console.log('itemmIdd : ', this.state.itemId);
  };

  async onSwipeLeft(gestureState) {
    console.log('itemmIdd swipe left : ', this.state.itemId);
    if (this.state.itemId == this.arrayholder.length) {
      this.arrayholder.map(element => {
        this.setState({
          myText: 'You swiped left!',
          itemId: 1,
        });
        var itemdulicate = 1;
        if (element.id == itemdulicate) {
          this.setState({
            content: element.mobile_content,
            pageButton: element.name,
          });
        }
      });
    } else {
      this.arrayholder.map(element => {
        this.setState({
          myText: 'You swiped left!',
          itemId: this.state.itemId + 1,
        });
        var itemdulicate = this.state.itemId + 1;
        if (element.id == itemdulicate) {
          this.setState({
            content: element.mobile_content,
            pageButton: element.name,
          });
        }
      });
    }
  }

  async onSwipeRight(gestureState) {
    console.log('swipe right itemId', this.state.itemId);
    if (this.state.itemId == 1) {
      this.arrayholder.map(element => {
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
            pageButton: element.name,
          });
        }
      });
    } else {
      this.arrayholder.map(element => {
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
            pageButton: element.name,
          });
        }
      });
    }
  }

  onSwipe(gestureName, gestureState) {
    // const {navigation, route} = this.props;
    // const {DataArray} = route.params;
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.arrayholder.map(element => {
          this.setState({
            myText: 'You swiped left!',
            itemId: this.state.itemId + 1,
          });
          if (element.id == this.state.itemId) {
            this.setState({
              content: element.mobile_content,
              pageButton: element.name,
            });
          }
        });
        break;
      case SWIPE_RIGHT:
        this.arrayholder.map(element => {
          this.setState({
            myText: 'You swiped right!',
            itemId: this.state.itemId - 1,
          });
          if (element.id == this.state.itemId) {
            console.log();
            this.setState({
              content: element.mobile_content,
              pageButton: element.name,
            });
          }
        });
        break;
    }
  }

  onClose = () => this.setState({modalVisible: false});
  tooltipOnPress = (item, url) => {
    console.log('htmlAttribs', item.href);

    // console.log('itewmet', item._dispatchInstances.memoizedProps.children);
    console.log('id', item.id);
    const {selector, StainDefination} = this.props;
    console.log('StainDefination:', StainDefination);

    if (item.id != null) {
      StainDefination.map(element => {
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
    } else {
      this.setState({modalVisible: false});
      Linking.openURL(item.href);
    }
  };

  renderList = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    console.log('fill ', this.fill);
    console.log('arrayholder  ', this.arrayholder);
    console.log('textSearch  ', this.state.value);
    console.log('render itemId  ', this.state.itemId);
    if (this.state.value == '') {
      // if (this.state.pageButton == 'Instructions') {
      console.log('pageButton ', this.state.pageButton);
      return (
        <ScrollView style={styles.scroll}>
          <TitleText
            title={this.state.pageButton}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <Tooltip
            isVisible={this.state.modalVisible}
            contentStyle={{backgroundColor: 'black'}}
            content={
              <View style={{width: wp('80%')}}>
                <TouchableOpacity
                  style={{
                    width: wp('5%'),
                    height: hp('2.5%'),

                    alignSelf: 'flex-end',
                    // backgroundColor: 'white',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => this.setState({modalVisible: false})}>
                  <Image
                    resizeMode="contain"
                    source={require('./icons/close.png')}
                    style={{
                      height: '100%',
                      width: '100%',
                      tintColor: 'white',
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: hp('2%'),
                  }}>
                  {/* {console.log('tjhttjtjtjttjtjtjtjtj', this.state.defination)} */}
                  {this.state.defination != '' ? (
                    <HTML
                      baseFontStyle={{
                        fontSize: hp('1.7%'),
                        color: 'white',
                      }}
                      source={{html: this.state.defination}}
                    />
                  ) : null}
                </View>
              </View>
            }
            placement="center"
            // onClose={() => this.setState({modalVisible: false})}
          ></Tooltip>
          {console.log('thsisis stain', this.state.content)}
          {this.state.content != '' ? (
            <HTML
              baseFontStyle={{fontSize: hp('1.7%')}}
              // html={this.state.content}
              source={{html: this.state.content}}
              onLinkPress={(event, href, htmlAttribs, children, url) => {
                this.tooltipOnPress(htmlAttribs, url);
              }}
              tagsStyles={{
                i: {
                  textAlign: 'center',
                  fontStyle: 'italic',
                },
                color: 'grey',
              }}
            />
          ) : null}
        </ScrollView>
      );
      // } else {
      //   return (
      //     <ScrollView style={styles.scroll}>
      //       <GestureRecognizer
      //         onSwipe={(direction, state) => this.onSwipe(direction, state)}
      //         onSwipeLeft={(state) => this.onSwipeLeft(state)}
      //         onSwipeRight={(state) => this.onSwipeRight(state)}
      //         config={config}
      //         style={{
      //           flex: 1,
      //         }}>
      //         <TitleText
      //           title={this.state.pageButton}
      //           color={'#9E3B22'}
      //           fontSize={hp('3%')}
      //         />
      //         <Tooltip
      //           isVisible={this.state.modalVisible}
      //           contentStyle={{backgroundColor: 'black'}}
      //           content={
      //             <View style={{width: wp('80%')}}>
      //               <TouchableOpacity
      //                 style={{
      //                   width: wp('5%'),
      //                   height: hp('2.5%'),

      //                   alignSelf: 'flex-end',
      //                   // backgroundColor: 'white',
      //                   borderWidth: 1,
      //                   justifyContent: 'center',
      //                   alignItems: 'center',
      //                 }}
      //                 onPress={() => this.setState({modalVisible: false})}>
      //                 <Image
      //                   resizeMode="contain"
      //                   source={require('./icons/close.png')}
      //                   style={{
      //                     height: '100%',
      //                     width: '100%',
      //                     tintColor: 'white',
      //                   }}
      //                 />
      //               </TouchableOpacity>
      //               <View
      //                 style={{
      //                   marginTop: hp('2%'),
      //                 }}>
      //                 <HTML
      //                   baseFontStyle={{
      //                     fontSize: hp('1.7%'),
      //                     color: 'white',
      //                   }}
      //                   html={this.state.defination}
      //                 />
      //               </View>
      //             </View>
      //           }
      //           placement="center"
      //           // onClose={() => this.setState({modalVisible: false})}
      //         ></Tooltip>

      //         <HTML
      //           baseFontStyle={{fontSize: hp('1.7%')}}
      //           html={this.state.content}
      //           onLinkPress={(event, href, htmlAttribs, children, url) => {
      //             this.tooltipOnPress(htmlAttribs, url);
      //           }}
      //           tagsStyles={{
      //             i: {
      //               textAlign: 'center',
      //               fontStyle: 'italic',
      //             },
      //             color: 'grey',
      //           }}
      //         />
      //       </GestureRecognizer>
      //     </ScrollView>
      //   );
      // }
    } else {
      return (
        <FlatList
          style={styles.FlatList}
          data={this.fill}
          keyExtractor={(item, index) => item.id.toString()}
          //ItemSeparatorComponent={itemSeparator}

          renderItem={({item, index}) => (
            <View style={{marginTop: 10, width: '99%'}}>
              {this.renderItem(item, index)}
            </View>
          )}
        />
      );
    }
  };

  renderItem = (item, index) => {
    if (item.name == 'IMPORTANT') {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text
              style={{
                fontSize: hp('1.7%'),
                fontWeight: '700',
                textDecorationLine: 'underline',
              }}>
              {item.name.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      if (this.fill.length > 30) {
        console.log('number one');
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.onlistItemPress(item);
                // this.props.navigation.push('StainChart', {
                //   btnName: item.name,
                //   selectId: parseInt(item.id),
                //   indexItem: index,
                //   item: item,
                //   DataArray: this.arrayholder,
                // });
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onlistItemPress(item);
              }}>
              <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        console.log('number six');
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.onlistItemPress(item);
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onlistItemPress(item);
              }}>
              <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  };

  render() {
    const {isFetching, StainPagesDetails} = this.props;

    return (
      <View style={styles.imageBackground}>
        <CustomHeader
          goBack={() => this.props.navigation.goBack()}
          goToNotification={() =>
            this.props.navigation.navigate('Notifications')
          }
        />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={[styles.imageBackground, {alignItems: 'center'}]}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <TitleText
            title={'SEARCH STAINS'.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <View style={styles.search}>
            <TextInput
              placeholder="Search stain types"
              placeholderTextColor={'grey'}
              //value={text}
              style={{
                width: '90%',
                height: '100%',
                fontSize: hp('1.5%'),
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onChangeText={search => {
                this.loadsearch(search);
              }}
            />
            <View
              style={{
                width: wp('5%'),
                height: hp('2.5%'),
                marginRight: wp('1%'),
              }}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/Icons/Search.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              height: 50,
              justifyContent: 'space-between',
            }}>
            {this.arrayholder.map(element => {
              if (element.id == '72') {
                return (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      this.setState({
                        pageButton: element.name,
                        content: element.mobile_content,
                        itemId: parseInt(element.id),
                        value: '',
                      });
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: wp('5%'),
                          height: hp('2.5%'),
                          marginRight: wp('1%'),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require('../../../assets/Images/u1.png')}
                          style={{height: '100%', width: '100%'}}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: hp('1.7%'),
                          marginTop: 4,
                          marginLeft: 4,
                          color: '#9E3B22',
                          fontFamily: 'Arial',
                          fontWeight: 'bold',
                        }}>
                        {element.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
            {StainPagesDetails.map(element => {
              if (element.id == '7') {
                return (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      this.setState({
                        pageButton: element.name,
                        content: element.mobile_content,

                        value: '',
                      });
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: wp('5%'),
                          height: hp('2.5%'),
                          marginRight: wp('1%'),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require('../../../assets/Icons/instruction.png')}
                          style={{height: '100%', width: '100%'}}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: hp('1.7%'),
                          marginTop: 4,
                          marginLeft: 4,
                          color: '#9E3B22',
                          fontFamily: 'Arial',
                          fontWeight: 'bold',
                        }}>
                        {element.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>

          {this.renderList()}

          <BottomTab />
        </ImageBackground>
        <StatusBar
          backgroundColor={colors.darkOrange}
          barStyle="light-content"
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    selector: state.StainDetails,
    StainPagesDetails: state.StainPagesDetails,
    StainPost: state.StainPost,
    StainDefination: state.StainDefination,
  };
};
export default connect(mapStateToProps)(StainChart);
