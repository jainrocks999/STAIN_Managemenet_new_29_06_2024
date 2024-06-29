import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
//import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../colors';
import fontsize from '../fontSize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = (props) => {
  return (
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  button: {
    height: hp('7%'),
    width: wp('55%'),
    padding: 10,
    marginTop: hp('2%'),
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: hp('0.5%'),
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.white,
    fontSize: hp('1.7%'),
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
