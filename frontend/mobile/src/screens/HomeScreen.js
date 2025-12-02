import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:22}}>BibliotecaConecta</Text>
      <Button title="Ver catálogo" onPress={()=>navigation.navigate('Books')} />
      <Button title="Login" onPress={()=>navigation.navigate('Login')} />
    </View>
  )
}
