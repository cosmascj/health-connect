import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/MaterialIcons'

import BackIcon from '../../assets/icons/Heading.svg'
import { pallets } from "../../constant/colors"
type BackHeaderProps = {
    showBack: boolean
}
export const BackHeader = ({
    showBack = true,

}: BackHeaderProps) => {
    const navigation = useNavigation()

    return (
        <View style={[styles.container, styles.backContainer]}>
            {showBack
                ? (
                    <TouchableOpacity style={{ borderColor: pallets.lightGrey, borderWidth: 1, padding: 9, borderRadius: 8 }} onPress={() => navigation.goBack()}>
                        {/* <BackIcon /> */}
                        <Icon name="arrow-back" size={22} color={pallets.blackShade} />

                    </TouchableOpacity>
                )
                : (
                    <View style={{ width: 22 }} />
                )}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    backContainer: {
        alignItems: 'flex-start',
        paddingVertical: 20
    },
})