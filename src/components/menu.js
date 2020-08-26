import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Menu(props) {
    const styles = StyleSheet.create({
        menuContainer: {
            height : 80,
            display : props.menuState === true ? "flex" : "none"
        }
    });

  return (
    <View style={styles.menuContainer}>
      <Button
        title="Accueil"
        color="#841584"
        onPress={()=>props.changeScreenView('Home')}
        />
      <Button
        title="Mon Compte"
        color="#841584"
        onPress={()=>props.changeScreenView('Account')}
        />
    </View>
  );
 }


