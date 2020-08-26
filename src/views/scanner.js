import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Entypo } from '@expo/vector-icons'; 

export default function Scanner({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
    const [torchIsOn, toggleTorch] = useState(Camera.Constants.FlashMode.off);

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

    const handleBarCodeScanned = ({ type, data }) => {
        console.log(data);
        setScanned(true);
        const URL = "https://world.openfoodfacts.org/api/v0/product/3068320114453.json";
        console.log('https://world.openfoodfacts.org/api/v0/product/' + data + '.json');
        fetch(URL)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
          navigation.navigate('ProductDetails',
          {
            item: json
          })
          toggleScanned(false)
        })
        .catch((error) => {
          console.error(error);
        });
      };

    return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
       >
        <View
          style={styles.flashIcon}>
          <TouchableOpacity
           onPress={() => {
            toggleTorch(
            torchIsOn === Camera.Constants.FlashMode.off
            ? Camera.Constants.FlashMode.torch
            : Camera.Constants.FlashMode.off
            )}}>
            <Entypo name="flashlight" size={24} color="#FFFFFF" style={{padding: 15}}/>
          </TouchableOpacity>
        </View>
      </Camera>
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
