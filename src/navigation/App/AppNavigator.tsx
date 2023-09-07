import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { DrawerStack } from './Navigators';
import { AppRoutes } from '../types/main';

// import Notifications from '../../screens/Notifications';

// const Drawer = createDrawerNavigator();
const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();

export default function AppNavigator() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Group
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                }}
            >
                <Screen name="Drawer" component={DrawerStack} />


                {/* <Screen name="TabStack" component={TabStack} /> */}

            </Group>
        </Navigator>
    );
}
