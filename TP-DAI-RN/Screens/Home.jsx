import React, { Component, useEffect, useState, FlatList } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetPlatos } from '../Axios/AxiosClient';
import Marvel from '../Components/ListaPlatos';

const Home =({navigation})=>{

  const [userState, setUserState] = useState({
    plato: ''
});

  return (
    
    <View>

            <Text style={styles.titulo}>Buscador de Platos</Text>

              <TextInput   
                style={styles.input}
                value={userState.plato}
                placeholder="Ingrese plato"
                onChangeText={text => setUserState({ ...userState, plato: text})}
            />
            
          <Marvel
          onPress={async () =>{
            
            if (userState.plato==''){
              setError(true)
            }
              else {
                await GetPlatos(userState).then(() => {
                  
                    navigation.navigate('Login')
                  
                })
                .catch(() => {
                  console.log("Datos mal")
                  setError(true)
                  
              });
            
        }
      }}  
            />
    </View>
    
  );
}

export default Home

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

        alerta: {
          top: '80%',
          marginLeft:'-13%',
          fontSize: 34,
          marginRight: 'auto',
          marginLeft: 'auto',
          color: 'red',
          },
        
  });