import {StyleSheet, Platform, StatusBar} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 90 : 56;

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scroll: {
    flexGrow: 1,
    // justifyContent: 'center',
    padding: 20,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: 'yellow',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
  },
  logoContainer: {
    //  marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'white'
  },
  SecondView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo1: {
    // width: '100%',
    // height: '100%',
    // borderRadius:10,
    marginTop: 10,

    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  logoContainer1: {
    height: hp('7%'),
    width: hp('20%'),
    paddingLeft: '3%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginTop: 12,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  heading: {
    textAlign: 'center',
    color: colors.darkOrange,
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.darkOrange,
    fontSize: 17,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginVertical: hp('2%'),
    alignContent: 'center',
  },

  button: {
    height: 50,
    width: '50%',
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.white,
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: 28,
    width: 38,
    padding: 10,
    tintColor: colors.white,
  },
});
