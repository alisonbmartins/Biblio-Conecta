import React, {useEffect, useState} from "react";
import api from "../../services/api";

export default function AdminDashboard(){
  const [books,setBooks]=useState([]);
  const [title,setTitle]=useState(""); const [author,setAuthor]="";
  useEffect(()=>{ load() },[]);
  function load(){ api.get("/books").then(r=>setBooks(r.data)).catch(()=>{}) }
  async function create(e){ e.preventDefault();
    try{ await api.post("/books", { title, author, category:"Geral" }); setTitle(""); setAuthor(""); load(); }
    catch(e){ console.error(e); alert("Erro") }
  }
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={create}>
        <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Autor" value={author} onChange={e=>setAuthor(e.target.value)} />
        <button type="submit">Criar</button>
      </form>
      <h3>Livros</h3>
      <ul>{books.map(b=> <li key={b.id}>{b.title} — {b.author}</li>)}</ul>
    </div>
  )
}
