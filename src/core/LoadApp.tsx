import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer, Theme } from '@react-navigation/native'
import { pallets } from '../constant/colors';
import { useContext } from 'react';
import { AuthContext } from '../contexts';
import { AuthNavigator } from '../navigation';
import TabNavigator from '../navigation/App/Navigators/Tab';

export default function LoadApp() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 * 60 * 24
            },
            mutations: {
                retry: false
            }
        }
    })
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
        'GothamPro-Regular': require('../assets/fonts/gotham/GothamPro-Medium.ttf'),
        'GothamPro-Bold': require('../assets/fonts/gotham/GothamPro-Bold.ttf'),
        'Axiforma-Regular': require('../assets/fonts/axiforma/Axiforma-Regular.ttf'),
        'Axiforma-Bold': require('../assets/fonts/axiforma/Axiforma-Bold.ttf'),
    })



    if (!fontsLoaded) {
        return null
    }

    const theme: Theme = {
        colors: {
            background: pallets.white,
            border: pallets.border,
            card: pallets.white,
            notification: pallets.white,
            primary: pallets.primaryTextColor,
            text: pallets.primaryTextColor,
        },
        dark: false,
    };
    const { appNav } = useContext(AuthContext) as AuthContextType;
    // the appNav is used to Toggle for auth pages to Main App
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar style="auto" />
            <NavigationContainer {...{ theme }}>
                {appNav ? <TabNavigator /> : <AuthNavigator />}

            </NavigationContainer>

        </QueryClientProvider>
    );
}


