const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'quiz_projeto.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`INSERT INTO Usuario (nome, email) VALUES (?, ?)`, ['Thamara', 'tthamara@email.com'], function(err) {
    if (err) return console.error(err.message);
    console.log(`Usuário inserido com id ${this.lastID}`);

    db.run(`INSERT INTO Perguntas (titulo, ordem, ativo) VALUES (?, ?, ?)`, ['Qual a capital do Brasil?', 1, 1], function(err) {
      if (err) return console.error(err.message);
      console.log(`Pergunta inserida com id ${this.lastID}`);

      db.run(`INSERT INTO Alternativas (descricao, idperguntas, ordem, pontos, ativo) VALUES (?, ?, ?, ?, ?)`, ['Brasília', this.lastID, 1, 10, 1], function(err) {
        if (err) return console.error(err.message);
        console.log(`Alternativa inserida com id ${this.lastID}`);

        // Continue com outros inserts aqui, sempre encadeando callbacks ou use Promise para simplificar

        // Feche o DB aqui, após os inserts terminarem
        db.close((err) => {
          if (err) return console.error(err.message);
          console.log('Banco fechado');
        });
      });
    });
  });
});
