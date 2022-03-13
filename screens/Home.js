import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import Search from '../components/Home/Search';
import Categories from '../components/Home/Categories';
import ShoppingItem from '../components/Home/ShoppingItem';

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={[styles.androidSafeArea]}>
            <View style={styles.header}>
                <HeaderTabs navigation={navigation} />
            </View>
            <Search />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 10,
                    paddingHorizontal: 10,
                }}
            >
                <Categories />
                <ShoppingItem navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingRight: 6,
    },
    header: {
        backgroundColor: "white",
    }
});