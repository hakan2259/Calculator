import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Header extends Component {
    render() {
        const {header,headerText} = styles;
        return (
            
            <View style={header}>
                <Text style={headerText}>{this.props.headerText}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:60,
        elevation:24,
        shadowColor: '#000000',
        shadowOffset:{
          width:0,height:12
        },
        shadowOpacity:0.29,
        shadowRadius:16,
    
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F5F5'
    
      },
      headerText:{
        fontSize:20,
        textAlign: 'center'
    
      }
});



