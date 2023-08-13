import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import HomeScreen from './HomeScreen';
import AddMemberScreen from './AddMemberScreen';


const NavigationScreen = () => {
    const Stack = createNativeStackNavigator()
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen options={{ headerShown: false }} name='login' component={LoginScreen} />
                    {/* <Stack.Screen options={{ headerShown: false }} name='home' component={LoginScreen} /> */}
                    <Stack.Screen name='home' component={HomeScreen} />
                    <Stack.Screen name='add'
                        component={AddMemberScreen}

                    />


                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default NavigationScreen

const styles = StyleSheet.create({})