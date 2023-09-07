/* eslint-disable indent */
import React from 'react'
import { Text as RNText, type TextProps } from 'react-native'

import { pallets } from '../../constant/colors'

type FontWeight = '300' | '400' | '600' | '700'

type FontFamily = 'Poppins-Regular' | 'Poppins-ExtraBold' | 'GothamPro-Regular' | 'Axiforma-Bold'

export type TextPropTypes = TextProps & {
    children?: string | React.ReactNode
    fontWeight?: FontWeight
}

export const Text = ({
    children,
    style,
    fontWeight = '400',
    ...props
}: TextPropTypes) => {
    const getFontFamily = (fontWeight: FontWeight): FontFamily => {
        switch (fontWeight) {
            case '300':
                return 'Poppins-Regular'
            case '400':
                return 'GothamPro-Regular'
            case '600':
                return 'GothamPro-Regular'
            case '700':
                return 'Poppins-ExtraBold'
            default:
                return 'Poppins-Regular'
        }
    }

    const fontSize = 13

    return (
        <RNText
            maxFontSizeMultiplier={1.3}
            minimumFontScale={0.7}
            // @ts-expect-error style.fontSize
            style={[{ color: pallets.primaryTextColor, fontSize, lineHeight: (style?.fontSize ?? fontSize) * 1.5 }, { fontFamily: getFontFamily(fontWeight) }, style]}
            {...props}>
            {children}
        </RNText>
    )
}
