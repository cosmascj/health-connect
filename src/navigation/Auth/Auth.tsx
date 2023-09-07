import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { AuthRoutes } from '../types';
import { AuthContext } from '../../contexts';
import { Login, Onboarding, Signup } from '../../modules';


const { Group, Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export default function AuthNavigator() {
    const { onboarded } = useContext(AuthContext) as AuthContextType;
    console.log(onboarded, 'ress')
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {!onboarded && (
                <Group>
                    <Screen name="Onboarding" component={Onboarding} />
                </Group>
            )}
            <Group>
                <Screen name="Login" component={Login} />
                <Screen name="Signup" component={Signup} />

            </Group>
        </Navigator>
    );
}
