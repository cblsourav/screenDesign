import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SaveBtn = ({ text, onPress, buttonStyle, txtStyle }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.savebtn, ...buttonStyle }}>
                <Text style={{ ...styles.last, ...txtStyle }} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    savebtn: {
        backgroundColor: "red",
        width: 280,
        height: 40,
        borderRadius: 4,
        alignSelf: "center",
        margin: 17,
        justifyContent: "center"
    },
    last: {
        alignSelf: "center",
        color: "white",
        fontWeight: "700",
        fontSize: 15
    }

})
{/* <TouchableOpacity onPress={onPress}>
    <View style={ExStyle.savebtn}>
        <Text style={ExStyle.last} >{text}</Text>
    </View>
</TouchableOpacity> */}
export default SaveBtn