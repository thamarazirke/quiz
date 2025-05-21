const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'quiz_projeto.db');
const db = new sqlite3.Database(dbPath);

// db.serialize(() => {
//   // Criar tabela Usuario
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Usuario (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       nome TEXT NOT NULL,
//       email TEXT NOT NULL UNIQUE
//     );
//   `);

//   // Criar tabela Perguntas
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Perguntas (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       titulo TEXT NOT NULL,
//       ordem INTEGER,
//       ativo BOOLEAN DEFAULT 1
//     );
//   `);

//   // Criar tabela Alternativas
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Alternativas (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       descricao TEXT NOT NULL,
//       idperguntas INTEGER NOT NULL,
//       ordem INTEGER,
//       pontos INTEGER,
//       ativo BOOLEAN DEFAULT 1,
//       FOREIGN KEY (idperguntas) REFERENCES Perguntas(id)
//     );
//   `);

//   // Criar tabela Teste
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Teste (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       data TEXT NOT NULL,
//       idusuario INTEGER NOT NULL,
//       FOREIGN KEY (idusuario) REFERENCES Usuario(id)
//     );
//   `);

//   // Criar tabela Resposta
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Resposta (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       idteste INTEGER NOT NULL,
//       idalternativa INTEGER NOT NULL,
//       pontos INTEGER,
//       FOREIGN KEY (idteste) REFERENCES Teste(id),
//       FOREIGN KEY (idalternativa) REFERENCES Alternativas(id)
//     );
//   `);

//   console.log('Todas as tabelas foram criadas com sucesso!');
// });

db.close();
