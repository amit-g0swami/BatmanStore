import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import ProfileHeader from '../components/UserProfile/ProfileHeader'
import ProfileInfo from '../components/UserProfile/ProfileInfo'

export default function UserProfile({ navigation }) {
    return (
        <SafeAreaView style={styles.root}>
            <View style={{ marginBottom: 20 }}>
                <ProfileHeader navigation={navigation} />
            </View>
            <Divider width={1} orientation="vertical" />
            <ProfileInfo />
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
});