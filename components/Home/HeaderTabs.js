import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function HeaderTabs({ navigation, cartData }) {
    const itemsCount = cartData ? Object.keys(cartData).length : 0;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/Images/logo.png")}
                />
                <Text>Shivay-atta-chakki</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.push("ContactUs")}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/ios/100/000000/info--v1.png",
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push("Cart")} itemsCount={itemsCount}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>{itemsCount}</Text>
                    </View>
                    <Image
                        source={{
                            uri: "http://img.icons8.com/fluency-systems-regular/60/0000000/shopping-cart.png",
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("UserProfile")} >
                    <Image
                        source={{
                            uri: "http://img.icons8.com/ios-filled/60/0000000/apple-settings.png",
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    logo: {
        width: 45,
        height: 60,
        resizeMode: "contain",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 33,
        height: 33,
        marginLeft: 10,
        resizeMode: "contain",
    },
    unreadBadge: {
        backgroundColor: "gray",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: "600",
    },
});