import { Image, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native'
import React, { ComponentProps, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { PageWrapper, Text } from '../../components'
import { pallets } from '../../constant/colors'
import DrawerIcon from '../../assets/icons/drawerIcon.svg'
import { DrawerActions } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import CalenderIcon from '../../assets/icons/calendardark.svg'
import MedicalIcon from '../../assets/icons/medicalIcon.svg'
import layout from '../../constant/layout';
import BannerIcon from '../../assets/icons/homecard1.svg'
export const Home = ({ navigation }: any) => {
    const [dotIndex, setIndex] = useState<number | null>(0);
    const [dotIndex1, setIndex1] = useState<number | null>(0);
    const [isAvailable, setAvailable] = useState(true)
    const onViewableItemsChanged = useRef<ComponentProps<typeof FlatList>['onViewableItemsChanged']
    >(({ viewableItems }) => {
        if (viewableItems?.[0]) {
            setIndex(viewableItems?.[0]?.index);
        }
    });
    const onViewableItemsChanged1 = useRef<ComponentProps<typeof FlatList>['onViewableItemsChanged']
    >(({ viewableItems }) => {
        if (viewableItems?.[0]) {
            setIndex1(viewableItems?.[0]?.index);
        }
    });

    const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 });

    const data = [...Array(3)]
    const dataMed = [...Array(3)]
    return (
        <PageWrapper>

            <View style={styles.container}>
                <ScrollView style={{ flexGrow: 1, }} >

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ height: 70, width: 70 }} source={require('../../assets/icons/avatar3.png')} />
                        <View style={{ alignItems: 'center', marginStart: 10 }}>
                            <Text style={{ fontSize: 18 }} fontWeight='600'>
                                Welcome, Dr
                                {'\n'}
                                <Text style={{ fontSize: 10, color: pallets.textSecondary }}>
                                    what do you want today?
                                </Text>
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.drawer}>
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            style={[styles.drawer, { padding: 14 }]}>
                            <DrawerIcon />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[styles.sectionWhite, { marginBottom: 10, paddingHorizontal: 0 }]}>
                        <FlatList
                            data={data}
                            decelerationRate="fast"
                            snapToInterval={layout.cards.walletWidth + 16}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            pagingEnabled
                            viewabilityConfig={viewabilityConfig.current}
                            onViewableItemsChanged={onViewableItemsChanged.current}
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View style={{ width: 16 }} />}
                            ListFooterComponent={<View style={{ width: 16 }} />}
                            renderItem={({ index }) => {
                                const last = index === data.length - 1;

                                return (
                                    <View style={[styles.bannerContainer, { marginRight: last ? 0 : 16 }]}>
                                        <BannerIcon />
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={styles.indicators}>
                        {[...Array(3)].map((_, i) => (
                            <View
                                key={i}
                                style={[styles.indicator, dotIndex === i && styles.indicatorActive]}
                            />
                        ))}
                    </View>

                    <View style={[styles.available, { backgroundColor: isAvailable ? 'rgba(62, 182, 27, 0.08)' : '#ffcccb' }]}>
                        <Text>
                            {isAvailable ? 'I am available' : 'Not Available at the moment'}
                        </Text>
                        <View style={{ flex: 0.3, position: 'absolute', right: -1, padding: 20 }}>

                            <Switch
                                value={isAvailable}
                                onChange={() => setAvailable(() => !isAvailable)}
                            />
                        </View>
                    </View>

                    <View style={styles.shedeule}>
                        <CalenderIcon />
                        <Text>
                            Schedule appointment calender
                        </Text>
                        <Ionicons color={pallets.black} name='arrow-forward' size={20} />
                    </View>

                    <View style={{ marginVertical: 20, marginTop: 28 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10 }}>
                            <Text style={{ fontSize: 16 }} fontWeight='600'>Community Feed</Text>
                            <Text style={{ color: '#6798E1', fontSize: 14 }}>View All </Text>
                        </View>
                        <FlatList
                            data={[...Array(3)]}
                            contentContainerStyle={{ marginTop: 15, marginStart: -5 }}
                            decelerationRate="fast"
                            snapToInterval={layout.cards.walletWidth + 16}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View style={{ width: 16 }} />}
                            ListFooterComponent={<View style={{ width: 16 }} />}
                            renderItem={({ index }) => {
                                const last = index === data.length - 1;

                                return (
                                    <View style={[styles.bannerContainer, { marginRight: last ? 0 : 12 }]}>
                                        {/* <BannerIcon2 /> */}
                                        <Image resizeMode='stretch' style={{ width: '95%' }} source={require('../../assets/images/Rectangle.png')} />
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={{ marginVertical: 20, marginTop: 28 }}>
                        <View style={styles.shopbody}>
                            <Text style={{ fontSize: 16 }} fontWeight='600'>Shop for Medical Devices</Text>
                            <Text style={{ color: '#6798E1', fontSize: 14 }}>View All </Text>
                        </View>

                        <FlatList
                            data={dataMed}
                            contentContainerStyle={{ marginTop: 15, }}
                            decelerationRate="fast"
                            snapToInterval={layout.cards.walletWidth + 16}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View style={{ width: 16 }} />}
                            ListFooterComponent={<View style={{ width: 16 }} />}
                            renderItem={({ index }) => {
                                const last = index === dataMed.length - 1;

                                return (
                                    <View style={[styles.devices, { marginRight: last ? 0 : 12 }]}>
                                        <MedicalIcon />
                                        <View style={{ marginVertical: 1 }}>

                                            <Text style={{ fontSize: 10 }}>Temperature</Text>
                                            <Text style={{ fontSize: 12 }} fontWeight='600'>N15,000</Text>
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={{ marginVertical: 20, marginTop: 28 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10 }}>
                            <Text style={{ fontSize: 16 }} fontWeight='600'>Shop for Medicines</Text>
                            <Text style={{ color: '#6798E1', fontSize: 14 }}>View All </Text>
                        </View>

                        <FlatList
                            data={dataMed}
                            contentContainerStyle={{ marginTop: 15, }}
                            decelerationRate="fast"
                            snapToInterval={layout.cards.walletWidth + 16}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View style={{ width: 16 }} />}
                            ListFooterComponent={<View style={{ width: 16 }} />}
                            renderItem={({ index }) => {
                                const last = index === dataMed.length - 1;

                                return (
                                    <View style={[{ marginRight: last ? 0 : 12, backgroundColor: pallets.white, borderRadius: 16, padding: 10 }]}>
                                        <Image resizeMode='stretch' style={{ width: 120, height: 130 }} source={require('../../assets/images/medicines.png')} />
                                        <View style={{ position: 'absolute', backgroundColor: pallets.black, borderRadius: 5, top: 5, left: 1 }}>
                                            <Text style={{ color: pallets.white, fontSize: 10, padding: 2, paddingHorizontal: 5, }}>45% off</Text>
                                        </View>

                                        <View style={{ marginVertical: 1 }}>

                                            <Text style={{ fontSize: 10 }}>Temperature</Text>
                                            <Text style={{ fontSize: 12 }} fontWeight='600'>N15,000</Text>
                                        </View>

                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={{ marginVertical: 20, marginTop: 28 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10 }}>
                            <Text style={{ fontSize: 16 }} fontWeight='600'>Shop for Medicines</Text>
                            <Text style={{ color: '#6798E1', fontSize: 14 }}>View All </Text>
                        </View>

                        <FlatList
                            data={dataMed}
                            contentContainerStyle={{ marginTop: 15, }}
                            decelerationRate="fast"
                            snapToInterval={layout.cards.walletWidth + 16}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View style={{ width: 16 }} />}
                            pagingEnabled
                            viewabilityConfig={viewabilityConfig.current}
                            onViewableItemsChanged={onViewableItemsChanged1.current}
                            ListFooterComponent={<View style={{ width: 16 }} />}
                            renderItem={({ index }) => {
                                const last = index === dataMed.length - 1;

                                return (
                                    <View style={[styles.tablet, { marginRight: last ? 0 : 12 }]}>
                                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                            <Text style={{ color: pallets.white, fontSize: 18 }}>Amartem {'\n'} 2021</Text>
                                            <Text fontWeight='600' style={{ color: pallets.white, fontSize: 16 }}>N 2,000</Text>
                                        </View>
                                        <View style={{ flex: 0.6, alignItems: 'center' }}>
                                            <Image

                                                source={require('../../assets/images/tablets.png')}
                                            />
                                        </View>


                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={styles.indicators}>
                        {[...Array(3)].map((_, i) => (
                            <View
                                key={i}
                                style={[styles.indicator, dotIndex1 === i && styles.indicatorActive]}
                            />
                        ))}
                    </View>

                    <View style={{ marginVertical: 20, marginTop: 28 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10 }}>
                            <Text style={{ fontSize: 16 }} fontWeight='600'>News Feeds</Text>
                            <Text style={{ color: '#6798E1', fontSize: 14 }}>View All </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 20 }}>
                            <Image
                                style={{ height: 98, width: 98 }}
                                source={require('../../assets/images/facewash.png')} />
                            <View style={{ marginStart: 10 }}>
                                <Text style={{ color: '#8E8E93' }}>r/worldnews</Text>
                                <Text style={{ fontSize: 15 }}>Skin Cancer {'\n'} 5 ways to prevent it</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 20 }}>
                            <Image
                                style={{ height: 98, width: 98 }}
                                source={require('../../assets/images/handwash.png')} />
                            <View style={{ marginStart: 10 }}>
                                <Text style={{ color: '#8E8E93' }}>r/worldnews</Text>
                                <Text style={{ fontSize: 15 }}>Skin Cancer {'\n'} 5 ways to prevent it</Text>

                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>
        </PageWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 10
    },
    drawer: {
        marginHorizontal: 15,
        borderWidth: .6, borderColor: pallets.borderGrey, borderRadius: 54, padding: 10
    },
    sectionWhite: {
        // backgroundColor: pallets.white,
        padding: 20,
    },
    bannerContainer: {
        flex: 1,
        overflow: 'hidden',
        width: layout.cards.walletWidth,
    },
    bannerContainer2: {
        flex: 1,
        overflow: 'hidden',
        width: layout.cards.walletWidth,
    },
    indicator: {
        backgroundColor: '#B2DDFF',

        borderRadius: 50,
        height: 10,
        marginHorizontal: 5,
        width: 10,
    },
    indicatorActive: {
        backgroundColor: '#3E64FF',

        height: 10,
        width: 10,
    },
    indicators: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingVertical: 20,
    },
    available: {
        width: '85%',
        flex: 1,
        alignSelf: 'center',
        borderRadius: 13,
        marginVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row', alignItems: 'center', padding: 13,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: .5,
        shadowColor: pallets.shadowColor,
        shadowRadius: 1,
        elevation: 1
    },
    shopbody: {
        flexDirection: 'row', justifyContent: 'space-between', marginStart: 10
    },
    shedeule: {
        borderRadius: 13,
        alignSelf: 'center', width: '85%',
        marginTop: 8,
        backgroundColor: 'rgba(151, 151, 151, 0.11)', flexDirection: 'row', alignItems: 'center',
        padding: 10, justifyContent: 'space-between',
        paddingVertical: 12,
    },

    tablet: {
        height: 300, width: layout.cards.walletWidth, backgroundColor: '#4425F5', borderRadius: 16, padding: 10, flex: 1
    },
    devices: {
        backgroundColor: pallets.white, padding: 10, paddingHorizontal: 10, borderRadius: 16
    }




})