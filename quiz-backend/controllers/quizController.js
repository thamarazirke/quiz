import db from '../db/database.js';

export const getQuiz = (req, res) => {
  const sql = `
    SELECT 
      p.id AS pergunta_id, 
      p.titulo, 
      p.ordem, 
      p.ativo,
      a.id AS alternativa_id, 
      a.descricao, 
      a.ordem AS alt_ordem, 
      a.pontos
    FROM Perguntas p
    JOIN Alternativas a ON a.idperguntas = p.id
    WHERE p.ativo = 1 AND a.ativo = 1
    ORDER BY p.ordem, a.ordem
  `;

  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const quiz = [];
    let currentPerguntaId = null;
    let perguntaAtual = null;

    rows.forEach(row => {
      if (row.pergunta_id !== currentPerguntaId) {
        perguntaAtual = {
          id: row.pergunta_id,
          titulo: row.titulo,
          ordem: row.ordem,
          ativo: row.ativo,
          alternativas: []
        };
        quiz.push(perguntaAtual);
        currentPerguntaId = row.pergunta_id;
      }

      perguntaAtual.alternativas.push({
        id: row.alternativa_id,
        descricao: row.descricao,
        ordem: row.alt_ordem,
        pontos: row.pontos
      });
    });

    res.json(quiz);
  });
};
