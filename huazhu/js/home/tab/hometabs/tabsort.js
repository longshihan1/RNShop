import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const tabsort = () => (
    <View style={styles.container}>
        <Text>tabsort Screen</Text>
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

export default tabsort;