import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Text } from '../../components'
import { AuthRoutes, StackNavigationProps } from '../../navigation/types';
import { Button } from '../../components/common/Button';
import { pallets } from '../../constant/colors';
import { LinearGradient } from 'expo-linear-gradient';
// import AppIcon from '../../assets/icons/Heading.svg'

const width = Dimensions.get('window').width;
export const Onboarding = ({ navigation }: StackNavigationProps<AuthRoutes, 'Onboarding'>) => {

    const slides = [
        { url: require('../../assets/icons/onbaording1.png'), text: 'Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere', logo: require('../../assets/icons/logo.png') },
        { url: require('../../assets/icons/onboarding6.png'), text: 'Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More', logo: require('../../assets/icons/logo.png') },
        { url: require('../../assets/icons/onboarding3.png'), text: 'Logistics ....And We will Deliver it all Too, In Record Time', logo: require('../../assets/icons/logo.png') },
        { url: require('../../assets/icons/onboarding4.png'), text: 'Inspire Your Medical Practice Through the Power of Collaboration and Knowledge Sharing', logo: require('../../assets/images/logodark.png') },

    ];
    const ref = useRef<any>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollIndex = () => {
        const nextSlideIndex = currentIndex + 1;
        if (nextSlideIndex !== slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentIndex(nextSlideIndex);
        }
    };
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        if (currentIndex !== slides.length - 1) {
            timer = setTimeout(() => {
                scrollIndex();
            }, 2000);
        } else {
            timer = setTimeout(() => {
                // Call your function here after 5 seconds

                console.log('DONe')
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, navigation, slides.length]);

    const updateIndex = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
        const contentOffset = e.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffset / width);
        setCurrentIndex(newIndex);
    };
    return (

        <View style={styles.container}>
            <View style={styles.flowContainer}>
                <FlatList
                    ref={ref}
                    data={slides}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={updateIndex}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.swipeCont}>

                                <ImageBackground source={item.url} resizeMode='cover' style={{ width: width, flex: 1, }}>
                                    <View style={{ position: 'absolute', marginTop: '15%' }}>
                                        <Image source={item.logo} />
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 0, y: 0.3 }}
                                        locations={[0, 1]}
                                        colors={['#2B2B2B', '#0000']}
                                        style={{ flex: 1, width: width, marginTop: '80%', overflow: 'hidden' }}
                                    >
                                        <View style={{ position: 'absolute', top: -10, padding: 15 }}>
                                            <Text style={{ fontSize: 30, color: pallets.white, }} fontWeight='600'>
                                                {item.text}
                                            </Text>
                                            <Text style={{ color: pallets.red }}>With Hospyta</Text>
                                        </View>

                                        <View style={{ marginTop: 'auto', marginBottom: '35%', paddingHorizontal: 15 }}>

                                            <Button onPress={() => navigation.navigate('Login')} style={{ marginBottom: 20 }} text='Sign In' />
                                            <Button onPress={() => navigation.navigate('Signup')} backgroundColor={pallets.transparent} style={{ borderWidth: 1, borderColor: pallets.white }} text='Sign Up' />
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </View>
                        );
                    }}
                />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        flexGrow: 1,
        width,
        marginTop: '-3%',
        overflow: 'hidden'
        // alignSelf: 'center',
    },
    skipView: {
        marginTop: '20%',
        flex: 0.4,
        justifyContent: 'space-between',
    },
    swipeCont: {
        // width,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    swipeLabel: {
        // color: palette.textWhite,
        textAlign: 'center',
    },
    swipeDesc: {
        // color: palette.rtGreen,
        textAlign: 'center',
        fontSize: 16,
    },
    swipeTextContainer: {
        paddingHorizontal: 42,
    },
    btnContain: {
        paddingHorizontal: 20,
        width: '100%',
        flex: 0.2,
        justifyContent: 'space-between',
    },
    indicator: {
        height: 5,
        width: 5,
        backgroundColor: '#CFE939',
        marginHorizontal: 3,
        borderRadius: 0.714286,
    },
    flowContainer: {
        width,
        flex: 1,
    },
});
