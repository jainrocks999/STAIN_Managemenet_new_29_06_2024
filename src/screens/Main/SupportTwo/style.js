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
  subHeadingView: {
    width: wp('100%'),
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
  },

  scroll: {
    flexGrow: 1,
    marginHorizontal: 20,
    paddingBottom: 30,
  },
});
