import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
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
    const [changeIcon, setChangeIcon] = useState(false);
    return (
        <>
            <Image source={{ uri: image }} style={{ width: '100%', height: 180, justifyContent: 'center' }} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => setChangeIcon(!changeIcon)}>
                {changeIcon == true ? <MaterialCommuityIcons name='heart' size={28} color='red' /> : <MaterialCommuityIcons name='heart-outline' size={28} color='gray' />}
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
                <Text style={{ fontSize: 13, color: 'gray' }}>{price}</Text>
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