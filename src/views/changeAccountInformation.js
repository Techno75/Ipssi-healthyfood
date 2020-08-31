import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from './../components/header';

export default function changeAccountInformation({navigation}) {
  const [name, setUserName] = useState("");
  const [firsteName, setUserFirstName] = useState("");
  const [age, setUserAge] = useState("");
  const [email, setUserEmail] = useState("");

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
        onPress={()=>{}}
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
