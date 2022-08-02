import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import BotonIniciarSesion from "../components/BotonIniciarSesion";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login =({navigation})=>{

    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

  return (
    
    <View>

            <Text style={styles.titulo}>Iniciar Sesion</Text>

              <TextInput   
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Correo Electronico"
            />

             <TextInput   
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Contraseña"
            />
       

        <BotonIniciarSesion style={{ fontSize: 48}}
          text="INICIAR SESION" 
          onPress={ () =>{
            console.log(email)
            console.log(password)
          navigation.navigate('')
        }}
        />
    </View>
    
  );
}

export default Login

const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-13%',
      fontSize: 34,
      marginRight: 'auto',
      marginLeft: 'auto',
      },

      input: {
        fontSize: 18,
          marginTop:'5%',
          marginLeft:'0%',
          width: '80%',
          borderWidth: 2,
          padding:'3%',
          top: '8%',
        },
   
        
  });