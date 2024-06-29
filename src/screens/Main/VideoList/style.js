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
    marginHorizontal: 20,
    marginBottom: 62,
    paddingBottom: 50,
  },

  MainContainer: {flex: 1, width: '100%'},

  cardViewStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  cardView_Image: {
    height: 205,
    resizeMode: 'stretch',
    width: '99%',
    alignSelf: 'center',
  },

  textView: {
    alignSelf: 'flex-start',
    padding: 10,
    fontFamily: 'Arial',
  },

  cardView_InsideText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Arial',
  },
  cardView_InsideText1: {fontSize: hp('1.5%'), textAlignVertical: 'center'},
});
