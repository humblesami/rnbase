import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NavButton({ onPress, icon, txt='' }) {
    //
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.buttonWithText}>
                <Ionicons
                    name={icon ? icon : "ios-add"}
                    color="orange"
                    size={20}
                />
                <View style={txt ? {paddingTop: 10, paddingLeft:10}: {}}>
                    <Text>{txt}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWithText: {
        flex: 1,
        borderColor: 'green',
        paddingTop: 20,
        paddingBottom: 20,
        flexWrap: "wrap",
        flexDirection: "row",
    },
});

export default NavButton;