import db from '../db/database.js';

export const createPergunta = (req, res) => {
  const { titulo, ordem, ativo, alternativas } = req.body;

  if (!titulo || !ordem || alternativas?.length === 0) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const sqlPergunta = `INSERT INTO Perguntas (titulo, ordem, ativo) VALUES (?, ?, ?)`;

  db.run(sqlPergunta, [titulo, ordem, ativo ? 1 : 0], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    const idpergunta = this.lastID;

    const sqlAlternativa = `INSERT INTO Alternativas (descricao, idperguntas, ordem, pontos, ativo)
                            VALUES (?, ?, ?, ?, ?)`;

    const stmt = db.prepare(sqlAlternativa);
    alternativas.forEach(alt => {
      stmt.run(alt.descricao, idpergunta, alt.ordem, alt.pontos, alt.ativo ? 1 : 0);
    });

    stmt.finalize(err => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Pergunta e alternativas salvas', id: idpergunta });
    });
  });
};
