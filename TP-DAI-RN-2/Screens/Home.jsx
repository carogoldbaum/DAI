import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity } from 'react-native';
import Boton from "../Components/Boton";
import ContactsList from '../Components/ContactsList';
import Contact from '../Components/Contact';
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
        text="About"
        onPress={() => {
          navigation.navigate('About')
        }}
      />
    </View>

  );
}

export default Home

const styles = StyleSheet.create({

});