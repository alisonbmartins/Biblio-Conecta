import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";

export default function App() {
  return (
    <div>
      <header className="nav">
        <nav>
          <Link to="/">Home</Link> | <Link to="/books">Livros</Link> | <Link to="/admin">Admin</Link> | <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}
