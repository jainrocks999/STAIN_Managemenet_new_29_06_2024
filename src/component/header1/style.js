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
    height: 40,
    width: wp('100%'),
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderColor: '#C1C1C1',
    width: '0%',
  },

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconmain: {
    width: 35,
    height: 35,
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
});
