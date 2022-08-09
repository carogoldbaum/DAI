import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Platform, SafeAreaProvider} from "react-native";
const MarvelList = [
  {id: 1, name: 'Black Panter'},
  {id: 2, name: 'Black Widow'},
  {id: 3, name: 'Captain America'},
  {id: 4, name: 'The Collector'},
  {id: 5, name: 'Doctor Strange'},
  {id: 6, name: 'Hawkeye'},
  {id: 7, name: 'Heimdall'},
  {id: 8, name: 'Hela'},
  {id: 9, name: 'Hulk'},
  {id: 10, name: 'Iron Man'},
  {id: 11, name: 'Loki'},
  {id: 12, name: 'Nick Fury'},
  {id: 13, name: 'Falcon'},
  {id: 14, name: 'Wanda Maximoff'},
  {id: 15, name: 'Shocker'},
  {id: 16, name: 'Spider-Man'},
  {id: 17, name: 'Thanos'},
  {id: 18, name: 'Thor'},
  {id: 19, name: 'Valkyrie'},
  {id: 20, name: 'Vision'},
  {id: 21, name: 'Vulture'},
  {id: 22, name: 'War Machine'},
  {id: 23, name: 'Winter Solder'},
  ];

const myKeyExtractor = (item) => {
  return item.id
}

const renderItem = ({item}) => {
  return <View><Text>{item.name}</Text></View>
}

const Marvel = () => {
    const [refreshing, setRefreshing] = React.useState(false)

    const handleRefresh = () => {
      setRefreshing(prevState => !prevState)
    }

      return (
        <SafeAreaView style={styles.separateHero}>
          <FlatList
            data={MarvelList}
            renderItem={renderItem}
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
               (({ highlighted }) => (
                 <View
                    style={
                       styles.separator
             }
                />
              ))
            }
            keyExtractor={myKeyExtractor}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: '#ff0000',
  },
  separateHero: {
    height: '100vh' 
},
});


export default Marvel
