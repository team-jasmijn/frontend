import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Text, View} from '../components/Themed';
import {RootStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import User from '../types/User';
import getLoggedInUser from '../lib/getLoggedInUser';
import Flirt from '../types/Flirt';
import Logout from '../lib/Logout';
import StudentHomeScreen from "./StudentHomeScreen";
import ModeratorHomeScreen from "./ModeratorHomeScreen";
import CompanyHomeScreen from "./CompanyHomeScreen";
import Loading from "../components/Loading";
import TopBar from "../components/TopBar";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'HomeScreen'
>;

export interface HomeScreenProps {
    navigation: ProfileScreenNavigationProp;
}

export default function HomeScreen({
                                       navigation: {navigate},
                                   }: HomeScreenProps) {
    const [user, setUser] = useState<User>();
    const [refresh, setRefresh] = useState(Math.random());

    useEffect(() => {
        getLoggedInUser().then(setUser).catch(alert);
    }, [refresh]);

    async function CustomLogout() {
        await Logout(navigate);
        setRefresh(Math.random());
    }

    switch (user?.role) {
        case 'Student':
            return (
                <View style={styles.main}>
                    <TopBar ScreenName='Logout' Press={CustomLogout}/>
                    <StudentHomeScreen/>
                </View>);
        case 'Moderator':
            return (
                <View style={styles.main}>
                    <TopBar ScreenName='Logout' Press={CustomLogout}/>
                    <ModeratorHomeScreen/>
                </View>);
        case 'Company':
            return (
                <View style={styles.main}>
                    <TopBar ScreenName='Logout' Press={CustomLogout}/>
                    <CompanyHomeScreen/>
                </View>);
    }

    return (<Loading/>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 45,
        alignItems: 'center',
        flexDirection: 'column',
    }
});
