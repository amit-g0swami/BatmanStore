import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import Search from '../components/Home/Search';
import Categories from '../components/Home/Categories';
import ShoppingItem from '../components/Home/ShoppingItem';
import { db, firebase } from "../firebase";

export default function Home({ navigation }) {
    const [cartData, setCartData] = useState();
    const email = firebase.auth().currentUser.email;
    useEffect(() => {
        db.collection("users").doc(email).collection("orders")?.onSnapshot((snapshot) => setCartData(snapshot.docs.map((doc) => ({
            id: doc.id,
            items: doc.data()
        }))))
    }, []);

    return (
        <SafeAreaView style={[styles.androidSafeArea]}>
            <View style={styles.header}>
                <HeaderTabs navigation={navigation} cartData={cartData} />
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