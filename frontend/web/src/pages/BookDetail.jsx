import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function BookDetail(){
  const { id } = useParams();
  const [book,setBook]=useState(null);
  useEffect(()=>{ api.get(`/books/${id}`).then(r=>setBook(r.data)).catch(()=>{}) },[id]);
  if(!book) return <p>Carregando...</p>;
  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoria:</strong> {book.category}</p>
      <p>{book.description}</p>
    </div>
  )
}
