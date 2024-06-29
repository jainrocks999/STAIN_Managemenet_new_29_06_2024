import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TitleText = (props) => {
  return (
    <View
      style={{
        width: '99%',
        alignSelf: 'center',
        margin: 5,
        justifyContent: 'center',
      }}>
      <Text
        numberOfLines={2}
        style={[
          styles.headerText,
          {color: props.color, fontSize: props.fontSize},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  myText: {
    fontSize: hp('1.5%'), // End result looks like the provided UI mockup
  },
  headerText: {
    // margin:4,
    //width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
    // width: 210,
    textTransform: 'uppercase',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});

export default TitleText;
