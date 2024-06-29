import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: hp('5%'),
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: '90%',
  },

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconmain: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: wp('100%'),
    height: hp('100%'),
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: wp('78%'),

    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',

    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModelBtntext: {
    color: colors.white,
    fontSize: hp('2%'),
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: hp('1%'),
    textAlign: 'center',
  },
  ModelMsgText: {
    textDecorationLine: 'underline',

    alignSelf: 'center',
    color: '#0781de',
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
  popup: {
    marginTop: hp('1%'),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: hp('1%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
