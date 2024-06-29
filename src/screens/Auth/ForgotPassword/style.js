import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  header: {height: 40, width: wp('100%'), backgroundColor: colors.orange},
  MainView: {
    flex: 1,
  },
  logoContainer1: {
    // marginTop: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    marginTop: '25%',
    // backgroundColor:'white'
    height: hp('7%'),
    width: hp('20%'),
    paddingLeft: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  scroll: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // paddingBottom: 20,
    flexGrow: 1,
    // justifyContent: 'center',
    padding: 20,
  },
  ViewMiddle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '88%',
  },
  SecondView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
  // logoContainer: {
  //   padding: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // textInput: {
  //   margin: 8,
  //   backgroundColor: colors.white,
  //   padding: 15,
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   borderColor: '#C9C8C7'
  // },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    padding: 4,
  },
  logoContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkboxContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
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
  // logo:{
  //   width:80,
  //   height:80,
  //   borderRadius:10,
  //   marginTop:16,
  //   justifyContent:'center',
  //   alignContent:'center'
  // },
  logo: {
    width: 65,
    height: 65,
    //borderRadius:10,
    marginTop: 12,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo1: {
    width: '90%',
    height: '90%',
    // borderRadius:10,
    marginTop: 10,

    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  logoContainer: {
    //  padding: 20,
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textInputContainer: {
    padding: 20,
    width: '98%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textInput: {
    // marginTop: '5%',
    width: '90%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
});
