import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useReducer, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { QueryCache } from "react-query";


interface Props {
    children: React.ReactNode;
}

const initialState: AuthState = {
    loading: true,
    onboarded: false,
    token: null,
    user: null,
    nav: false,
    appNav: false
};
//this context is configure to funtion properly with an API
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_ONBOARDED':
            return { ...state, onboarded: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'Change_Nav':
            return { ...state, loading: action.payload };
        case 'LOGOUT':
            console.log('🚀 ~ file: AuthContext.tsx:41 ~ authReducer ~ state:', state);
            return {
                ...initialState,
                loading: false,
                onboarded: state.onboarded,
            };
        default:
            return state;
    }
};
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextProvider = ({ children }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [appNav, setNav] = useState(false)
    const queryCache = new QueryCache({});
    const logout = () => {
        queryCache.clear();
        dispatch({ type: 'LOGOUT' });
        AsyncStorage.multiRemove(['user', 'token']);
    };
    const setIsOnboarded = () => {
        dispatch({
            payload: true,
            type: 'SET_ONBOARDED',
        });
    };

    const setLoading = (loading: boolean) => {
        dispatch({
            payload: loading,
            type: 'SET_LOADING',
        });
    };
    const changeNav = (val: boolean) => {
        setNav(val)
        // dispatch({
        //     payload: true,
        //     type: 'Change_Nav',
        // });
    }
    const setUser = async (userData: UserTokenType) => {
        dispatch({
            payload: userData,
            type: 'SET_USER',
        });
        AsyncStorage.setItem('user', JSON.stringify(userData));
    };
    const getUserData = async () => {

        try {
            const onboarded = await AsyncStorage.getItem('isOnboarded');

            setLoading(false);
        } catch (error) {
            const onboarded = await AsyncStorage.getItem('isOnboarded');

            console.warn(error, 'ereer', onboarded, 'looo');
            logout();
        }
    };

    useEffect(() => {
        getUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const authState: AuthContextType = {
        ...state,
        logout,
        setIsOnboarded,
        setUser,
        changeNav,
        appNav
    };

    return (
        <View style={{ flex: 1 }}>
            {state.loading ? (
                <ActivityIndicator />
            ) : (
                <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
            )}
        </View>
    );
};

export default AuthContextProvider;