import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import Header from './../components/header';

export default function ProductDetails({route, navigation}) {
  const { product } = route.params;

  return (
    <View style={styles.ProductDetailsContainer}>
        <Header navigation={navigation}/>
        <ScrollView >
                <View style={styles.topContainer}>
                    <Image style={styles.image} source={{uri: product.image_front_url}} />
                    <View style={styles.topTextContainer}>
                        <Text style={{...styles.bold, ...styles.bottomText}}>{product.product_name}</Text>
                        <Text style={{...styles.bold, ...styles.bottomText}}>{product.brands}</Text>
                        <Text style={{...styles.bold, ...styles.bottomText}}>Nutriscore : {product.nutrition_grade_fr}</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={styles.bottomContainer}>
                    <Text style={{...styles.bold, ...styles.bottomText}}>Ingrédiant :</Text>
                    <Text style={styles.bottomText}>{product.ingredients_text_fr}</Text>
                    <Text style={styles.bottomText}>Energie pour 100g : {product.energy_100g} {product.energy_unit}</Text>
                    <Text style={styles.bottomText}>Sel pour 100g : {product.salt_100g} {product.salt_unit}</Text>
                    <Text style={styles.bottomText}>Protéine pour 100g : {product.proteins_100g} {product.proteins_unit}</Text>
                    <Text style={styles.bottomText}>Matières graces pour 100g : {product.fat_100g} {product.fat_unit}</Text>
                    <Text style={styles.bottomText}>Sucre pour 100g : {product.sugars_100g} {product.sugars_unit}</Text>
                </View>
            </ScrollView>
            <View style={styles.btn2}>
                    <Entypo
                        name="home"
                        size={24}
                        color="#FFFFFF"
                        onPress={() => navigation.navigate('ProductList')}
                        style={styles.icon}
                    />
            </View>
            <View style={styles.btn}>
                    <MaterialCommunityIcons
                    name="barcode-scan"
                    size={24}
                    color="#FFFFFF"
                    onPress={() => navigation.navigate('Scanner')}
                    style={styles.icon}
                    />
            </View>
    </View>

  );
 }

 const styles = StyleSheet.create({
    ProductDetailsContainer: {
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
    btn2 : {
        position : "absolute",
        bottom: 100,
        right : 20,
        backgroundColor : '#71D64E',
        borderRadius : 30
    },
    icon:{
        padding : 15,
    },
    image : {
        width : 150,
        height: 300
    },
    topContainer : {
        flexDirection : "row",
        justifyContent : "space-around",
        paddingTop : 20
    },
    bottomContainer:{
        paddingLeft : 20,
        paddingRight : 20,},
    separator : {
        height:2,
        backgroundColor : "#000000",
        marginBottom : 20,
        marginTop:20
    },
    bottomText : {
        marginBottom : 10,
    },
    topTextContainer : {
        width : 180,
    },
    bold:{
      fontWeight : "bold"
    }
});
