import React, {useEffect, useState} from 'react';
import {Image, FlatList, View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
let arr = [];
let home = '';
let resource = '';
let Instructions = '';
let AboutStains = '';
let SupplyList = '';
function BottomTab() {
  const navigation = useNavigation();
  const selector = useSelector((state) => state.StainPagesDetails);
  const StainDetails = useSelector((state) => state.StainDetails);
  const [Content, setContent] = useState();
  const [setButton, Button] = useState('');
  useEffect(() => {
    const selectedName = selector.map((element) => {
      if (element.id == '10') {
        resource = element.name;
      } else if (element.id == '7') {
        Instructions = element.name;
      } else if (element.id == '1') {
        AboutStains = element.name;
      } else if (element.id == '6') {
        SupplyList = element.name;
      } else if (element.id == '1') {
        AboutStains = element.name;
      }
    });

    arr = [
      {
        img: require('../../assets/Icons/home.png'),
        name: 'Home',
        pagename: 'Home',
      },
      {
        img: require('../../assets/Icons1/About.png'),
        name: AboutStains,
        pagename: 'AboutStains',
      },
      {
        img: require('../../assets/Icons1/Stain_Chart.png'),
        name: 'Search Stains',
        pagename: 'Stain',
      },
      {
        img: require('../../assets/Icons1/Video.png'),
        name: 'How-To',
        pagename: 'HowTo',
      },
      {
        img: require('../../assets/Images/SL.png'),
        name: SupplyList,
        pagename: 'Recommendedsupply',
      },
      {
        img: require('../../assets/Images/cs.png'),
        name: 'Case Studies',
        pagename: 'Support',
      },

      {
        img: require('../../assets/Images/RS.png'),
        name: resource,
        pagename: 'resource',
      },
    ];
  });

  return (
    <View style={styles.header}>
      <FlatList
        data={arr}
        horizontal={true}
        //contentContainerStyle={{ flex: 1 }}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        //ItemSeparatorComponent={itemSeparator}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              // justifyContent: 'space-between',
              //marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                height: hp('7%'),
                width: wp('20%'),
                // marginBottom: 2,
                //height: 38,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate(item.pagename);
              }}>
              <View style={{height: hp('2%'), width: wp('18%')}}>
                <Image
                  source={item.img}
                  style={styles.bottomTab}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default BottomTab;
