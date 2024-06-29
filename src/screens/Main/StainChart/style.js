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
    justifyContent: 'center',
    alignContent: 'center',
  },
  search: {
    alignSelf: 'center',
    width: wp('80%'),
    height: hp('5%'),
    margin: wp('1%'),
    borderWidth: 1,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.white,
  },
  scroll: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    width: wp('99%'),
    flexGrow: 1,
  },
  FlatList: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 10,
    width: '80%',
    marginLeft: 24,
    // marginBottom:50
  },
});
