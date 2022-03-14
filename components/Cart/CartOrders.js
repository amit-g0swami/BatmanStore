import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CartOrders({ navigation, itemsCount, shoppingData }) {
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
        <View>
            <Text>data</Text>
        </View>;

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