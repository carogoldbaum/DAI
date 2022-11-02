import React from 'react';
import { StyleSheet, View} from 'react-native';
import IngresarAlmacenar from '../Components/IngresarAlmacenar';
import { useNavigation } from '@react-navigation/native';
import Boton from "../Components/Boton";

const ConfiguraciónNumero = ({ navigation }) => {

    return (

        <View>
            <Boton
                text="Volver a Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <IngresarAlmacenar></IngresarAlmacenar>
        </View>

    );
}

export default ConfiguraciónNumero

const styles = StyleSheet.create({

});