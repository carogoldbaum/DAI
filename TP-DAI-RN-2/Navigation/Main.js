import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Ubicacion from '../Screens/Ubicacion';
import QRScanner from '../Screens/QRScanner';
import Contactos from '../Screens/Contactos';
import ConfiguraciónNumero from  '../Screens/ConfiguraciónNumero';
import VideoFav from  '../Screens/VideoFav';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
        />
        <Stack.Screen
          name="Contactos"
          component={Contactos}
        />
        <Stack.Screen
          name="Ubicacion"
          component={Ubicacion}
        />
             <Stack.Screen
          name="ConfiguraciónNumero"
          component={ConfiguraciónNumero}
        />
              <Stack.Screen
          name="VideoFav"
          component={VideoFav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main