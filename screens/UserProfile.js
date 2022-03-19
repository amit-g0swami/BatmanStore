import { View, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import ProfileHeader from '../components/UserProfile/ProfileHeader'
import ProfileInfo from '../components/UserProfile/ProfileInfo'
import { db, firebase } from "../firebase";

export default function UserProfile({ navigation }) {
    const [userData, setUserData] = useState([]);
    const email = firebase.auth().currentUser.email;

    useEffect(() => {
        db.collection("users").doc(email).get().then(doc => {
            const newData = doc.data();
            setUserData(newData);
        });
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={{ marginBottom: 20 }}>
                <ProfileHeader navigation={navigation} />
            </View>
            <Divider width={1} orientation="vertical" />
            <ProfileInfo userdata={userData} />
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