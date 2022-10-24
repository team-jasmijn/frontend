import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export default class StyledInput extends React.Component {
    constructor(props: {labelText : String} ) {
        super(props);
    }
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.labelText}>{this.props.labelText}</Text>
                <TextInput defaultValue={""} style={styles.input}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        marginBottom: 15,
    },
    input: {
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        width: 240,
        height: 40,

    },
    labelText: {
        // marginLeft: 95,
    }
});