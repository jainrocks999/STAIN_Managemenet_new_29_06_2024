import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    Text,
    View,
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';
import TitleText from '../../../component/Headertext';
import BottomTab from '../../../component/BottomTab';

const CaseStudy = ({ route }) => {
    const { elementdata } = route.params;
    const navigation=useNavigation()

    return (
        <View style={styles.imageBackground}>
            <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
            {/* {isFetching ? <Loader /> : null} */}
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../../assets/Images/AppBackground.jpg')}>
                <ScrollView contentContainerStyle={styles.scroll}>

                    <TitleText title={'Case Study Details'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
                    <View style={styles.view1} >



                        <View style={styles.view2}>
                            <SliderBox
                                ImageComponentStyle={{ width: 390, height: 250, marginEnd: 40 }}
                                images={elementdata.images}
                                resizeMode='stretch'
                                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                                paginationBoxVerticalPadding={20}
                                autoplay
                                circleLoop
                            />

                        </View>
                        <View style={{ marginLeft: 4 }}>
                            <Text style={styles.case_study_name}>{elementdata.case_study_name}</Text>
                            <Text style={styles.csae}>{elementdata.case_study_content}</Text>
                        </View>

                    </View>
                </ScrollView>
                <BottomTab />
            </ImageBackground>
        </View>
    );
};

export default connect()(CaseStudy);
