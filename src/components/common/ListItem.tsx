/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View, ViewStyle, } from 'react-native';
import { Text } from './Text';
import { pallets } from '../../constant/colors';

// import Text from '../Text';

interface Props {
    icon: JSX.Element;
    title: string;
    badgeText?: string;
    subText?: string;
    rightComponent?: JSX.Element;
    style?: ViewStyle;
}

const ListItem = ({
    icon,
    title,
    badgeText,
    subText,
    rightComponent,
    style,
}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={style}>{icon}</View>
                <View style={styles.title}>
                    <View style={[styles.content, { marginLeft: 8 }]}>
                        <Text style={{ fontSize: 16 }}>{title}</Text>
                        {Boolean(badgeText) && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{badgeText}</Text>
                            </View>
                        )}
                    </View>
                    {subText && <Text style={{ color: pallets.textSecondary }}>{subText}</Text>}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        backgroundColor: pallets.primaryBlue,
        borderRadius: 4,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    badgeText: {
        color: pallets.primaryBlue,
        fontSize: 12,
    },
    container: {
        alignItems: 'center',
        borderColor: pallets.borderGrey,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 10,
    },
    title: { marginLeft: 10 },
});

export default ListItem;
