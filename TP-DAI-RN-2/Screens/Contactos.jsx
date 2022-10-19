import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity } from 'react-native';
import ContactsList from '../Components/ContactsList';
import { useNavigation } from '@react-navigation/native';
import Boton from "../Components/Boton";

const Home = ({ navigation }) => {

    return (

        <View>
            <Boton
                text="Volver a Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <ContactsList />


        </View>

    );
}

export default Home

const styles = StyleSheet.create({

});