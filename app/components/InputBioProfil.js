'use strict';

import React from 'react';

import { StyleSheet, View, TextInput} from 'react-native';

export default class InputBioProfil extends React.Component

{

    
        render()

    {

        return(
        // creation du composant unique inpute static
        <TextInput style={styles.inputStyleBio}   multiline
        numberOfLines={3} placeholder={this.props.placeholder} maxLength={150} />
        );

    }

}

const styles = StyleSheet.create({
// La forme generale des titre
inputStyleBio:{
    height:200,
    width:'100%',
    borderWidth:5,
    marginTop:10,
borderRadius:30,
padding:15,
fontSize:17,
color:'#4D3D64',
borderColor:'#4D3D64',
},

  
})