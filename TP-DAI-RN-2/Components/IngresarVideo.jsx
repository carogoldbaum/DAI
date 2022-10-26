import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  onChangeDate,
  number,
  TextInput,
} from "react-native";
import Boton from "../Components/Boton";
import { useNavigation } from "@react-navigation/native";
import { ActionTypes, useContextState } from "../ContextState";
import { Video, AVPlaybackStatus } from "expo-av";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const IngresarVideo = ({}) => {
  const navigation = useNavigation();

  const [userState, setUserState] = useState({
    url: "",
  });

  const { contextState, setContextState } = useContextState();

  return (
    <View>
      <Text style={styles.titulo}>Video Favorito</Text>

      <TextInput
        style={styles.dato}
        onChangeText={(text) => setUserState({ ...userState, url: text })}
        value={userState.url}
        placeholder="Ingrese URL"
      />

      <Boton
        text="CONFIRMAR"
        onPress={() => {
          console.log(userState.url);

          setContextState({
            type: ActionTypes.SetVideo,
            value: userState.url,
          });
        }}
      />

      <VideoPlayer style={{ width: 390, height: 300,  }}
        
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: contextState.video
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
