import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export default function LoginScreen({ navigation }){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  async function handleLogin(){
    try{
      const res = await api.post('/auth/login',{ email, password });
      const token = res.data.token || res.data?.token || res.data;
      if(token){
        await AsyncStorage.setItem('token', token);
        navigation.navigate('Home');
      } else alert('Token não recebido');
    }catch(e){ console.error(e); alert('Erro no login') }
  }
  return (
    <View style={{padding:16}}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{borderWidth:1,padding:8,marginBottom:12}}/>
      <Text>Senha</Text>
      <TextInput value={password} secureTextEntry onChangeText={setPassword} style={{borderWidth:1,padding:8,marginBottom:12}}/>
      <Button title="Entrar" onPress={handleLogin}/>
    </View>
  )
}
