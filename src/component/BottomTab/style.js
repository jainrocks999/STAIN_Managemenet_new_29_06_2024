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
    height: hp('8%'),
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  bottomTab: {
    tintColor: '#fff',
    height: '100%',
    width: '100%',
    // resizeMode:'cover',
  },

  buttonText: {
    color: 'white',
    fontSize: hp('1.2%'),
    alignSelf: 'center',

    textAlign: 'center',
  },
});
