/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';



import { TabRoutes } from '../../types/main';
import CalenderIcon from '../../../assets/icons/calendar-2.svg'
import ShopIcon from '../../../assets/icons/shop.svg'
import ProfileIcon from '../../../assets/icons/person-icon.svg'
import Icon3 from '../../../assets/icons/Vector.svg'
import { Text } from '../../../components';
import { Account, Health, Home, Shedule } from '../../../modules/main';
import AppNavigator from '../AppNavigator';
const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>();

export default function TabNavigator() {
    const navigation = useNavigation();


    return (
        <Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    const name = getTabIcon(route, focused);

                    return name
                },
                tabBarLabel: ({ color }) => {
                    return (
                        <Text
                            style={{
                                color: color,
                                fontSize: 10,
                                padding: Platform.OS === 'android' ? 10 : undefined,
                            }}>
                            {route.name}
                        </Text>
                    );
                },
                tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10 }],

            })
            }
        >
            <>
                <Screen name="Home" component={AppNavigator} />
                <Screen name="Profile" component={Account} />
                <Screen name="Notification" component={Account} />
                <Screen name="Shedule" component={Shedule} />
                <Screen name="Calender" component={Health} />


            </>

        </Navigator>
    );
}
const getTabIcon = (
    route: RouteProp<TabRoutes, keyof TabRoutes>,
    focused: boolean,
): JSX.Element | null => {
    switch (route.name) {
        case 'Home':
            return focused ? <Icon3 /> : <Icon3 />;
        case 'Profile':
            return focused ? <ProfileIcon /> : <ProfileIcon />;
        case 'Notification':
            return focused ? <CalenderIcon /> : <CalenderIcon />;
        case 'Shedule':
            return focused ? <CalenderIcon /> : <CalenderIcon />;

        case 'Calender':
            return focused ? <CalenderIcon /> : <CalenderIcon />;
        default:
            return null;
    }
};
