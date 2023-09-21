/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { pallets } from '../../../constant/colors';
import ListItem from '../../../components/common/ListItem';
import { LocationIcon, LogoutIcon, PostsIcon, SettingsIcon, SupportIcon, WalletIcon } from '../../../assets/icons';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../../../components';
import { DrawerActionType, DrawerRouterOptions } from '@react-navigation/native';
import { AuthContext } from '../../../contexts';

interface ProfileSettingProps {
    badgeText?: string;
    icon: JSX.Element;
    subText?: string;
    text: string;
    route?: string;

}
const CustomDrawerContent = (props: any) => {
    const { navigation } = props;
    const { changeNav } = useContext(AuthContext) as AuthContextType;

    const handleCloseDrawer = () => {
        navigation.closeDrawer();
    };
    const profileSettingOptions: ProfileSettingProps[] = [
        {
            icon: <WalletIcon />,
            text: 'Wallet',
        },
        {
            icon: <LocationIcon />,
            text: 'Location',
        },
        {
            icon: <PostsIcon />,
            text: 'My Posts',
        },

        {
            icon: <SettingsIcon />,
            text: 'Settings',
        },
        {
            icon: <SupportIcon />,
            text: 'Live Support',
        },
        {
            icon: <SettingsIcon />,
            text: 'Suggest Feature',
        },

        {
            icon: <LogoutIcon />,
            text: 'Log-out',
            route: 'Live Support',

        },

    ];
    const navigateToScreen = (screen: string) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#4425F5', }}>

                <View style={{ paddingVertical: 10, marginTop: '10%' }} >

                    <TouchableOpacity
                        onPress={handleCloseDrawer}
                        style={{
                            marginHorizontal: 15,
                            marginRight: 20,
                            alignSelf: 'flex-end',

                        }}>

                        <Ionicons name='close' size={32} />
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginBottom: 0,
                    }}>
                        <Image resizeMode="contain" source={require('../../../assets/icons/avatar3.png')} style={styles.image} />
                        <Text style={{ color: pallets.white, fontSize: 16 }} fontWeight='600'>
                            Welcome, Dr
                            {'\n'}
                            <Text style={{ color: pallets.white, fontSize: 10 }}>

                                what do you want today?
                            </Text>
                            {/* { token?.user?.email} */}
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ marginTop: 10 }}>

                {profileSettingOptions.map((item, e) => {
                    return (
                        <TouchableOpacity
                            style={{ padding: 10, marginVertical: 10, marginTop: 15 }}
                            onPress={() => {
                                if (item.route) {
                                    handleCloseDrawer()
                                    setTimeout(() => {
                                        changeNav(false)
                                    }, 300)
                                }
                            }}
                            key={e}
                        >
                            <ListItem
                                title={item.text}
                                icon={item.icon}
                            />
                        </TouchableOpacity>
                    );
                })}

            </ScrollView>
            {/* <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Swaps')}>
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Settings')}>
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 50,
        // paddingHorizontal: 20,
    },
    image: {
        width: 70, height: 70, borderRadius: 50, marginHorizontal: 10,
    },
    drawerItem: {
        marginBottom: 20,
    },
    drawerItemText: {
        fontSize: 18,
    },
    verificationName: { color: pallets.white, fontSize: 18 },
    versionNumber: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CustomDrawerContent;
