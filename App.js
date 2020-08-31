import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Scanner from './src/views/scanner';
import Account from './src/views/account';
import ProductList from './src/views/productList';
import ProductDetails from './src/views/productDetails';
import ChangeAccountInformation from './src/views/changeAccountInformation'
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
      <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >     
             <Stack.Screen 
              name="Scanner"
              component={Scanner}
            />  
            <Stack.Screen 
                name="ProductList" 
                component={ProductList}
            />
            <Stack.Screen
              name="Account"
              component={Account}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
            <Stack.Screen
                name="ChangeAccountInformation"
                component={ChangeAccountInformation}
            />
        </Stack.Navigator >
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
