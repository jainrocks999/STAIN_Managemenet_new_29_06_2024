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
    flexGrow: 1,
    // marginHorizontal: wp('1%'),
  },
  logoContainer: {
    marginTop: '5%',
    alignItems: 'center',
    width: '99%',
  },
});
