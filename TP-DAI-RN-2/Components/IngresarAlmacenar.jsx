import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button, Alert } from 'react-native';
import Boton from "../Components/Boton";
import { useNavigation } from '@react-navigation/native';

const IngresarAlmacenar = ({ navigation }) => {

  const [Celular, setCelular] = useState();

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  return (
    <View>

        <Text style={styles.titulo}>Configuración de Nro. Emergencia</Text>

        <TextInput
          style={styles.dato}
          onChangeText={text => setCelular({Celular: text })}
          value={Celular}
          placeholder="Número de Celular"
          keyboardType="numeric"
        />

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <Boton
          disable={disable}
          text="CONFIRMAR"
          
          onPress={ () => {
            setDisable(true)
            console.log(Celular)

            if (Celular == ''  || Celular.Lenght < 8) {//si hay datos incompletos
              setError(true)
            }
            else {//si hay datos completos
            
                console.log("paso todo bien")
                navigation.navigate('Home')
          
            } setDisable(false)
          }}
        />
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

  DropDownPicker: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '10%',
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    top: '18%',
    borderRadius: 0,
    backgroundColor: '#F4F4F4',
  },

  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

  alerta: {
    color: 'black',
    textAlign: 'center',
    top: '9%',
    fontSize: 20,
    width: '100%'
  },

  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});