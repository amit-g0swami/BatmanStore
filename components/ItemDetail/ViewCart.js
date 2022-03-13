import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
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

    return (
        <>
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
        </>
    )
}