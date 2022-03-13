import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import React from 'react'

export default function LoadingScreen() {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="gray" />
        </View>
    )
}
const styles = StyleSheet.create({
    loader: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
    },
});