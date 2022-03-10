import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { firebase } from "../../firebase";

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('signed out')
    } catch (error) {
        console.log(error);
    }
};

export default function HeaderTabs({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/Images/logo.png")}
                />
                <Text>Store</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.push("Cart")}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>0</Text>
                    </View>
                    <Image
                        source={{
                            uri: "http://img.icons8.com/fluency-systems-regular/60/0000000/shopping-cart.png",
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignout}>
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
        backgroundColor: "#ff3250",
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