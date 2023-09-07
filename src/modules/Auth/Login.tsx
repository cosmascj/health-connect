import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { BackHeader, Input, PageWrapper, Text } from '../../components'
import { pallets } from '../../constant/colors'
import MailIcon from '../../assets/icons/envelope.svg'
import { Button } from '../../components/common/Button'
import GoogleIcon from '../../assets/icons/google-icon.svg'
import { AuthRoutes, StackNavigationProps } from '../../navigation/types'
import { AuthContext } from '../../contexts'

export const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
    const { changeNav } = useContext(AuthContext) as AuthContextType;

    return (
        <PageWrapper>
            <BackHeader showBack />

            <View style={styles.container}>
                <ScrollView>

                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontSize: 32, textAlign: 'center' }} fontWeight='600'>Hello Dr!</Text>
                        <Text style={{ color: pallets.textSecondary, fontSize: 16, textAlign: 'center' }}>Fill your details or continue with
                            social media</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>


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
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ marginStart: 5 }}>Forgot password ?</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>

                        <Button fontWeight='600' text='Sign In' onPress={() => changeNav(true)} />
                        <View style={styles.dividerWrapper}>
                            <View style={styles.divider} />
                            <Text>Or Sign In With</Text>
                            <View style={styles.divider} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.google}>
                        <GoogleIcon />
                        <Text style={{ fontSize: 16, marginStart: 15 }} fontWeight='400'>Sign Up with Google</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.bottom}>

                <Text style={{ fontSize: 16 }}>Don't have an account? <Text onPress={() => navigation.navigate('Signup')} style={{ color: pallets.primaryBlue, fontSize: 15 }}>Register</Text></Text>
            </View>
        </PageWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
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
    bottom: { alignItems: 'center', justifyContent: 'center', marginTop: 10, flex: .2 },
    google: {
        marginVertical: 25,
        borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: pallets.white, padding: 13

    }
})