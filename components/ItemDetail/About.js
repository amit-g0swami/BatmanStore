import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'react-native';

export default function About(props) {
    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((cat) => cat).join(' . ');

    const description = `${formattedCategories} ${price ? ' - ' + price + " ₹/kg" : ''
        } - ${rating} - 🌟 (${reviews} +)`;

    return (
        <View style={{ height: 280, marginTop: 30 }}>
            {/* RestaurantImage */}
            <RestaurantImage image={image} />
            {/* RestaurantTitle */}
            <RestaurantName title={name} />
            {/* RestaurantDescription */}
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => {
    return (
        <Image
            source={{ uri: props.image }}
            style={{ width: '100%', height: 180 }}
        />
    );
};

const RestaurantName = (props) => {
    return (
        <Text
            style={{
                fontSize: 29,
                fontWeight: '600',
                marginTop: 10,
                marginHorizontal: 15,
            }}
        >
            {props.title}
        </Text>
    );
};

const RestaurantDescription = (props) => {
    return (
        <Text
            style={{
                fontSize: 15.5,
                fontWeight: '400',
                marginTop: 10,
                marginHorizontal: 15,
            }}
        >
            {props.description}
        </Text>
    );
};