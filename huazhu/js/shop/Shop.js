import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Shop = () => (
    <View style={styles.container}>
        <Text>Shop Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Shop;