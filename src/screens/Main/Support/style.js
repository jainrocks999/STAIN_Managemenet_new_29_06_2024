import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },

  MainContainer: {flex: 1, width: '100%'},

  cardViewStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cardView_Image: {
    height: 190,
    resizeMode: 'stretch',
    width: wp('100%'),
    alignSelf: 'center',
  },

  cardView_InsideText: {
    fontSize: hp('2%'),
    fontWeight: '700',
    fontFamily: 'Arial',
  },
  cardView_InsideText1: {
    fontSize: hp('1.5%'),
    textAlignVertical: 'center',
    fontFamily: 'Arial',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modal: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
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
    width: '99%',
    alignSelf: 'center',
    color: colors.black,
    fontSize: hp('1.5%'),
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
    height: 40,
    marginTop: 10,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
