import React, { useEffect, useState, Component } from "react";
import { FlatList, View, Text, StyleSheet, SafeAreaView, Alert, Button } from "react-native";
import * as Location from 'expo-location';
import { GetClima } from '../Axios/AxiosClient';

const Ubicacion = () => {

    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [text, setText] = useState(null)
    const [latitud, setLatitud] = useState(null)
    const [longitud, setLongitud] = useState(null)

    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
    }, []);

    useEffect(() => {
        let date = ShowCurrentDate();
        setDate(date);
    }, []);

    useEffect(() => {
        (async () => {

            await Location.requestForegroundPermissionsAsync();

            let location = await Location.getCurrentPositionAsync({});

            setLatitud( Math.round(location.coords.latitude * 100) / 100)
            setLongitud( Math.round(location.coords.longitude * 100) / 100)

            let resultado = await GetClima(latitud, longitud)
            setText(resultado.temp_c)

        })();
    }, []);

    ShowCurrentDate = () => {
        let todayDate = new Date();
        let date = todayDate.getDate();
        let month = todayDate.getMonth() + 1;
        let year = todayDate.getFullYear();

        return date + '-' + month + '-' + year;
    }

    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    return (

        <View style={styles.MainContainer}>

            <Text style={styles.paragraph}>{'Fecha actual'} : {date}</Text>
            <Text style={styles.paragraph}>{'Hora actual'} : {time}</Text>
            <Text style={styles.paragraph}>{'Ubicacion actual latitud'} : {latitud}</Text>
            <Text style={styles.paragraph}>{'Ubicacion actual longitud'} :{longitud }</Text>
            <Text style={styles.paragraph}>{'Temperatura actual segun ubicacion'} : {text}°</Text>

        </View>

    );
};

const styles = StyleSheet.create({
    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
        margin: 10

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Ubicacion;