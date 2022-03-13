import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import { contactData } from '../assets/Data/contactData';

export default function ContactUs({ navigation }) {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/ios-filled/50/000000/back.png",
                        }}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Contact Us</Text>
            </View>
            <Divider width={1} orientation="vertical" />
            <View style={styles.nodata}>
                {contactData.map((data, index) => <View style={styles.assign} key={index}>
                    <Image source={{ uri: `${data.image}` }} style={styles.icon} />
                    <Text style={styles.text}>{data.text}</Text>
                </View>
                )}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === "android" ? 35 : 0,
        backgroundColor: "#fff",
        flex: 1,
        padding: 10,
    },
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    headerText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 27.5,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: "contain",
    },
    nodata: {
        position: 'absolute',
        marginTop: 95,
        alignItems: 'flex-start',
        justifyContent: "center",
        width: 320,
    },
    assign: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    text: {
        fontWeight: "400",
        fontSize: 16,
        color: "black",
        marginLeft: 10,
        marginRight: 10
    },
});