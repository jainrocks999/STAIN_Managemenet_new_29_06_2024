import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: '90%',
  },

  MainView: {
    flex: 1,
  },
  logoContainer1: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'white'
  },
  scroll: {
    flexGrow: 1,
    // justifyContent: 'center',
    padding: 20,
  },
  ViewMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('80%'),
  },

  ModelBtntext: {
    color: colors.white,
    fontSize: hp('1.5%'),
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  ModelMsgText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    alignItems: 'center',
    padding: 6,
    textAlign: 'center',
  },
  ModelmsgView: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    padding: 20,
    width: wp('95%'),
    alignSelf: 'center',
  },
  textInput: {
    borderColor: '#C9C8C7',
    borderWidth: wp('0.4%'),
    borderRadius: wp('1.3%'),
    alignSelf: 'center',
    width: '100%',
    height: hp('6%'),
    backgroundColor: colors.white,
    margin: wp('1%'),
    padding: wp('2%'),

    fontSize: hp('1.5%'),
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: '400',
    fontSize: hp('1.5%'),
    alignSelf: 'center',
  },
  logoContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkboxContainer: {
    marginTop: hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // width: wp('100%'),
  },
  modal: {
    width: wp('100%'),
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  popup: {
    height: 40,
    marginTop: 20,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
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
    // backgroundColor:'white'
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
});
