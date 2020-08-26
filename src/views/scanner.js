import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Scanner({navigation}) {

  return (
    <View style={styles.scannerContainer}>
        <Text>Je suis sur la page Scanner</Text>
    </View>
  );
 }

 const styles = StyleSheet.create({
    scannerContainer: {
        backgroundColor : "yellow",
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
