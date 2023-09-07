import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { BackHeader, Checkbox, Input, PageWrapper, Text } from '../../components'
import { pallets } from '../../constant/colors'
import Personicon from '../../assets/icons/person-icon.svg'
import MailIcon from '../../assets/icons/envelope.svg'
import { Button } from '../../components/common/Button'
import GoogleIcon from '../../assets/icons/google-icon.svg'
import { AuthRoutes, StackNavigationProps } from '../../navigation/types'
export const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, 'Signup'>) => {
    const [checked, setChecked] = useState(true)
    return (
        <PageWrapper>
            <BackHeader showBack />

            <View style={styles.container}>
                <ScrollView>

                    <View style={{ alignSelf: 'center' }}>

                        <Text style={{ fontSize: 32 }} fontWeight='600'>Register Account</Text>
                        <Text style={{ color: pallets.textSecondary }}>Fill your details or continue with
                            social media</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>

                        <Input
                            placeholder='First Name'
                            LeftComponent={<Personicon />}
                            style={styles.input}
                        />
                        <Input
                            placeholder='Last Name'
                            LeftComponent={<Personicon />}
                            style={styles.input}
                        />
                        <Input
                            placeholder='example@gmail.com'
                            LeftComponent={<MailIcon />}
                            style={styles.input}
                        />
                        <Input
                            placeholder='******'
                            secureTextEntry
                            LeftComponent={<MailIcon />}
                            style={styles.input}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox checked={checked} color='#643FDB' onChange={() => setChecked(() => !checked)} />
                            <Text style={{ marginStart: 8, color: '#717171' }}>I accept all the <Text style={{ color: '#2B2B2B' }}> Terms & Conditions  </Text> </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>

                        <Button fontWeight='600' text='Register' onPress={() => navigation.navigate('Login')} />
                        <View style={styles.dividerWrapper}>
                            <View style={styles.divider} />
                            <Text>Or Sign In With</Text>
                            <View style={styles.divider} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.google}>
                        <GoogleIcon />
                        <Text style={{ fontSize: 16, marginStart: 15 }}>Sign Up with Google</Text>
                    </TouchableOpacity>
                    <View style={styles.bottom}>

                        <Text style={{ fontSize: 16 }}>Already have account? <Text onPress={() => navigation.navigate('Login')} style={{ color: pallets.primaryBlue, fontSize: 15 }}>Sign In</Text></Text>
                    </View>
                </ScrollView>
            </View>
        </PageWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        backgroundColor: pallets.white, borderWidth: 0
    },
    dividerWrapper: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20
    },
    divider: {
        width: '30%', backgroundColor: pallets.borderGrey, height: 2
    },
    bottom: { alignItems: 'center', justifyContent: 'center', marginTop: 10, },
    google: {
        marginVertical: 10,
        borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: pallets.white, padding: 13

    }
})