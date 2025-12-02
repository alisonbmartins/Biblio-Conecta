import React, {useState} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const nav = useNavigate();
  async function submit(e){ e.preventDefault();
    try{
      const res = await api.post("/auth/login",{ email, password });
      const token = res.data.token || res.data?.token || res.data;
      if(!token) return alert("Login falhou");
      localStorage.setItem("token", token);
      nav("/");
    }catch(err){ console.error(err); alert("Erro no login"); }
  }
  return (
    <div style={{maxWidth:420}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email"/></div>
        <div><label>Senha</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password"/></div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
