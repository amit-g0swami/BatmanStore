import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { firebase } from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
    const email = firebase.auth().currentUser.email;
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );
    const total = items
        .map((item) => Number(item.price.replace("₹", "")))
        .reduce((prev, curr) => prev + curr, 0);
    const totalINR = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    const addOrderToFireBase = () => {
        setLoading(true);
        const db = firebase.firestore();
        db.collection("users").doc(email).collection("orders")
            .add({
                items: items,
                // restaurantName: restaurantName,
                total: total,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("Home");
                }, 2500);
            });
    }

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalINR} ₹</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                    justifyContent: "center"
                                }}
                                onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 15 }}>CHECKOUT</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                    }}
                                >
                                    {total ? `${totalINR} ₹` : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 20,
                    zIndex: 999,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            alignItems: "center",
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: "relative",
                            justifyContent: "center"
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: "white", fontSize: 15 }}>VIEWCART</Text>
                        <Text
                            style={{
                                position: "absolute",
                                right: 20,
                                color: "white",
                                fontSize: 15,
                            }}
                        >
                            {total ? `${totalINR} ₹` : ""}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> : <></>
            }
            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../assets/animations/check-mark.json")}
                        autoPlay
                        speed={0.5}
                        loop={false}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },
});