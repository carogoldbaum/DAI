import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, SafeAreaView } from "react-native";
import Contact from "../Components/Contact";
import * as Contacts from "expo-contacts";

const ContactsList = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => { //falta mostrar contacto de emergencia con imagen
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],

        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView>
        <FlatList
            data={contacts}
            renderItem={(data) => <Contact {...data.item} />}
            keyExtractor={item => item.id.toString()}
            style={styles.list}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10
  },
});

export default ContactsList;