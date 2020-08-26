import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Home({navigation}) {

  return (
    <View style={styles.homeContainer}>
        <Text>Je suis sur la page d'accueil</Text>
        <View style={styles.btn}>
            <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Scanner')}
            style={styles.icon}
            />
        </View>
    </View>
  );
 }

 const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor : "grey",
        flex : 1,
        position : "relative",
    },
    btn : {
        position : "absolute",
        bottom: 30,
        right : 20,
        backgroundColor : '#71D64E',
        borderRadius : 30
    },
    icon:{
        padding : 15,
    }
});
