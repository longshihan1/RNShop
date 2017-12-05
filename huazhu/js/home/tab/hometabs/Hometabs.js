import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
import tabsort from './tabsort'

const Hometabs = () => (
    <View style={styles.container}>
        <ScrollView horizontal={false}>
        <View style={styles.wrapper}>
            <Swiper  height={200} horizontal={true} autoplay={true}>
                <View style={styles.slide1}>
                    <Image  resizeMode='stretch' style={styles.image} source={{uri: 'http://10.100.20.25/statics/image/hmallGroup1/M00/07/2D/CmQUGlkJK0mAQbTgAAxHECaJpX0717!640x300.png'}}/>
                </View>
                <View style={styles.slide1}>
                    <Image  resizeMode='stretch' style={styles.image} source={{uri: 'http://10.100.20.25/statics/image/hmallGroup1/M00/07/9A/CmQUG1k4sWSAFKg3AAjZNaFGQdU481!640x300.jpg'}}/>
                </View>
                <View style={styles.slide1}>
                    <Image  resizeMode='stretch' style={styles.image} source={{uri: 'http://10.100.20.25/statics/image/hmallGroup1/M00/07/1F/CmQUGlkAbPKAHFWAAAyJJqiWWpw195!640x300.png'}}/>
                </View>
                <View style={styles.slide1}>
                    <Image  resizeMode='stretch' style={styles.image} source={{uri: 'http://10.100.20.25/statics/image/hmallGroup1/M00/07/9A/CmQUGlk4p36AWC1wAAcGCi29mhM158!640x300.jpg'}}/>
                </View>
            </Swiper>
        </View>
            <tabsort/>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: 200,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        height:200
    }
});

export default Hometabs;