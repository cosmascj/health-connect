/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { pallets } from '../../../constant/colors';
import CustomDrawerContent from './CustomDrawer'
import { Home } from '../../../modules/main';
import TabNavigator from './Tab';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                headerStyle: {
                },
                headerTintColor: pallets.black,
                headerTitleStyle: {
                    color: pallets.primaryTextColor,
                },
            }}
        >
            <Drawer.Screen name="Home" component={Home}
                options={{ headerShown: false }}
            />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
