import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: 'MP Sharbati Atta',
        image_url: 'https://img00.deviantart.net/c930/i/2017/296/d/7/spikes__wheat__flour_on_a_transparent_background__by_prussiaart-dbrhdwh.png',
        categories: ['Atta', 'Wheat'],
        price: '120',
        reviews: 124,
        rating: 4.5,
        prices: [{ price: "120", weight: "500g" }, { price: "200", weight: "1kg" }, { price: "250", weight: "5kg" }, { price: "500", weight: "10kg" }, { price: "750", weight: "20kg" }]
    },
    {
        name: 'TURVAR DAL (ARHAR)',
        image_url: 'http://pluspng.com/img-png/dal-png-organic-arhar-dal-420.png',
        categories: ['Dal', 'ARHAR'],
        price: '80',
        reviews: 144,
        rating: 3.7,
        prices: [{ price: "80", weight: "500g" }, { price: "150", weight: "1kg" }]
    },
    {
        name: "Mung Dhuli",
        image_url: 'http://www.pngall.com/wp-content/uploads/4/Mung-Bean-PNG-Clipart.png',
        categories: ['Dal', 'Mung'],
        price: '140 - 160',
        reviews: 14,
        rating: 4.9,
        prices: [{ price: "140", weight: "500g" }, { price: "220", weight: "1kg" }]
    }]

export default function ShoppingItem({ navigation }) {
    return (
        <>
            {
                localRestaurants.map((restaurant, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{ marginBottom: 30 }}
                        activeOpacity={1}
                        onPress={() => navigation.navigate("ItemDetail", {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.reviews,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                            prices: restaurant.prices,
                        })}
                    >
                        <View style={{ marginTop: 15, backgroundColor: 'white' }}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} price={restaurant.price} />
                        </View>
                    </TouchableOpacity>
                ))}
        </>
    );
}
const RestaurantImage = ({ image }) => {
    return (
        <>
            <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
            <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
                <MaterialCommuityIcons name='heart-outline' size={24} color='#fff' />
            </TouchableOpacity>
        </>
    );
};

const RestaurantInfo = ({ name, rating, price }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
            }}
        >
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>{price} ₹/kg</Text>
            </View>
            <View
                style={{
                    backgroundColor: '#eee',
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>{rating}</Text>
            </View>
        </View>
    );
};