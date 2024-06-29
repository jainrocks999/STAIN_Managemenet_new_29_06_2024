import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ScrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  heading: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    flex: 0.7,
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: '99%',
  },
  SignIn: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  textInput: {
    marginTop: 10,
    width: wp('100%'),
    backgroundColor: colors.white,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
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
  logoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  SignIn: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  textInputContainer: {
    marginTop: 10,
    width: '100%',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    width: '99%',
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
