import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from './../components/header';

export default function changeAccountInformation({navigation}) {

  return (
    <View style={styles.changeAccountInformationContainer}>
      <Header navigation={navigation}/>
        <Text>Je suis sur la page de formulaire sur information du compte</Text>
    </View>
  );
 }

 const styles = StyleSheet.create({
    changeAccountInformationContainer: {
        flex : 1,
        position : "relative",
    },
});
