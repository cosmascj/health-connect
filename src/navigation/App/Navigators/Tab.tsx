/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity, View } from 'react-native';



import { TabRoutes } from '../../types/main';
import CalenderIcon from '../../../assets/icons/calendar-2.svg'
import ShopIcon from '../../../assets/icons/shop.svg'
import ProfileIcon from '../../../assets/icons/person-icon.svg'
import Icon3 from '../../../assets/icons/Vector.svg'
import { Text } from '../../../components';
import { Account, Health, Home, Shedule } from '../../../modules/main';
import AppNavigator from '../AppNavigator';
import { ConnectIconIcon } from '../../../assets/icons';
import { pallets } from '../../../constant/colors';
const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>();

export default function TabNavigator() {
    const navigation = useNavigation();
    const TabIcon = ({ name, focused, icon }: { name: string, focused: boolean, icon: ReactNode }) => {
        return (
            <View style={{ marginStart: 20, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 6, flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? 'rgba(68, 37, 245, 0.1)' : pallets.transparent }}>
                {icon}
                {/* {focused && <Text style={{ color: 'blue' }}>{name}</Text>} */}
                {focused && <Text style={{ marginLeft: 5, color: 'blue' }}>{name}</Text>}
            </View>
        );
    };

    return (
        <Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const name = getTabIcon(route, focused)
                    return <TabIcon focused={focused} icon={name} name={route.name} />
                    // <TabIcon name={route.name} focused={focused} />
                },
                // tabBarIcon: ({ focused, size, color }) => {
                //     const name = getTabIcon(route, focused);

                //     return name
                // },
                tabBarLabel: ({ color, focused }) => {
                    return (
                        focused ?
                            null
                            : null
                    );
                    // return (
                    //     <Text
                    //         style={{
                    //             color: color,
                    //             fontSize: 10,
                    //             padding: Platform.OS === 'android' ? 10 : undefined,
                    //         }}>
                    //         {route.name}
                    //     </Text>
                    // );
                },
                tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10, flexDirection: 'row' }],
                // tabBarStyle: { height: 60, margin: 10, },

            })
            }
        >
            <>
                <Screen name="Home" component={AppNavigator} />
                <Screen name="Calender" component={Health} />
                <Screen name="Notification" component={Account} />
                <Screen name="Shedule" component={Shedule} />
                <Screen name="Profile" component={Account} />


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
        case 'Notification':
            return focused ? <ConnectIconIcon /> : <ConnectIconIcon />;
        case 'Calender':
            return focused ? <CalenderIcon /> : <CalenderIcon />;
        case 'Shedule':
            return focused ? <ShopIcon /> : <ShopIcon />;
        case 'Profile':
            return focused ? <ProfileIcon /> : <ProfileIcon />;

        default:
            return null;
    }
};
