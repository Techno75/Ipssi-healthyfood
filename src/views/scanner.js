import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner'; 
import { AsyncStorage } from 'react-native';
import Header from './../components/header';
import { Entypo } from '@expo/vector-icons'; 

export default function Scanner({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const addProductToStaurage = async (product) => {
      try{
        let userData = JSON.parse(await AsyncStorage.getItem('UID1'));
        userData.productList.push(product);
        await AsyncStorage.setItem('UID1', JSON.stringify(userData));
      } catch(e) {
        console.log(e);
      }
    }

    const buildObjectWithOnlyTheUsefullInformation = (product) =>{
      return { 
        image_front_url : product.image_front_url,
        product_name : product.product_name,
        brands : product.brands,
        nutrition_grade_fr : product.nutrition_grade_fr,
        ingredients_text_fr : product.ingredients_text_fr,
        energy_100g : product.nutriments.energy_100g,
        energy_unit : product.nutriments.energy_unit,
        salt_100g : product.nutriments.salt_100g,
        salt_unit : product.nutriments.salt_unit,
        proteins_100g : product.nutriments.proteins_100g,
        proteins_unit : product.nutriments.proteins_unit,
        fat_100g : product.nutriments.fat_100g,
        fat_unit : product.nutriments.fat_unit,
        sugars_100g : product.nutriments.sugars_100g,
        sugars_unit : product.nutriments.sugars_unit
      }
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const URL = `https://world.openfoodfacts.org/api/v0/product/${data}.json`;
        fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          if(json.status === 0){
            setScanned(false);
            alert("Produit non répertorié");
            navigation.navigate('Scanner');
            return false;
          }
          const formatedProduct = buildObjectWithOnlyTheUsefullInformation(json.product);
          addProductToStaurage(formatedProduct);    
          navigation.navigate('ProductDetails', { product : formatedProduct });
          setScanned(false);
        })
        .catch((error) => {
          console.error(error);
        });
      }

      const handleBarCodeScannedOnClick = ({ type, data }) => {
        setScanned(true);
        const URL = `https://world.openfoodfacts.org/api/v0/product/7613035833302.json`;
        fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          if(json.status === 0){
            setScanned(false);
            alert("Produit non répertorié");
            navigation.navigate('Scanner');
            return false;
          }
          const formatedProduct = buildObjectWithOnlyTheUsefullInformation(json.product);
          addProductToStaurage(formatedProduct);         
          navigation.navigate('ProductDetails', { product : formatedProduct });
          setScanned(false);
        })
        .catch((error) => {
          console.error(error);
        });
      }

    return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      <View
          style={styles.flashIcon}>
          <TouchableOpacity
           onPress={handleBarCodeScannedOnClick}>
            <Entypo name="flashlight" size={24} color="#FFFFFF" style={{padding: 15}}/>
          </TouchableOpacity>
        </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    scannerContainer: {
        flex : 1,
        position : "relative",
    },
    flashIcon:{
        position: "absolute",
        bottom : 40,
        right: 30,
        backgroundColor : "#71D64E",
        borderRadius : 30
    }
});