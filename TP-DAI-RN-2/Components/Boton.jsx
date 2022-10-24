import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.estilo}
            onPress={onPress}
        >
            <Text style={styles.texto}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default Boton


const styles = StyleSheet.create({

    texto: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 12,
        width: '100%'
    },
    estilo: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginTop:'12%',
        width: '47%'
    },

});