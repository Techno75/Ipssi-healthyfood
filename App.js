import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/views/home';
import Scanner from './src/views/scanner';
import Account from './src/views/account';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  
  const initailStorage = {
    userName : "Depretz",
    userFirstName : "Guillaume",
    userAge : 27,
    userEmail : "gdepretz@gmail.com",
    productList : []
  }

  AsyncStorage.setItem(
    'UID1',
    JSON.stringify(initailStorage),
  );

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="Scanner" component={Scanner} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection : "column"
  },
});
