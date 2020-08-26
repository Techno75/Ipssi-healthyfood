import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function changeAccountInformation({navigation}) {

  return (
    <View style={styles.changeAccountInformationContainer}>
        <Text>Je suis sur la page de formulaire sur information du compte</Text>
    </View>
  );
 }

 const styles = StyleSheet.create({
    changeAccountInformationContainer: {
        backgroundColor : "grey",
        flex : 1,
        position : "relative",
    },
});
