import React, { Component, useEffect, useState, FlatList } from 'react';
import { StyleSheet, Text, View, TextInput, Div } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardPlato from '../Components/CardPlato';
import { GetPlatosCompleto } from '../Axios/AxiosClient';
import { ActionTypes, useContextState } from '../ContextState'


const DetallePlato = ({ route, navigation }) => {
  const { id } = route.params;
  const [Detalle, setDetalle] = useState([]);
  const { contextState, setContextState } = useContextState();

  useEffect(() => {
    GetPlatosCompleto(id).then((dataCompleta) => {
      setDetalle(dataCompleta)
      console.log(dataCompleta)
    })
      .catch(() => {
        console.log("Datos mal")
      })
  }, [])

  useEffect(() => {
    {
      contextState.token != ""
        ?
        console.log("kdjfgijdbgkujxdgb")
        :
        console.log("tokenn mallllllllllllllllllllllllllll")
    }
  })

  return (

    <View>

      <CardPlato navigation={navigation} Detalle={Detalle}></CardPlato>

    </View>

  );
}
export default DetallePlato

const styles = StyleSheet.create({


});