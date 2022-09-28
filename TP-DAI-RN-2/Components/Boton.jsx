import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.RegistrarseInicio}
            onPress={onPress}
        >
            <Text style={styles.RegistrarseInicioText}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default Boton


const styles = StyleSheet.create({

    RegistrarseInicioText: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 12,
        width: '100%'
    },
    RegistrarseInicio: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginTop:'12%',
        width: '47%'
    },

});