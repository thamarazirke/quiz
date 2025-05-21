import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  // Abrir o banco de dados com suporte a Promises
  const db = await open({
    filename: path.resolve(__dirname, 'quiz_projeto.db'),
    driver: sqlite3.Database
  });

  try {
    // Fazer a consulta
    const rows = await db.all('SELECT * FROM Usuario');
    console.log('Dados da tabela Usuario:');
    rows.forEach(row => console.log(row));
  } catch (err) {
    console.error('Erro na consulta:', err.message);
  } finally {
    // Fechar o banco
    await db.close();
    console.log('Banco fechado');
  }
}

main();
