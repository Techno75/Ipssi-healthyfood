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
    const [userData, setUserData] = useState({});

  const getUserData = () => {
    AsyncStorage.getItem('UID1', (err, result) => {
      setUserData(JSON.parse(result))
    });  
   }

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        getUserData();
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
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
          let userDataUpdated = {...userData};
          userDataUpdated.productList.push( json.product);
          AsyncStorage.setItem(
            'UID1',
            JSON.stringify(userData),
            () => {
              AsyncStorage.mergeItem(
                'UID1',
                JSON.stringify(userDataUpdated)
              );
            }
          );
          navigation.navigate('ProductDetails', { product : json.product });
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
          let userDataUpdated = {...userData};
          userDataUpdated.productList.push( json.product);
          AsyncStorage.setItem(
            'UID1',
            JSON.stringify(userData),
            () => {
              AsyncStorage.mergeItem(
                'UID1',
                JSON.stringify(userDataUpdated)
              );
            }
          );
          navigation.navigate('ProductDetails', { product : json.product });
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