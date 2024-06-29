import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  subHeadingView: {
    backgroundColor: 'transparent',
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
});
