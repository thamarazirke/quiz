import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.resolve(__dirname, 'quiz_projeto.db');
const sqlite = sqlite3.verbose();
const db = new sqlite.Database(dbPath);

db.serialize(() => {
  db.all(`SELECT * FROM Usuario`, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Dados da tabela Usuario:');
    rows.forEach((row) => {
      console.log(row);
    });
  });
});

db.close();
