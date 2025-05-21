import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Suporte ao __dirname em ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o banco
const dbPath = path.resolve(__dirname, '../meubanco.db');

// Instância do banco
const db = new sqlite3.Database(dbPath);

// Exporta o banco
export default db;
