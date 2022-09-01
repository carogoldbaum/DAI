import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Boolean } from 'react-native';
import { ActionTypes, useContextState } from '../ContextState'
import BotonAgregar from "../Components/BotonAgregar";
import BotonEliminar from "../Components/BotonEliminar";

const Item = ({ title, image, pricePerServing, healthScore, vegan }) => (
  <View>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>El precio es: {pricePerServing}</Text>
      <Text style={styles.title}>El healthScore es: {healthScore}</Text>

      {vegan ? <Text>El plato es vegano</Text> : <Text>El plato no es vegano</Text>}
    </View>
  </View>
);

const CardPlato = (props) => {

  const { navigation, Detalle } = props
  const { contextState, setContextState } = useContextState();
  const [MostrarBoton, setMostrarBoton] = useState(false);

  let existePlato = contextState.menu.lista.find(plato => plato.id === Detalle.id)

  useEffect(() => {
    {
      let HayVeganos = 0

      for (let i = 0; i < contextState.menu.lista.length; i++) {
        if (Detalle.vegan === contextState.menu.lista[i].vegan) {
          HayVeganos += contextState.menu.cantVeganos + 1
        }
      }

      if (HayVeganos === 2) {
        setMostrarBoton(true)
      }
    }
  }, [])

  return (
    <View>
      <Item title={Detalle.title} image={Detalle.image} pricePerServing={Detalle.pricePerServing} healthScore={Detalle.healthScore} vegan={Detalle.vegan} />
      {
        existePlato
          ?
          <>
            <BotonEliminar style={{ fontSize: 48 }}
              text="ELIMINAR"
              onPress={async () => {
                setContextState({
                  type: ActionTypes.SetMenuDescontarPricePerServing,
                  value: Detalle.pricePerServing,
                });

                setContextState({
                  type: ActionTypes.SetMenuDescontarHealthScore,
                  value: Detalle.healthScore,
                });
                setContextState({
                  type: ActionTypes.SetMenuEliminarId,
                  value: Detalle.id,
                });
                navigation.navigate('Home')
              }}
            />
          </>
          :
          contextState.menu.lista.length < 4
            ?
            <>
              <BotonAgregar style={{ fontSize: 48 }}
                text="AGREGAR"
                onPress={async () => {

                  let HayVeganos = 0

                  for (let i = 0; i < contextState.menu.lista.length; i++) {
                    if (Detalle.vegan === contextState.menu.lista[i].vegan) {
                      HayVeganos += contextState.menu.cantVeganos + 1
                    }
                  }

                  if (HayVeganos >= 2) {
                    setMostrarBoton(true)

                  } else {
                  
                    setContextState({
                      type: ActionTypes.SetMenuPrecio,
                      value: Detalle.pricePerServing,
                    });

                    setContextState({
                      type: ActionTypes.SetMenuHealthScore,
                      value: Detalle.healthScore,
                    });
                    setContextState({
                      type: ActionTypes.SetMenuLista,
                      value: Detalle,
                    });
                    navigation.navigate('Home')
                  }
                }
                }
              />
            </>
            :
            <View>
              <Text>El menu ya tiene 4 platos</Text>
              <>
                <BotonAgregar style={{ fontSize: 48 }}
                  text="VOLVER ATRAS"
                  onPress={async () => {

                    navigation.navigate('Home')
                  }}
                />
              </>
            </View>
      }
      {MostrarBoton
        ?
        <View>
          <Text>El menu ya tiene 2 platos de ese tipo</Text>
          <>
            <BotonAgregar style={{ fontSize: 48 }}
              text="VOLVER ATRAS, YA HAY 2 DE ESE TIPO"
              onPress={async () => {

                navigation.navigate('Home')
              }}
            />
          </>
        </View>
        :
        null
      }

    </View>
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
    height: 70,
  },
});

export default CardPlato;