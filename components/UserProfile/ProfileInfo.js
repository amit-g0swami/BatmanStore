import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { firebase } from "../../firebase";

export default function ProfileInfo() {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={{
                        uri: "https://img.icons8.com/ios-filled/100/000000/user-male-circle.png",
                    }}
                    style={styles.story}
                />
                <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>{firebase.auth().currentUser.email}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    story: {
        width: 50,
        height: 50,
        margin: 10,
        resizeMode: "contain"
    },
});