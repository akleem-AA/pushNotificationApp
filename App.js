

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, createContext, useState } from 'react';
import messaging from '@react-native-firebase/messaging'

import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import LoginScreen from './Component/LoginScreen';
import NavigationScreen from './Component/Navigation/NavigationScreen';
export const MyContext = createContext()

const App = () => {

  const [token1, setToken] = useState('')
  useEffect(() => {
    getDeviceToken()

  }, [])


  const getDeviceToken = async () => {
    let token = await messaging().getToken()
    console.log("token", token)
    setToken(token)
    // return token
    // Alert.alert(JSON.stringify(token))
  }

  useEffect(() => {
    const subscription = messaging().onMessage(async remoteMessage => {
      Alert.alert(JSON.stringify(remoteMessage))
    })
    return subscription
  }, [])
  return (
    <>
      <MyContext.Provider value={token1} >
        <View style={{ flex: 1 }}>
          <NavigationScreen />
        </View>
      </MyContext.Provider>
    </>
  )
}
const styles = StyleSheet.create({

});

export default App;
