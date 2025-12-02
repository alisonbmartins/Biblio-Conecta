# Biblio-Conecta
📚 BibliotecaConecta

BibliotecaConecta é uma plataforma completa desenvolvida para modernizar a interação entre bibliotecas e seus usuários. O sistema inclui:

✅ Backend em Node.js + Prisma + SQLite
✅ Aplicação Web em React (Vite)
✅ Aplicativo Mobile em React Native (Expo)
✅ Documentação técnica detalhada
✅ Validação com público-alvo e relatório

A plataforma oferece ferramentas para consulta de acervo, reservas, empréstimos e administração simples e eficiente.

🧭 Sumário

📚 Sobre o Projeto

✨ Funcionalidades

🏗️ Arquitetura

🛠️ Tecnologias Utilizadas

📦 Estrutura do Repositório

▶️ Como Rodar o Projeto

🔌 Backend

🖥️ Frontend Web

📱 Aplicativo Mobile

📘 API

🖼️ Telas

🤝 Contribuição

📄 Licença

📚 Sobre o Projeto

O BibliotecaConecta tem como objetivo facilitar o acesso a serviços e informações de bibliotecas públicas e privadas.

A plataforma foi criada para:

📱 Usuários comuns — consultar livros, fazer reservas e acompanhar empréstimos.
🖥️ Administradores — gerenciar acervo, usuários e relatórios de forma centralizada.

O projeto foi desenvolvido como parte de um trabalho acadêmico, seguindo boas práticas de engenharia de software, documentação, versionamento e usabilidade.

✨ Funcionalidades
👤 Para Usuários

🔍 Pesquisar livros por título, autor ou categoria

📦 Ver disponibilidade de exemplares

📅 Realizar reservas

📚 Acompanhar empréstimos ativos

🧾 Consultar histórico

🛠️ Para Administradores

📊 Painel completo de gerenciamento

➕ CRUD de livros

👥 CRUD de usuários

📘 Controle de empréstimos e devoluções

📝 Emissão de relatórios simples

🏗️ Arquitetura

A arquitetura segue o modelo cliente-servidor, dividida em três camadas:

frontend/web        → Interface web para usuários e admins
frontend/mobile     → Aplicativo mobile (Expo)
backend             → API REST em Node.js
database            → SQLite gerenciado via Prisma
docs                → Documentação técnica do projeto
validation          → Relatório e evidências da validação do sistema


O backend expõe uma API REST consumida pelos aplicativos web e mobile.

🛠️ Tecnologias Utilizadas
Backend

Node.js

Express

SQLite

Prisma ORM

JWT Auth

Bcrypt

Frontend Web

React + Vite

Axios

React Router

Aplicativo Mobile

React Native (Expo)

Axios

AsyncStorage

📦 Estrutura do Repositório
/
├── README.md
├── docs/
│   ├── requirements/requirements.md
│   ├── architecture/architecture.md
│   ├── api/api_documentation.md
│
├── validation/
│   ├── target_audience.md
│   ├── validation_report.md
│   ├── evidence/
│   └── feedback/
│
├── frontend/
│   ├── web/
│   └── mobile/
│
├── backend/
│   ├── src/
│   ├── tests/
│   └── package.json
│
└── database/
    └── schema.sql

▶️ Como Rodar o Projeto
🔌 Backend
cd backend
npm install
npx prisma migrate dev --name init
npm run dev


Servidor disponível em:
👉 http://localhost:3000

🖥️ Frontend Web
cd frontend/web
npm install
npm start


Aplicação disponível em:
👉 http://localhost:5173

📱 Aplicativo Mobile (Expo)
cd frontend/mobile
npm install
npx expo start


Use:

📱 Cellphone + Expo Go
📱 Emulador Android / iOS

📘 API

A API segue o padrão REST.
Documentação completa disponível em:

📄 /docs/api/api_documentation.md

Endpoints principais:

Método	Endpoint	Descrição
GET	/books	Listar livros
POST	/books	Criar livro
POST	/auth/login	Login
POST	/reservations	Criar reserva
PUT	/loans/return/:id	Registrar devolução
🖼️ Telas
✔ Tela de Login
✔ Dashboard
✔ Lista de Livros
✔ Detalhes
✔ Reservas
✔ Gerenciamento (Admin)

(inclua screenshots em /validation/evidence)

🤝 Contribuição

Sinta-se livre para contribuir!
Passos:

Faça um fork

Crie uma branch (feature/minha-feature)

Envie um PR

📄 Licença

Este projeto está licenciado sob a MIT License.
Você pode usar, modificar e distribuir livremente.

📌 Autores do Projeto

Alison Braga Martins — Frontend + Mobile

Raphael Rodrigues de Sousa — Backend