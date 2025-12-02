import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function BooksScreen({ navigation }){
  const [books,setBooks]=useState([]);
  useEffect(()=>{ api.get('/books').then(r=>setBooks(r.data)).catch(()=>{}) },[]);
  return (
    <View style={{flex:1,padding:12}}>
      <FlatList data={books} keyExtractor={i=>String(i.id)} renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('BookDetail',{id:item.id})} style={{padding:10,borderBottomWidth:1}}>
          <Text style={{fontSize:16}}>{item.title}</Text>
          <Text>{item.author}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}
