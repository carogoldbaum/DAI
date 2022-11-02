import React from 'react';
import { StyleSheet, View } from 'react-native';
import IngresarVideo from '../Components/IngresarVideo';
import { useNavigation } from '@react-navigation/native';
import Boton from "../Components/Boton";

const VideoFav = ({ navigation }) => {

    return (

        <View>
            <Boton
                text="Volver a Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <IngresarVideo></IngresarVideo>
        </View>

    );
}

export default VideoFav

const styles = StyleSheet.create({

});