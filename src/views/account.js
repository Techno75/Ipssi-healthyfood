import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './../components/menu';

export default function Account({navigation}) {

  return (
    <View style={styles.accountContainer}>
        <Menu menuState={props.menuState}/>
        <Text>Je suis sur la page de mon compte</Text>
        <View style={styles.btn}>
            <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Scanner')}
            />
        </View>
    </View>
  );
 }

 const styles = StyleSheet.create({
    accountContainer: {
        backgroundColor : "blue",
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
