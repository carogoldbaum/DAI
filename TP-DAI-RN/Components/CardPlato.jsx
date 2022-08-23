import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Card } from 'react-native';

const Item = ({ title, image, descripcion}) => (

   <View
  
  >
   
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image}></Image>
      <Text style={styles.title}>{descripcion}</Text>
    </View>

  </View>
);

const CardPlato = (props) => {

  const {navigation, Detalle} = props
  
  return (
    <Item title={Detalle.title} image={Detalle.image} descripcion={Detalle.summary}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 70,
    height:70,
  },
});

export default CardPlato;