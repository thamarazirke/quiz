import db from '../db/database.js';

export const listarTestes = (req, res) => {
  const sql = 'SELECT * FROM Teste';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const createTeste = (req, res) => {
  const { idusuario } = req.body;
  const data = new Date().toISOString();

  const sql = 'INSERT INTO Teste (data, idusuario) VALUES (?, ?)';
  db.run(sql, [data, idusuario], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, data, idusuario });
  });
};
