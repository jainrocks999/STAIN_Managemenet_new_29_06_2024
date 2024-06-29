import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  MainView: {
    flex: 1,
  },
  logoContainer: {
    // position: 'absolute',
    // bottom: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    height: hp('7%'),
    width: hp('20%'),
    paddingLeft: '3%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 50,
  },
  SecondView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // width:300
  },
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
    height: 30,
    // borderRadius:10,
    marginTop: 10,

    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  modal: {
    width: '100%',

    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModelBtntext: {
    color: colors.white,
    fontSize: hp('1.7%'),
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',

    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ModelMsgText: {
    width: '99%',
    alignSelf: 'center',
    color: colors.black,
    fontSize: hp('1.7%'),
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
  popup: {
    width: '30%',
    height: hp('4%'),
    marginTop: 10,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
