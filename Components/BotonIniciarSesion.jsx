import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonIniciarSesionInicio = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.boton1}
            onPress={onPress}
        >
            <Text style={styles.boton1Text}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default BotonIniciarSesionInicio


const styles = StyleSheet.create({

    boton1Text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    boton1: {
        backgroundColor: 'white',
        borderWidth:3,
        borderColor: 'black',
        borderRadius: 70,
        padding: 12,
        marginTop:'97%',
        width: '47%'
    },

});