import db from '../db/database.js';

const getAlternativas = (req, res) => {
  const { idpergunta } = req.params;
  const sql = 'SELECT * FROM Alternativas WHERE idperguntas = ? AND ativo = 1 ORDER BY ordem';

  db.all(sql, [idpergunta], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

const createAlternativa = (req, res) => {
  const { descricao, idperguntas, ordem, pontos, ativo } = req.body;
  if (!descricao || !idperguntas) {
    return res.status(400).json({ error: 'descricao e idperguntas são obrigatórios' });
  }

  const sql = `
    INSERT INTO Alternativas (descricao, idperguntas, ordem, pontos, ativo)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [descricao, idperguntas, ordem || null, pontos || 0, ativo === undefined ? 1 : ativo], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
};

export default {
  getAlternativas,
  createAlternativa
};
