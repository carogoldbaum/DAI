import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from "react-native";
import Boton from "../Components/Boton";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import AsyncStorage from '@react-native-async-storage/async-storage';

const IngresarVideo = ({ }) => {
  const navigation = useNavigation();

  const [urlGuardada, seturlGuardada] = useState("");

  const [url, setUrl] = useState("");

const GuardarURL = async (e) => {
  if (url == ""){
    Alert.alert("Ingrese una url")
  }
  else {
    await AsyncStorage.setItem('Url', url)
  }
}

useEffect(() => {
  (async () =>{
    const UrlSiendoGuardada = await AsyncStorage.getItem('Url')
    seturlGuardada(UrlSiendoGuardada)
  })()
}, [url])

  return (
    <View>
      <Text style={styles.titulo}>Video Favorito</Text>

      <TextInput
        style={styles.dato}
        onChangeText={(text) => setUrl({ url: text })}
        value={url}
        placeholder="Ingrese URL"
      />

      <Boton
        text="CONFIRMAR"
        onPress={() => {
          console.log(urlGuardada);
          GuardarURL
        }}
      />

        <VideoPlayer style={{ width: 390, height: 300, }}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: urlGuardada
            },
          }}
        />

    </View>
  );
};
export default IngresarVideo;

const styles = StyleSheet.create({
  titulo: {
    top: "8%",
    marginLeft: "0%",
    fontSize: 34,
  },

  dato: {
    fontSize: 18,
    marginTop: "5%",
    marginLeft: "0%",
    width: "80%",
    alignItems: "center",
    borderWidth: 2,
    padding: "3%",
    top: "8%",
    backgroundColor: "#F4F4F4",
  },

  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },

});
