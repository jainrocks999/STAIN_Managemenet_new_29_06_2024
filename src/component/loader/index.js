import React from 'react';
import {View,Image} from 'react-native';
import style from './style';
const loading=require('../../assets/Images/imageloading.gif')
export default class Loader extends React.Component{
    render(){
        return(
            <View style={ style.container }>
              <Image source={loading} style={{width:60,height:60}}/>    
            </View>
        )
    }
}