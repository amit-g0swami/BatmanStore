import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Search() {
    const [data, Setdata] = useState("");
    return (
        <View style={{
            marginTop: 15,
            flexDirection: 'row',
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
            }}
            >
                <View style={{ marginLeft: 10 }}>
                    <Ionicons name='search-sharp' size={24} />
                </View>
                <TextInput
                    style={{
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginLeft: 4
                    }}
                    placeholder='Search...'
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginRight: 8,
                    padding: 9,
                    borderRadius: 30,
                    alignItems: 'center',
                }}
            >
                <AntDesign
                    name='clockcircle'
                    size={11}
                    style={{ marginRight: 6 }}
                />
                <Text>Search</Text>
            </View>
        </View>
    )
}