import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from './../components/header';
import { AsyncStorage } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Account({navigation}) {

    const [userData, setUserData] = useState({});

    const stockDataStorageInTheState = () => {
        AsyncStorage.getItem('UID1', (err, result) => {
            let userDataParse = JSON.parse(result);
            userDataTmp = {
                name : userDataParse.userName,
                firstName : userDataParse.userFirstName,
                age : userDataParse.userAge,
                email : userDataParse.userEmail,
                numberOfProductScanned : userDataParse.productList.length
            }
            setUserData(userDataTmp)
        });  
       }
    
      useEffect(stockDataStorageInTheState,[]);

  return (
    <View style={{ flex : 1}}>
        <Header navigation={navigation}/>
        <View style={styles.accountContainer}>
            <Image
                style={styles.logo}
                source={require('./../assets/icone.png')}
            />
            <Text>{userData.name}</Text>
            <Text>{userData.firstName}</Text>
            <Text>{userData.age} ans</Text>
            <Text>Email : {userData.email}</Text>
            <Text>Nombre de produit scanné : {userData.numberOfProductScanned}</Text>
            <View style={styles.btn3}>
              <FontAwesome
              name="pencil"
              size={24}
              color="#FFFFFF"
              style={styles.icon} 
              onPress={() => navigation.navigate('ChangeAccountInformation')}
              />
            </View>
            <View style={styles.btn2}>
                    <Entypo
                        name="home"
                        size={24}
                        color="#FFFFFF"
                        onPress={() => navigation.navigate('ProductList')}
                         style={styles.icon} />
            </View>
            <View style={styles.btn}>
                <MaterialCommunityIcons
                name="barcode-scan"
                size={24}
                color="#FFFFFF"
                onPress={() => navigation.navigate('Scanner')}
                />
            </View>
        </View>  
    </View>
  );
 }

 const styles = StyleSheet.create({
    accountContainer: {
        backgroundColor : "#FFFFFF",
        flex : 1,
        position : "relative",
        justifyContent :"center",
        alignItems : "center"
    },
    btn : {
        position : "absolute",
        bottom: 30,
        right : 20,
        backgroundColor : '#71D64E',
        padding : 15,
        borderRadius : 30
    },
    btn2 : {
        position : "absolute",
        bottom: 100,
        right : 20,
        backgroundColor : '#71D64E',
        borderRadius : 30
    },
    btn3 : {
        position : "absolute",
        bottom: 100,
        right : 20,
        backgroundColor : '#71D64E',
        borderRadius : 30
    },
    icon:{
        padding : 15,
    },
    logo : {
        height : 100,
        width : 100
    }
});
