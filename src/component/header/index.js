import React, { useEffect } from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconmain}
        // onPress={() => { navigation.goBack(null) }}
        onPress={() => { navigation.goBack() }}
      >
        <Image source={require('../../assets/Icons/arrow1.png')}
          style={styles.icon}
          // style={{ tintColor: '#fff' }}
          resizeMode={'contain'}

        />
      </TouchableOpacity>

    </View>

  );
}

export default connect()(CustomHeader);
