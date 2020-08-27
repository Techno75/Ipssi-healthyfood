import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Menu from './menu';

export default function Header(props) {
  return (
    <View style={styles.header}>
        <View style={styles.titleContainer}>
            <Image
                style={styles.logo}
                source={require('./../assets/apple.png')}
            />
            <Text style={styles.title}>HealthyFood</Text>
        </View>
        <MaterialCommunityIcons
            name="menu"
            size={32}
            color="white"
            onPress={() => props.navigation.toggleDrawer()}
            style={styles.menu}
        />
    </View>
  );
}

const styles = StyleSheet.create({
   header: {
        height:80,
        backgroundColor: '#71D64E',
        justifyContent : "flex-end",
        alignItems : "flex-end",
        flexDirection : "row",
  },
  titleContainer :{
     flexDirection : "row",
     justifyContent : "space-between",
     width : 220,
     marginRight : 45
  },
  title : {
      paddingBottom : 10,
      fontSize : 32,
      color : "white",
      fontWeight : "900",
  },
  logo : {
      width : 29,
      height : 32,
      marginTop : 5,
  },
  menu :{
    paddingBottom : 12,
    paddingRight : 10
}
});
