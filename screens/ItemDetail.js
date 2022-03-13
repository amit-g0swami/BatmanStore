import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/ItemDetail/About';
import MenuItems from '../components/ItemDetail/MenuItems';
import ViewCart from '../components/ItemDetail/ViewCart';

export default function ItemDetail({ navigation, route }) {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1.8} style={{ height: 1.8 }} />
            <MenuItems prices={route.params.prices} restaurantName={route.params.name} />
            <ViewCart navigation={navigation} itemName={route.params.name} style={{ position: "absolute", zIndex: 999 }} />
        </View>
    )
}