/*import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

const Item = ({ title, image, navigation}) => (
  <TouchableOpacity
    onPress={ () =>{ navigation.navigate('DetallePlato')}}
  >
   
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image}></Image>
    </View>

  </TouchableOpacity>
);

const ListaPlatos = (props) => {

  const {navigation, Detalle} = props

  return (
    <TouchableOpacity>
      <FlatList

        data={Detalle}
        renderItem={({ item }) => <Item navigation={navigation} title={item.title} image={item.image} />} 
        //agarra el objeto platos y lo separa en cada componente que almacena en item 
        //y lo convierte en un componente item y le envia la info del string 
        // a Item y lo muestra en Item
        keyExtractor={item => item.id}
        
      />
      </TouchableOpacity>
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

export default ListaPlatos;*/