import { View, Text } from 'react-native'
import React from 'react'

export default function CartItems({ item }) {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#999",
                alignItems: "center"
            }}
        >
            <View>
                <Text style={{ fontWeight: "600", fontSize: 16, color: "black" }}>{item?.itemsDetails?.items?.[0].restaurantName}
                    {/* {item?.itemsDetails?.items?.[0].weight} */}
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 10, color: "gray" }}>OrderID {item.id}</Text>
            </View>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{item?.itemsDetails?.total} ₹</Text>
        </View>
    )
}