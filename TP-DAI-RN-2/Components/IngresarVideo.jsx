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
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import VideoPlayer from "expo-video-player";
import AsyncStorage from '@react-native-async-storage/async-storage';

const IngresarVideo = ({ }) => {
  const navigation = useNavigation();

  const [urlGuardada, seturlGuardada] = useState("");
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [url, setUrl] = useState("");

  const GuardarURL = async () => {
    if (url != "") {
      await AsyncStorage.setItem('String', url)
    }
    else {
      Alert.alert("Ingrese una url")
    }
  }

  useEffect(() => {
    (async () => {

      const UrlSiendoGuardada = await AsyncStorage.getItem('String')
      if (UrlSiendoGuardada) seturlGuardada(UrlSiendoGuardada)
    })()
  }, [url])

  return (
    <View>
      <Text style={styles.titulo}>Video Favorito</Text>

      <TextInput
        style={styles.dato}
        onChangeText={(text) => setUrl(text)}
        value={url}
        placeholder="Ingrese URL"
      />

      <Boton
        text="CONFIRMAR"
        onPress={() => {
          console.log(urlGuardada);
          GuardarURL()
        }}
      />

      {url != ""
        ?
        <VideoPlayer style={{ width: 390, height: 300, }}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: url
            },
          }}
        />
        :
        <Text>Ingrese una URL</Text>
      }
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
