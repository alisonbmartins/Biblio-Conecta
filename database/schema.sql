-- Criação da tabela de usuários
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user', -- user | admin
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de livros
CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    year INTEGER,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de exemplares (cada livro pode ter vários volumes)
CREATE TABLE copies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER NOT NULL,
    available INTEGER DEFAULT 1, -- 1 disponível | 0 emprestado
    FOREIGN KEY (book_id) REFERENCES books(id)
);

-- Tabela de empréstimos
CREATE TABLE loans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    copy_id INTEGER NOT NULL,
    loan_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    return_date DATETIME,
    status TEXT DEFAULT 'active', -- active | returned
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (copy_id) REFERENCES copies(id)
);

-- Tabela de reservas
CREATE TABLE reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    reservation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending', -- pending | canceled | completed
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

-- Índices para melhorar performance
CREATE INDEX idx_books_title ON books(title);
CREATE INDEX idx_books_author ON books(author);
CREATE INDEX idx_books_category ON books(category);
CREATE INDEX idx_loans_user ON loans(user_id);
CREATE INDEX idx_reservations_user ON reservations(user_id);
