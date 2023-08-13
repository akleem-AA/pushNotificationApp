import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, } from 'react'
import { MyContext } from '../App'

const LoginScreen = (props) => {
    console.log('props', props)
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    const submit = () => {
        console.log('props', props)
        if (userName == '') {
            console.log("please file the user name")
            return
        }
        if (pass == '') {
            console.log("please file the pass")
            return

        }

        let url = 'https://backend.elabpro.in/api/v1/Users/login'

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                username: userName,
                password: pass

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRFToken': cookie.load('csrftoken')
            }
        }
        fetch(url, data).then((res) => console.log(res)).then((res) => {
            console.log("post api call ", res)

        })
        console.log('props', props)
        props.navigation.navigate('home')

    }
    // const deviceToken = useContext(deviceToken)
    // console.log("device token in logni sreen", deviceToken)
    return (

        <>
            <MyContext.Consumer>
                {deviceToken => {
                    return (<>
                        <View style={styles.container}>
                            {console.log("contest api data", deviceToken)}
                            {/* heading */}
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 18, }} >{deviceToken}</Text>
                            </View>

                            {/* //input box for take user value */}
                            <View>
                                <View style={{ width: '100%', margin: 10 }}>
                                    <TextInput
                                        placeholder='UserName'
                                        onChangeText={(t) => setUserName(t)}
                                        multiline
                                        borderWidth={.8}
                                        width={300}
                                        value={userName}
                                        style={{ padding: 10 }}
                                    />
                                </View>
                                <View style={{ width: '100%', margin: 10 }}>
                                    <TextInput
                                        placeholder='Password'
                                        onChangeText={(t) => setPass(t)}
                                        multiline
                                        borderWidth={.8}
                                        width={300}
                                        value={pass}
                                        style={{ padding: 10 }}
                                    />
                                </View>
                                <View style={{ width: '100%', margin: 10, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder='Password'
                                        onChangeText={(t) => setPass(t)}
                                        // multiline={4}
                                        multiline={true}
                                        borderWidth={.8}
                                        width={300}
                                        value={deviceToken}
                                        style={{ padding: 10 }}
                                    />
                                </View>
                            </View>
                            {/* <Text>{deviceToken}</Text> */}


                            {/* //button to summit form */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingTop: 20, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
                                        <View style={[{ borderWidth: 1 }, checkBox && { backgroundColor: 'blue' }]} ><Text style={{ paddingLeft: 11, paddingRight: 11, padding: 1 }}></Text></View>
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{}}>Remeber Me</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => submit()}>
                                    <View style={{ borderWidth: 1, backgroundColor: 'blue' }}>
                                        <Text style={{ padding: 10, color: 'white' }}>Sing In</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View >
                    </>)
                }}
            </MyContext.Consumer>
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderWidth: .5

    }
})