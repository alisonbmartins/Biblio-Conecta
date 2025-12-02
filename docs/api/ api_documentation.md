# 📘 Documentação da API — BibliotecaConecta

API REST construída em Node.js + Express, usando autenticação JWT e Prisma ORM.

Base URL: http://localhost:3030


---

# 1. 🔐 Autenticação

## POST /auth/login
Envia credenciais e recebe token.

### Request
```json
{
  "email": "alison@gmail.com",
  "password": "123456"
}

Response
{
  "token": "<jwt-token>"
}
