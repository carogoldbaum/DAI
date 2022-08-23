import React, { Component, useEffect, useState, FlatList} from 'react';
import { StyleSheet, Text, View, TextInput, Div} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardPlato from '../Components/CardPlato';
import { GetPlatosCompleto } from '../Axios/AxiosClient';

const DetallePlato =({route})=>{
    const {id}=route.params;
    const [Detalle, setDetalle] = useState([]);

        
    useEffect(()=>{
        GetPlatosCompleto(id).then((dataCompleta) => {
            setDetalle(dataCompleta) 
            console.log(dataCompleta) 

        })
        .catch(() => {
            console.log("Datos mal")   
        })
    },[])

  return (
    
    <View>
            if(){
               <CardPlato Detalle={Detalle}></CardPlato>
            }
             setContextState({
                      type: ActionTypes.SetMenu,
                      value: menu.menu,
                    });
           
    </View>
    
  );
}
export default DetallePlato

const styles = StyleSheet.create({
   
        
  });