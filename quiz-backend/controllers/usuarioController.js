import db from '../db/database.js';

export const getUsuarios = (req, res) => {
  db.all('SELECT * FROM Usuario', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const createUsuario = (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) return res.status(400).json({ error: 'Nome e email obrigatórios' });

  const sql = 'INSERT INTO Usuario (nome, email) VALUES (?, ?)';
  db.run(sql, [nome, email], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, nome, email });
  });
};

export default {
  getUsuarios,
  createUsuario
};
