import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button, Alert, length } from 'react-native';
import Boton from "../Components/Boton";
import { useNavigation } from '@react-navigation/native';
import { ActionTypes, useContextState } from '../ContextState'
import ModalCaseroNum from "../Components/ModalCaseroNum"

const IngresarAlmacenar = ({  }) => {
  const navigation = useNavigation(); 

  const [userState, setUserState] = useState({
    Celular: '',
  });

  const [error, setError] = useState(false);

  const { contextState, setContextState } = useContextState();

  return (
    <View>

        <Text style={styles.titulo}>Configuración de Nro. Emergencia</Text>

        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, Celular: text })}
          value={userState.Celular}
          placeholder="Número de Celular"
          keyboardType="numeric"
        />

        {error && <Text style={styles.alerta}>ERROR, recorda que solo puede ingresar 8 digitos</Text>}
  
        
        <Boton
          text="CONFIRMAR"
          
          onPress={ () => {
            console.log(userState.Celular)
            

             if (userState.Celular.length < 8 || userState.Celular.length > 8){
              setError(true)
              console.log("paso como si nada",userState.Celular)
             
            }
            else {//si hay datos completos
              setError(false)
                console.log("paso todo bien", userState.Celular)

                setContextState({
                  type: ActionTypes.SetNumCelular,
                  value: userState.Celular,
                });
            
                console.log("info en el contextState", contextState)
                
            }    
          }} 
        />
              <ModalCaseroNum style={styles.maintext}> </ModalCaseroNum>
    </View>
  )
}
export default IngresarAlmacenar

const styles = StyleSheet.create({

  titulo: {
    top: '8%',
    marginLeft: '0%',
    fontSize: 34,
  },

  dato: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '0%',
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    padding: '3%',
    top: '8%',
    backgroundColor: '#F4F4F4',
  },

  alerta: {
    color: 'black',
    textAlign: 'center',
    top: '9%',
    fontSize: 20,
    width: '100%'
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },

  maintext: {
    fontSize: 86,
    margin: 0,
    
  },
});