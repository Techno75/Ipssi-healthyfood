import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AsyncStorage } from 'react-native';
import Header from './../components/header';

export default function ProductList({navigation}) {

    const [userData, setUserData] = useState({});
    const [productList, setProductList] = useState([]);

    const stockDataStorageInTheState = () => {
        AsyncStorage.getItem('UID1', (err, result) => {
            let userDataParse = JSON.parse(result);
            setProductList(userDataParse.productList) 
        });  
       }
    
      useEffect(stockDataStorageInTheState,[]);

  return (
    <View style={styles.accountContainer}>
        <Header navigation={navigation}/>
        <ScrollView >
            {productList.length === 0 ? <Text>Aucun Produit Scanné</Text> : productList.map((product, index)=>{
            return (    
                <TouchableOpacity
                 onPress={() =>  navigation.navigate('ProductDetails', { product }) }
                 key={index}
                >
                     <View style={styles.card}>
                            <Image source={{uri : product.image_front_url}} style={styles.smallIamge} />
                            <View>
                                <Text style={{fontWeight : "bold", width : 230}}>{product.product_name}</Text>
                                <Text style={{width : 230}}>{product.brands}</Text>
                                <Text>Nutriscore : {product.nutrition_grade_fr}</Text>
                            </View>                    
                        </View> 
               </TouchableOpacity>                
            )
            })}
        </ScrollView>
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
    },
    smallIamge : {
        height : 150,
        width : 150,
        marginRight : 20
    },
    card : {
        flexDirection : "row",
        paddingRight : 20,
        alignItems : "center",
        borderBottomColor : "#000000",
        borderBottomWidth : 1
    }
});
