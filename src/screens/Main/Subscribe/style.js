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
  scroll: {flexGrow: 1, paddingBottom: 20, paddingHorizontal: 20},
  settingsContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 2,
    borderColor: '#ACACAC',
  },
  settingsItems: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ACACAC',
  },
  settingsItemsText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: colors.darkOrange,
  },
});
