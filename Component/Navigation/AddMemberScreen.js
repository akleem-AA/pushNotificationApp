import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const AddMemberScreen = (props) => {
    const DATA = props.route?.params?.data;
    const type = props.route?.params?.type;
    const updateTable = props?.route?.params?.updateTable;
    console.log('add props', DATA, props)
    const [depCode, setDepCode] = useState('')
    const [dep, setDep] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    useEffect(() => {
        if (type == "edit") {
            console.log("edit")
            setDepCode(DATA.DepartmentCode)
            setDep(DATA.Department)
        }
    }, [])

    const create = () => {
        console.log('props', props)
        if (depCode == '') {
            console.log("please file the user name")
            return
        }
        if (dep == '') {
            console.log("please file the pass")
            return

        }

        let url = 'https://backend.elabpro.in/api/v1/Department/InsertDepartmentData'

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(
                {
                    Department: depCode,
                    DepartmentCode: dep,
                    isActive: true,


                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRFToken': cookie.load('csrftoken')
            }
        }
        let edidBody = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(
                {
                    Department: depCode,
                    DepartmentCode: dep,
                    isActive: true,
                    DepartmentID: DATA?.DepartmentID

                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRFToken': cookie.load('csrftoken')
            }
        }
        fetch(url,
            type === "new" ? data : edidBody,
        ).then((res) => console.log(res)).then((res) => {
            updateTable()
            props.navigation.navigate('home')
        })

    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '40%' }}>
                    <Text style={{ padding: 10 }}>Department Code</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(t) => setDepCode(t)}
                        value={depCode}
                    />
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={{ padding: 10 }}>Deparment</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(t) => setDep(t)}
                        value={dep}
                    />
                </View>
            </View>

            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
                        <View style={[{ borderWidth: 1 }, checkBox && { backgroundColor: 'blue' }]} ><Text style={{ paddingLeft: 11, paddingRight: 11, padding: 1 }}></Text></View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Active</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => create()}>
                    <View style={{ borderWidth: 1, backgroundColor: 'green', borderRadius: 10 }}>
                        <Text style={{ padding: 10, color: 'white' }}>Create</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View>
                        <Text>Back to List</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddMemberScreen

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10
    }
})