import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ButtonCampoo from "../../components/button/ButtonCampoo";
import SecondaryButtonCampoo from "../../components/button/SecondaryButtonCampoo";
import LabelCampoo from "../../components/LabelCampoo";
import InputCampooSignup from "../../components/input/InputCampooSignup";
import LogoCampoo from '../../../assets/svg/LogoCampoo'

export default function ScreenLoginPage({ navigation }) {



   return (

      <SafeAreaView style={styles.container} >
         <StatusBar style='auto' />

         <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
         <Image style={{ width: 271.64, height: 271.64, left: -102.73, top: 49.27, position: 'absolute' }} source={require("../../../assets/images/Baloo-accueil.png")} />
         <Image style={{ width: 519.75, height: 394.37, left: 86, top: 576, position: 'absolute' }} source={require("../../../assets/images/BAloo-violet.png")} />

         <View style={styles.loginview}>

            <View style={styles.pseudo}>

               <LabelCampoo style={styles.labelPseudo}>Pseudo</LabelCampoo>
               <InputCampooSignup name="Pseudo" style={styles.InputPseudo} />

            </View>

            <View>

               <LabelCampoo style={styles.labelMotDePasse}>Mot de passe</LabelCampoo>

               <InputCampooSignup name="Mot de passe" secure={true} style={styles.InputMotDePasse} />

               <ButtonCampoo style={styles.button} onPress={() => navigation.navigate('Navigator')}>Connexion</ButtonCampoo>
            </View>

            <View>

               <SecondaryButtonCampoo style={styles.secondaryButton1} >Mot de passe oublié</SecondaryButtonCampoo>

               <SecondaryButtonCampoo style={styles.secondaryButton2} onPress={() => navigation.navigate('MailSignupCampoo')}>S'incrire</SecondaryButtonCampoo>

            </View>

         </View>

      </SafeAreaView>

   );


}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff',

   },

   pseudo: {
      height: 80,
      marginBottom: 20,
   },

   labelPseudo: {
      marginBottom: -18,
      marginLeft: 27,

   },

   labelMotDePasse: {
      marginBottom: -18,
      marginLeft: 27,

   },

   loginview: {
      top: 227,
      width: 300,
      height: 364,

   },

   InputPseudo: {
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,

   },

   InputMotDePasse: {
      marginBottom: 57,

   },

   connexionText: {
      textAlign: 'center',
      marginVertical: 15,
      fontSize: 16,
      color: 'white',

   },

   button: {
      alignSelf: 'center',

   },

   secondaryButton1: {
      alignSelf: 'center',
      marginTop: 10,

   },

   secondaryButton2: {
      alignSelf: 'center',
      marginTop: 10,

   }

});