import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BooksScreen from './src/screens/BooksScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Books" component={BooksScreen}/>
        <Stack.Screen name="BookDetail" component={BookDetailScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
