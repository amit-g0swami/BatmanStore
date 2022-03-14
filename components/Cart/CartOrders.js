import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, firebase } from "../../firebase";
import CartItems from "./CartItems";

export default function CartOrders({ navigation, itemsCount }) {
    const [cartData, setCartData] = useState();
    const email = firebase.auth().currentUser.email;

    useEffect(() => {
        db.collection("users").doc(email).collection("orders")?.onSnapshot((snapshot) => setCartData(snapshot.docs.map((doc) => ({
            id: doc.id,
            itemsDetails: doc.data(),
        }))))
    }, []);

    const NoItems = itemsCount == 0 ?
        <View style={styles.nodata}>
            <Image
                source={{
                    uri: "https://img.icons8.com/ios-filled/100/000000/empty-box.png",
                }}
                style={styles.icon}
            />
            <Text style={styles.text}>Your Cart is empty !</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>Shop Now</Text>
                </View>
            </TouchableOpacity>
        </View> :
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                paddingHorizontal: 10,
            }}
        >
            {cartData?.map((item, index) => (
                <CartItems key={index} item={item} />
            ))}
        </ScrollView>
        ;

    return (
        <>
            {NoItems}
        </>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 70,
        height: 70,
        marginLeft: 10,
        resizeMode: "contain",
    },
    nodata: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: "400",
        fontSize: 18, color: "black",
    },
    button: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        marginTop: 10,
        padding: 10,
        width: 150
    },
    buttontext: {
        fontWeight: "400",
        fontSize: 15,
        color: "white",
    }
});