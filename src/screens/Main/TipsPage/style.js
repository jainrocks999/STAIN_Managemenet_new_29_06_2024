import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex:1,
  },
  scroll:{
    paddingHorizontal:20,
   // paddingBottom:5,
    flexGrow: 1,
  },

});