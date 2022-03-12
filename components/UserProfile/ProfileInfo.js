import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileInfo({ userdata }) {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {userdata.profile_picture ?
                    <Image source={{
                        uri: `${userdata.profile_picture}`,
                    }}
                        style={styles.story}
                    /> : null
                }
                <View>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 22 }}>{userdata.username}</Text>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>{userdata.email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 60,
        height: 60,
        margin: 10,
        resizeMode: "contain",
        borderRadius: 50,
    },
});