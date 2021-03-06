import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class ButtonLarge extends React.Component {

    render(){


        return(
       
                <TouchableOpacity style={[styles.button, this.props.style]}  onPress={this.props.onPress}>
                    <View style={styles.touchable}>
                        <Text style={styles.Text}>{this.props.children}</Text>
                    </View>
                </TouchableOpacity>

        );

    }

}



const styles = StyleSheet.create ({
    Text:{
        
        textAlign :'center',
        marginVertical:14,
        fontSize:16,
        color:'white',
  
     },
     touchable: {
        
        
         color: "white", 
         borderRadius:15, 
         width:250, 
         height:50, 
         backgroundColor: '#4D3D64', 
         alignSelf:'center',
        
        },
  
     

     button :{
        color: "white", 
        borderRadius:15, 
        width:150, 
        height:50, 
       // backgroundColor: '#4D3D64', 
        
    },


   

 

 
});