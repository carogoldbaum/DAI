import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity } from 'react-native';
import Boton from "../Components/Boton";
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {

  return (

    <View>
      <Boton
        text="Hora actual/temperatura"
        onPress={() => {
          navigation.navigate('Ubicacion')
        }}
      />
      <Boton
        text="Contactos"
        onPress={() => {
          navigation.navigate('Contactos')
        }}
      />
      <Boton
        text="QRScanner"
        onPress={() => {
          navigation.navigate('QRScanner')
        }}
      />
        <Boton
        text="ConfiguraciónNumero"
        onPress={() => {
          navigation.navigate('ConfiguraciónNumero')
        }}
      />
           <Boton
        text="VideoFav"
        onPress={() => {
          navigation.navigate('VideoFav')
        }}
      />
    </View>

  );
}

export default Home

const styles = StyleSheet.create({

});