import React, {useEffect, useState} from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Books(){
  const [books,setBooks]=useState([]);
  useEffect(()=>{ api.get("/books").then(r=>setBooks(r.data)).catch(()=>{}) },[]);
  return (
    <div>
      <h2>Livros</h2>
      <div style={{display:'grid',gap:12}}>
        {books.map(b=>(
          <div className="card" key={b.id}>
            <h3>{b.title}</h3>
            <p><strong>Autor:</strong> {b.author}</p>
            <p><strong>Categoria:</strong> {b.category}</p>
            <Link to={`/books/${b.id}`}>Ver</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
