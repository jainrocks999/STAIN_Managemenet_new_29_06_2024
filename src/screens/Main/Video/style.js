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
  video: {
    marginTop: 20,
    width: wp('100%'),
    height: 340,
  },

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginBottom: 50,
  },
  video_name: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
});
