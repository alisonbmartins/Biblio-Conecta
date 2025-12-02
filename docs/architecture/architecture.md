# 🏗️ Arquitetura do Sistema — BibliotecaConecta

Este documento descreve a arquitetura completa da plataforma, incluindo organização, camadas, integrações e padrões.

---

# 1. 🔍 Visão Geral

A plataforma BibliotecaConecta utiliza uma arquitetura moderna baseada em três camadas:
Frontend (Web + Mobile) → API REST (Backend Node.js) → Banco de Dados (SQLite + Prisma)


- **Frontend Web**: React + Vite  
- **Mobile**: React Native + Expo  
- **Backend**: Node.js + Express + Prisma  
- **Banco de Dados**: SQLite  
- **Autenticação**: JWT  

---

# 2. 🧱 Componentes Principais

## 2.1 Backend
- Estruturado em **Controllers**, **Services**, **Routes** e **Middleware**
- Implementado com **Express**
- Prisma para abstração do banco
- Autenticação por JWT

## 2.2 Banco de Dados
- Modelo principal:
  - Usuários
  - Livros
  - Reservas
  - Empréstimos

---

# 3. 📊 Modelo ER

USERS (1) --- (N) LOANS
USERS (1) --- (N) RESERVATIONS
BOOKS (1) --- (N) LOANS
BOOKS (1) --- (N) RESERVATIONS

**users**
- id  
- name  
- email  
- password (hash)  
- role (user/admin)

**books**
- id  
- title  
- author  
- category  
- description  
- available (boolean)

**reservations**
- id  
- userId  
- bookId  
- createdAt  

**loans**
- id  
- userId  
- bookId  
- loanDate  
- returnDate  
- returned (boolean)

---

# 4. 🔐 Fluxo de Autenticação

1. Usuário envia email + senha  
2. Backend valida e retorna **JWT**  
3. Token é armazenado no:
   - `localStorage` (web)
   - `AsyncStorage` (mobile)
4. Todas as rotas protegidas usam header:
Authorization: Bearer <token>

---

# 5. 🚀 Fluxos Importantes

## 5.1 Consulta de livros
Frontend > GET /books > Backend > Banco > Retorno

## 5.2 Reserva
Frontend > POST /reservations > Middleware (auth) > Regras > Banco

## 5.3 Empréstimo (admin)
Admin > POST /loans > Validação > Banco

---

# 6. 📦 Padrões e Boas Práticas

- MVC Modularizado  
- Princípio Single Responsibility  
- Tratamento padronizado de erros  
- Logs e interceptors no frontend  
- URL base configurada via `.env`  

---

# 7. 📌 Infraestrutura e Deploy

| Componente | Deploy |
|------------|--------|
| Backend | Render, Railway, VPS ou local |
| Web | Vercel |
| Mobile | Via Expo (APK ou Publish) |

---

# 8. ✔️ Conclusão

A arquitetura garante:
- Simplicidade  
- Escalabilidade  
- Baixo custo  
- Facilidade de manutenção  

Ideal para instituições de pequeno e médio porte.
