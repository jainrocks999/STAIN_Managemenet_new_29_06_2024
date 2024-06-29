import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';

const TitleText = (props) => {
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <Text
        numberOfLines={2}
        style={[
          styles.headerText,
          {
            color: props.color,
            fontSize: props.fontSize,
            textAlign: props.textAlign,
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerText: {
    marginTop: 4,
    // width:'90%',

    textAlign: 'center',
    width: 180,
    fontFamily: 'Arial',
    fontWeight: '400',
  },
});

export default TitleText;
