import React from 'react';
import { Image,
    StyleSheet,
    Text,
    AsyncStorage} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from "./js/home/Home";
import Sort from "./js/sort/Sort";
import Gift from "./js/gift/Gift";
import Shop from "./js/shop/Shop";
import Mine from "./js/mine/Mine";
import color from './js/utils/color'

const homenormal = require('./image/home/204首页-线性.png');
const homepress = require('./image/home/204首页.png');
const sortnormal = require('./image/home/206搜索-线性.png')
const sortpress = require('./image/home/206搜索.png')

const giftnormal = require('./image/home/06商品-线性.png');
const giftpress = require('./image/home/06商品.png');
const shopnormal = require('./image/home/05采购-线性.png')
const shoppress = require('./image/home/05采购.png')
const minenormal = require('./image/home/224用户-线性.png');
const minepress = require('./image/home/224用户.png');


const main = TabNavigator({
        home: {
            screen: Home,
            navigationOptions: () => TabOptions('首页', homenormal, homepress, '首页'),
        },
        sort: {
            screen: Sort,
            navigationOptions: () => TabOptions('分类', sortnormal, sortpress, '分类'),
        },
        gift: {
            screen: Gift,
            navigationOptions: () => TabOptions('礼物', giftnormal, giftpress, '礼物'),
        },
        shop: {
            screen: Shop,
            navigationOptions: () => TabOptions('购物车', shopnormal, shoppress, '购物车'),
        },
        mine: {
            screen: Mine,
            navigationOptions: () => TabOptions('我的', minenormal, minepress, '我的'),
        },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        backBehavior: 'none',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                color: color.text_color_gray_dark,
                fontSize: 10,
                marginTop: 1

            },
            style: {
                backgroundColor: color.bg_color,
                height: 50,
            },
            showLabel: true,
            pressOpacity: 0.3,
            indicatorStyle: {
                height: 0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            }
        }

    });

export const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor, focused}) => {
        return (
            focused
                ?
                <Image
                    source={selectedImage}
                    style={[styles.TabBarIcon]}
                />
                :
                <Image
                    source={normalImage}
                    style={[styles.TabBarIcon]}
                />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 1, color: 'blue'};
    // header的style
    const headerStyle = {backgroundColor: 'blue'};
    return {tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle};
};

const StackOptions = ({navigation}) => {
    // console.log(navigation);
    let {state, goBack} = navigation;
    const visible = state.params.isVisible;
    let header;
    if (visible === true) {
        header = null;
    }
    const headerStyle = {backgroundColor: 'blue'};
    const headerTitle = state.params.title;
    const headerTitleStyle = {fontSize: 20, color: 'blue', fontWeight: '500'}
    const headerBackTitle = false;
    const headerLeft = (
        <Image
            source={backicon}
            onPress={() => {
                goBack()
            }}
        />
    );
    let headerRight;
    if (state.params.headerRight) {
        headerRight = state.params.headerRight;
    }
    return {headerStyle, headerTitle, headerTitleStyle, headerBackTitle, headerLeft, header, headerRight}
};


const styles = StyleSheet.create({
    TabBarIcon: {
        backgroundColor: '#fff',
        width: 20,
        height: 20
    }
});
export default main;