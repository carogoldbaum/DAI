import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Boolean, length } from 'react-native';
import { ActionTypes, useContextState } from '../ContextState'

const InfoMenu = (props) => {

    const { contextState, setContextState } = useContextState();

    let PrecioMenu = 0
    let SumaHealthScore = 0
    let PlatosEnMenu = ""

    for (let i = 0; i < contextState.menu.lista.length; i++) {
        PrecioMenu += contextState.menu.lista[i].pricePerServing
        SumaHealthScore += contextState.menu.lista[i].healthScore
        PlatosEnMenu += contextState.menu.lista[i].title
    }

    let promedioHealthScore = SumaHealthScore / contextState.menu.lista.length

    return (
        <View>
            <Text style={styles.title1}>El promedio del healthScore es: {promedioHealthScore}</Text>

            <Text style={styles.title2}>El precio total es: {PrecioMenu}</Text>
            <Text style={styles.title3}>Platos ingregados: {PlatosEnMenu} </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    title1: {
        marginTop:-67,
        fontSize: 15,
    },
    title2: {
        marginTop:-70,
        fontSize: 15,
    },
    title3: {
        marginTop:-70,
        fontSize: 15,
    },

});

export default InfoMenu;