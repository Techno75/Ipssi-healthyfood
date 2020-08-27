import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AsyncStorage } from 'react-native';

export default function ProductList({navigation}) {

   const [produlist, setProductList] = useState([]);
    
   const stockDataStorageInTheState = () => {
    AsyncStorage.getItem('UID1', (err, result) => {
        setProductList(JSON.parse(result).productList)
        console.log(produlist.length);
        console.log(produlist); 
    });  
   }

  useEffect(stockDataStorageInTheState,[]);

  return (
    <View style={styles.accountContainer}>
        {produlist.length === 0 }
        <Text>Je suis sur la page home list de produit</Text>
        <View style={styles.btn}>
            <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color="#FFFFFF"
            onPress={() => navigation.navigate('Scanner')}
            />
        </View>
    </View>
  );
 }

 const styles = StyleSheet.create({
    accountContainer: {
        backgroundColor : "#FFFFFF",
        flex : 1,
        position : "relative",
    },
    btn : {
        position : "absolute",
        bottom: 30,
        right : 20,
        backgroundColor : '#71D64E',
        padding : 15,
        borderRadius : 30
    }
});
