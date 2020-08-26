import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './../components/menu';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ProductDetails({navigation}) {
    console.log(navigation);
  return (
    <View style={styles.ProductDetailsContainer}>
        <Text>Je suis sur la page de détail d'un produit</Text>
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
    ProductDetailsContainer: {
        backgroundColor : "blue",
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
