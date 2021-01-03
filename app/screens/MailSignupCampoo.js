import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../components/InputCampooSignup"
import ButtonCampoo from "../components/ButtonCampoo";
import LabelCampoo from '../components/LabelCampoo';
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';


export default class MailSignUpCampoo extends React.Component {

    render() {

        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('BatSignupCampoo');
        };

        return (

            <SafeAreaView style={styles.container}>

                <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../assets/images/Blob-Baloo-Etudiant.png")} />

                <View style={styles.mailView}>
                    <LabelCampoo style={styles.mailLabel}>Email étudiant</LabelCampoo>
                    <Text style={styles.textMail}>Pour que Baloo vérifie que tu es bien un étudiant du campus !</Text>
                    <InputCampooSignup style={styles.InputView} />

                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Suivant</ButtonCampoo>
                    <SecondaryButtonCampoo style={styles.retour} >retour</SecondaryButtonCampoo>

                </View>

            </SafeAreaView>

        );
    }


}


const styles = StyleSheet.create({

    container: {

        flex: 1,

        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',


    },

    logoCampoo: {
        position: 'absolute',
        width: 115,
        height: 115,
        marginTop: 20,
        left: 260


    },

    InputView: {

        alignSelf: 'center',

    },

    mailLabel: {
        marginBottom: 9,

    },



    mailView: {

        top: 138,
        height: 290,
        width: 300,
        alignSelf: 'center',


    },

    button: {
        marginTop: 57,
        alignSelf: 'center',

    },

    baloo: {
        position: "absolute",
        width: 559,
        height: 438,
        left: 50,
        top: 440,
    },

    textMail: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})