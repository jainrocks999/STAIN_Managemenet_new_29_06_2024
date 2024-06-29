import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
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
});
