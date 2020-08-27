import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from './../components/header';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './productList';
import ProductDetails from './productDetails';

const Stack = createStackNavigator();

export default function Home({navigation}) {

  return (
    <View style={styles.homeContainer}>
        <Header navigation={navigation}/>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="ProductList" 
                component={ProductList}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
        </Stack.Navigator>
    
    </View>
  );
 }

 const styles = StyleSheet.create({
    homeContainer: {
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
