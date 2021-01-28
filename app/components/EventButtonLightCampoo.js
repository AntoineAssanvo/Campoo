import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class EventButtonCampoo extends React.Component {

    render(){


        return(

            
       
                <TouchableOpacity style={[this.props.style]}  onPress={this.props.onPress}>
                    <View style={styles.touchableEvent}>
                        <Text style={styles.EventText}>{this.props.children}</Text>
                    </View>
                </TouchableOpacity>

        );

    }

}


const styles = StyleSheet.create ({
    EventText:{
        
        textAlign :'center',
        alignSelf:'center',
        marginTop:12,
       
        fontSize:16,
        color:'#4D3D64',
  
     },
     touchableEvent: {
        
        
         color: "white", 
         borderRadius:5, 
         width:170, 
         height:50, 
         backgroundColor: '#DCD5E7', 
        //  alignSelf:'center',
        
        },
  
     

     button :{
        color: "white", 
        borderRadius:5, 
        width:170, 
        height:50, 
       
        
    },


   

 

 
});