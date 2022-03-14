import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from "lottie-react-native";

export default function ProfileInfo({ userdata }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const UserData = isLoading == true ?
        <View style={{
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
        }}>
            <LottieView
                style={{ height: 200 }}
                source={require("../../assets/animations/scanner.json")}
                autoPlay
                speed={3}
            />
        </View>
        : <View style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {userdata.profile_picture ?
                    <Image source={{
                        // uri: `${userdata.profile_picture}`,
                        uri: "https://img.icons8.com/carbon-copy/100/000000/user.png",
                    }}
                        style={styles.story}
                    /> : null
                }
                <View>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 28 }}>{userdata.username}</Text>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 14 }}>{userdata.email}</Text>
                </View>
            </View>
        </View>;

    return (
        <>
            {UserData}
        </>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 95,
        height: 95,
        margin: 10,
        resizeMode: "contain",
        borderRadius: 50,
    },
});