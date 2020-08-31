import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from './../components/header';

export default function changeAccountInformation({navigation}) {
  const [name, setUserName] = useState("");
  const [firsteName, setUserFirstName] = useState("");
  const [age, setUserAge] = useState("");
  const [email, setUserEmail] = useState("");

  const changeUserData = async (product) => {
    try{
      let userData = JSON.parse(await AsyncStorage.getItem('UID1'));
      userData.userName = name;
      userData.userFirstName = firsteName;
      userData.userAge = age;
      userData.userEmail = email;
      await AsyncStorage.setItem('UID1', JSON.stringify(userData));
      navigation.navigate('Account');
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.changeAccountInformationContainer}>
      <Header navigation={navigation}/>
      <View style={styles.form}>
        <Text>Nom</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => setUserName(text)}
        value={name}
      />
      <Text>Prénom</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => setUserFirstName(text)}
        value={firsteName}
      />
      <Text>age</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUserAge(text)}
        value={age}
      />
      <Text>email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUserEmail(text)}
        value={email}
      />
      <Button
        onPress={changeUserData}
        title="Enregistrer"
        color="#71D64E"
      />
      </View>

    </View>
  );
 }

 const styles = StyleSheet.create({
    changeAccountInformationContainer: {
        flex : 1,
        position : "relative",
    },
    form : {
      padding : 20
    },
    input : {
      height: 40,
      backgroundColor : "#c7c7c7",
      marginTop : 10,
      marginBottom : 10,
      padding : 10,
      borderRadius : 20
    }
});
