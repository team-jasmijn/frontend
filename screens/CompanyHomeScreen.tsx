import {View} from '../components/Themed';
import TopBar from '../components/TopBar';
import {ScrollView, StyleSheet} from 'react-native';
import Notification from '../components/Notification';
import React, {useEffect, useState} from 'react';
import Flirt from '../types/Flirt';
import backendFetch from '../lib/backendFetch';
import Loading from '../components/Loading';

export default function CompanyHomeScreen() {
    return (
        <ScrollView style={styles.content}>
            <Notification
                title={'You received new flirts'}
                key={'flirts'}
                message={'Dit is een test (geen data)'}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 45,
        alignItems: 'center',
        flexDirection: 'column',

    },
    content: {
        flex: 5,
        marginVertical: 200
    },
    button: {
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        width: 240,
        height: 40,
        margin: 30,
    },
    icon: {
        alignSelf: 'flex-start',
    },
    loginText: {
        fontSize: 20,
        color: '#334155',
    },
    createView: {
        marginTop: 80,
        backgroundColor: '#F1F5F9',
    },
    createButton: {
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#334155',
        borderWidth: 2,
        padding: 4,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        width: 230,
        height: 35,
    },
    createText: {
        alignSelf: 'center',
    },
});
