import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import color from '../utils/color'

import homeTabs from "./tab/hometabs/Hometabs";
import homeTest from "./tab/HomeTestTab";
import homeIntel from "./tab/HomeIntelTab";
import homePhone from "./tab/HomePhoneTab";
import homeTrave from "./tab/HomeTraveTab";
import homeFurn from "./tab/HomeFurnTab";
import homeFood from "./tab/HomeFoodTab";
import homeLeft from "./tab/HomeLeftTab";

const Hometab = TabNavigator({
        hometabs: {
            screen: homeTabs,
            navigationOptions: {
                tabBarLabel: '首页',
            },
        },
        testtabs: {
            screen: homeTest,
            navigationOptions: {
                tabBarLabel: '测试入口添加',
            },
        },
        inteltabs: {
            screen: homeIntel,
            navigationOptions: {
                tabBarLabel: '潮流智能',
            },
        },
        phonetabs: {
            screen: homePhone,
            navigationOptions: {
                tabBarLabel: '手机数码',
            },
        },
        travetabs: {
            screen: homeTrave,
            navigationOptions: {
                tabBarLabel: '旅行箱包',
            },
        },
        lefttabs: {
            screen: homeLeft,
            navigationOptions: {
                tabBarLabel: '生活电器',
            },
        },
        furntabs: {
            screen: homeFurn,
            navigationOptions: {
                tabBarLabel: '家居家纺',
            },
        },
        foodtabs: {
            screen: homeFood,
            navigationOptions: {
                tabBarLabel: '特产美食',
            },
        },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: false,
        animationEnabled: true,
        backBehavior: 'none',
        lazy: true,
        tabBarOptions: {
            showIcon: false,
            labelStyle: {
                color: color.color_333,
                fontSize: 13,
                margin:0

            },
            style: {
                backgroundColor: color.bg_color,
            },
            indicatorStyle:{
                backgroundColor:'#53a8eF',
                height:3,
            },
            showLabel: true,
            pressOpacity: 0.3,
            scrollEnabled:true,
        }

    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Hometab;