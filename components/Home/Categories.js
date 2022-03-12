import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { items } from "../../assets/Data/categoriesData";

export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            paddingVertical: 10,
            backgroundColor: '#fff',
            marginHorizontal: 10,
            marginRight: 0,
            marginLeft: 0
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* loop starts here */}
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 20 }}>
                        <Image
                            source={items[index].image}
                            style={{ width: 50, height: 40, resizeMode: 'contain' }}
                        />
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>
                            {items[index].text}
                        </Text>
                    </View>
                ))
                }
                {/* loop ends here */}
            </ScrollView >
        </View >
    );
}