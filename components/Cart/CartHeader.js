import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function CartHeader({ navigation }) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={{
                        uri: "https://img.icons8.com/ios-filled/50/000000/back.png",
                    }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 27.5,
    },
})