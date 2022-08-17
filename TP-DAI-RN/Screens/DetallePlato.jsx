import React, { Component, useEffect, useState, FlatList} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardPlato from '../Components/CardPlato';
import { GetPlatosCompleto } from '../Axios/AxiosClient';

const DetallePlato =({route})=>{
    const {id}=route.params;
    const [Detalle, setDetalle] = useState([]);

        
    useEffect(()=>{
        GetPlatosCompleto(id).then((dataCompleta) => {
            setDetalle(dataCompleta)
            console.log()   
        })
        .catch(() => {
            console.log("Datos mal")   
        })
    })

  return (
    
    <View>

            <CardPlato Detalle={Detalle}></CardPlato>
   
    </View>
    
  );
}
export default DetallePlato

const styles = StyleSheet.create({
   
        
  });