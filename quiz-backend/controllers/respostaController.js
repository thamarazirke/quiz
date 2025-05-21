import db from '../db/database.js';

export const salvarRespostas = (req, res) => {
  const { idusuario, respostas } = req.body;

  if (!idusuario || !respostas || !Array.isArray(respostas)) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const data = new Date().toISOString();

  // Criar o teste
  const insertTeste = 'INSERT INTO Teste (data, idusuario) VALUES (?, ?)';
  db.run(insertTeste, [data, idusuario], function(err) {
    if (err) return res.status(500).json({ error: err.message });

    const idteste = this.lastID;

    const insertResposta = 'INSERT INTO Resposta (idteste, idalternativa, pontos) VALUES (?, ?, ?)';
    const stmt = db.prepare(insertResposta);

    respostas.forEach(r => {
      stmt.run([idteste, r.idalternativa, r.pontos]);
    });

    stmt.finalize(err => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: 'Respostas salvas com sucesso', idteste });
    });
  });
};
