import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from 'expo-location';
import { GetClima } from '../Axios/AxiosClient';
import { GetLocation } from '../Axios/AxiosClient';
import Boton from "../Components/Boton";

const Ubicacion = ({navigation}) => {

    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [text, setText] = useState(null)
    const [locacion, setLocacion] = useState(null)
    const [latitud, setLatitud] = useState(null)
    const [longitud, setLongitud] = useState(null)

    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);     
        let date = ShowCurrentDate();
        setDate(date); 
    }, []);

    useEffect(() => {
        (async () => {

            await Location.requestForegroundPermissionsAsync();

            let location = await Location.getCurrentPositionAsync({});

            setLatitud(Math.round(location.coords.latitude * 100) / 100)
            setLongitud(Math.round(location.coords.longitude * 100) / 100)

           // let ubicacion = await GetLocation(latitud, longitud)
           // setLocacion(ubicacion.results.formatted)

           let resultado = await GetClima(latitud, longitud)//hablado en clase, anda pero una vez levantado hay que esperar a que de error y modificar algo(el catch y el then por ejemplo) que involucre la llamada y actualizar
            setText(resultado.temp_c)

            console.log("resuyltado dfgdfhfffffffffffffffffffffffffffffffffffffffffff", locacion)
           // console.log("resuyltado locacionnnnnnnnnnnnnnnnn", ubicacion.results.formatted)
            console.log("resuyltado temperatura", resultado)
            console.log("resuyltado temperaturasfdfsf", resultado.temp_c)

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
          <>
            <Boton
                text="Volver a Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <View style={styles.MainContainer}>

                <Text style={styles.paragraph}>{'Fecha actual'} : {date}</Text>
                <Text style={styles.paragraph}>{'Hora actual'} : {time}</Text>
                <Text style={styles.paragraph}>{'Ubicacion actual latitud'} : {latitud}</Text>
                <Text style={styles.paragraph}>{'Ubicacion actual longitud'} :{longitud}</Text>
                <Text style={styles.paragraph}>{'Usted esta en'} :{locacion}</Text>
                <Text style={styles.paragraph}>{'Temperatura actual segun ubicacion'} : {text}°</Text>

            </View>
        </>

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