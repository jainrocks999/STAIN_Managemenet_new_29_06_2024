import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  iconmain: {
    width: wp('9%'),
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '90%',
    height: '30%',
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: hp('5%'),
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
