import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const HomeScreen = (props) => {
    const [data, setData] = useState([])
    const openCreateModal = () => {
        props.navigation.navigate('add', { type: 'new', updateTable: getAllData })
    }
    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        let url = 'https://backend.elabpro.in/api/v1/Department/getDepartmentData'
        fetch(url).then((res) => res.json()).then((res) => {
            console.log("api response", res)
            const reversedArray = [...res.message].reverse();
            setData(reversedArray)
        })
    }

    console.log('data', data)
    const editTable = (item, index) => {
        console.log("item ", index)
        props.navigation.navigate('add', { type: "edit", data: item, updateTable: getAllData })
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
                        <Text>Table</Text>
                        <TouchableOpacity onPress={() => openCreateModal()}>
                            <View style={{ borderWidth: 1, backgroundColor: 'gray' }}>
                                <Text style={{ padding: 5, color: 'white' }}>Create Row</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <Text style={styles.heading}>Sn</Text>
                        <Text style={styles.heading}>Name</Text>
                        <Text style={styles.heading}>Action</Text>
                    </View>

                    {data.map((item, index) => {
                        return (
                            <>
                                <View style={[styles.table, { borderWidth: 0 }]}>
                                    <Text>{index + 1}</Text>
                                    <Text>{item.Department}</Text>
                                    <TouchableOpacity onPress={() => editTable(item, index)}>
                                        <View style={{}}>
                                            <Text style={{ padding: 5 }}>edit</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    })}

                </View>
            </ScrollView>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    heading: {
        padding: 10

    },
    table: { flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: .9, borderColor: 'gray' }
})