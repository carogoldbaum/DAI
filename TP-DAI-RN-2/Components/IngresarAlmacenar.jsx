import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Boton from "../Components/Boton";
import { useNavigation } from '@react-navigation/native';
import ModalCaseroNum from "../Components/ModalCaseroNum"
import AsyncStorage from '@react-native-async-storage/async-storage';

const IngresarAlmacenar = ({  }) => {
  const navigation = useNavigation(); 

  const [error, setError] = useState(false);

  const [Celular, setCelular] = useState("");
  const [CelularGuardado, setCelularGuardado] = useState("");

  const Guardar = async () => {
    if (Celular != "") {
      await AsyncStorage.setItem('numTelefono', Celular)
    }
    else {
      Alert.alert("Ingrese un celular")
    }
  }

  useEffect(() => {
    (async () => {

      const CelularSiendoGuardada = await AsyncStorage.getItem('numTelefono')
      if (CelularSiendoGuardada) setCelularGuardado(CelularSiendoGuardada)
    })()
  }, [Celular])

  return (
    <View>

        <Text style={styles.titulo}>Configuración de Nro. Emergencia</Text>

        <TextInput
          style={styles.dato}
          onChangeText={text => setCelular( text )}
          value={Celular}
          placeholder="Número de Celular"
          keyboardType="numeric"
        />

        {error && <Text style={styles.alerta}>ERROR, recorda que solo puede ingresar 8 digitos</Text>}
  
        
        <Boton
          text="CONFIRMAR"
          
          onPress={ () => {
            console.log(Celular)
            

             if (Celular.length < 8 || Celular.length > 8){
              setError(true)
              console.log("paso como si nada",Celular)
             
            }
            else {//si hay datos completos
              setError(false)
                console.log("paso todo bien", Celular)

                Guardar()
            
                console.log("info en el AsyncStorage", CelularGuardado)
                
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