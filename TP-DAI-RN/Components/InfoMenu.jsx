import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Boolean, length } from 'react-native';
import { ActionTypes, useContextState } from '../ContextState'

const InfoMenu = (props) => {

    const { contextState, setContextState } = useContextState();

    let PrecioMenu = 0
    let SumaHealthScore = 0

    for (let i = 0; i < contextState.menu.lista.length; i++) {
        PrecioMenu += contextState.menu.lista[i].pricePerServing
        SumaHealthScore += contextState.menu.lista[i].healthScore
    }

    let promedioHealthScore = SumaHealthScore / contextState.menu.lista.length

    return (
        <View>
            <Text style={styles.title}>El promedio del healthScore es: {promedioHealthScore}</Text>

            <Text style={styles.title}>El precio total es: {PrecioMenu}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 15,
    },

});

export default InfoMenu;