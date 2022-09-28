import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import Boton from "../Components/Boton";
import ContactsList from '../Components/ContactsList';

import { useNavigation } from '@react-navigation/native';

const Home =({navigation})=>{
  
  return (
    
    <View>

        <Boton
          text="Hora actual/temperatura" 
          onPress={ () =>{
          navigation.navigate('Hora actual/temperatura')
        }}
        />
        
        <ContactsList>

        </ContactsList>
   
    </View>
    
  );
}

export default Home

const styles = StyleSheet.create({

});