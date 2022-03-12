import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const deviceHeight = Dimensions.get('window').height;

export default function MenuItems({ prices }) {
    return (
        <View style={{ height: deviceHeight - 281.8 }}>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicatora={true}
                contentContainerStyle={{ paddingBottom: 400 }}>
                {prices.map((food, index) => (
                    <View key={index}>
                        <View key={index} style={styles.menuItem}>
                            <BouncyCheckbox
                                fillColor='gray'
                                iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                            />
                            <FoodInfo food={food} />
                            <FoodCount />
                        </View>
                        <Divider
                            width={0.5}
                            orientation='vertical'
                            style={{ marginHorizontal: 20 }}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const FoodInfo = (props) => {
    return (
        <View style={{ justifyContent: 'space-evenly', flex: 1, }}>
            <Text style={styles.title}>{props.food.weight}</Text>
            <Text>{props.food.price} ₹</Text>
        </View>
    );
};

const FoodCount = () => {
    return (
        <View>

        </View>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: '600',
    },
});