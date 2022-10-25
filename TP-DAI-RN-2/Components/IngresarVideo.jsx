import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput } from 'react-native';
import Boton from "../Components/Boton";
import { useNavigation } from '@react-navigation/native';
import { ActionTypes, useContextState } from '../ContextState';
import Video from 'react-native-video';

const IngresarVideo = ({ }) => {
    const navigation = useNavigation();

    const [userState, setUserState] = useState({
        url: '',
    });


    const { contextState, setContextState } = useContextState();

    return (
        <View>

            <Text style={styles.titulo}>Video Favorito</Text>

            <Video source={{ uri: "https://www.youtube.com/watch?v=j5y6xLpRwx4" }}
                ref={(ref) => {
                    this.player = ref
                }}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={styles.backgroundVideo} />

            <Boton
                text="CONFIRMAR"
                onPress={() => {
                    console.log(userState.url)

                    setContextState({
                        type: ActionTypes.SetVideo,
                        value: userState.url,
                    });

                    console.log("info en el contextState", contextState)

                    navigation.navigate('Home')

                }}
            />
        </View>
    )
}
export default IngresarVideo

const styles = StyleSheet.create({

    titulo: {
        top: '8%',
        marginLeft: '0%',
        fontSize: 34,
    },

    dato: {
        fontSize: 18,
        marginTop: '5%',
        marginLeft: '0%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        padding: '3%',
        top: '8%',
        backgroundColor: '#F4F4F4',
    },

    DropDownPicker: {
        fontSize: 18,
        marginTop: '5%',
        marginLeft: '10%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        top: '18%',
        borderRadius: 0,
        backgroundColor: '#F4F4F4',
    },

    image: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },

    alerta: {
        color: 'black',
        textAlign: 'center',
        top: '9%',
        fontSize: 20,
        width: '100%'
    },

    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});