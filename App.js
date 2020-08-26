import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Menu from './src/components/menu';
import Home from './src/views/home';
import Scanner from './src/views/scanner';
import Account from './src/views/account';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App({navigation}) {
  let [menuState, setMenuState] = useState(false);

  const changeMenuState = () => {
    if(menuState === true){
      setMenuState(false);
    }
    else {
      setMenuState(true);
    }
  }

  const changeScreenView = (pageName)=>{
    navigation.navigate(pageName)
  }

  return (
    <View style={styles.container}>
      <Header changeMenuState={changeMenuState}/>
      <Menu menuState={menuState} changeScreenView={changeScreenView}/>
      <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
       >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Scanner" component={Scanner} />
       </Stack.Navigator>
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
