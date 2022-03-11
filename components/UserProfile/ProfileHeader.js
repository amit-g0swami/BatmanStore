import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { firebase } from '../../firebase';

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('signed out')
    } catch (error) {
        console.log(error);
    }
};

export default function ProfileHeader({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{ uri: "https://img.icons8.com/ios-filled/50/000000/back.png", }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleSignout}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/ios-filled/50/000000/logout-rounded.png",
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
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
});