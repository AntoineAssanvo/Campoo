import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native'
import PostCampoo from '../components/PostCampoo';

export default class AssoFeedCampoo extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.assoAddpost}>

                    <Image style={styles.addPostBtn} source={require("../../assets/images/Boutton-ajout.png")} />



                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <PostCampoo />
                    <PostCampoo />
                    <PostCampoo />

                </ScrollView>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',


    },

    assoAddpost: {
        width: '100%',
        height: 60,

        justifyContent: 'center',
        alignItems: 'flex-end',











    },

    addPostBtn: {
        width: 38,
        height: 38,
        marginRight: 35,



    },





})

