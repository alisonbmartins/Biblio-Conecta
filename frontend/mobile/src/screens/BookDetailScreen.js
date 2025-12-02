import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default function BookDetailScreen({ route }){
  const { id } = route.params;
  const [book,setBook]=useState(null);
  useEffect(()=>{ api.get(`/books/${id}`).then(r=>setBook(r.data)).catch(()=>{}) },[id]);
  if(!book) return <View><Text>Carregando...</Text></View>;
  return (
    <View style={{padding:16}}>
      <Text style={{fontSize:20}}>{book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Text>Categoria: {book.category}</Text>
      <Text style={{marginTop:12}}>{book.description}</Text>
    </View>
  )
}
