import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import Boton from "../Components/Boton";
import ContactsList from '../Components/ContactsList';
import Contact from '../Components/Contact';
import { useNavigation } from '@react-navigation/native';

const About =({navigation})=>{
  
  return (
    
    <View>

        <Boton
          text="Hora actual/temperatura" 
          onPress={ () =>{
          navigation.navigate('Ubicacion')
        }}
        />
        
        <ContactsList>
          
        </ContactsList>
   
    </View>
    
  );
}

export default About

const styles = StyleSheet.create({

});