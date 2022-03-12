import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { localRestaurants } from '../../assets/Data/itemsData';

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
                <MaterialCommuityIcons name='heart-outline' size={24} color='white' />
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