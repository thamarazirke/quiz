import fetch from 'node-fetch';

console.log('Script iniciado...');

const perguntas = [
  {
    titulo: "Qual a origem do Bulldog Francês?",
    ordem: 1,
    ativo: true,
    alternativas: [
      { descricao: "França", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Inglaterra", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Alemanha", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual é o porte médio do Bulldog Francês?",
    ordem: 2,
    ativo: true,
    alternativas: [
      { descricao: "Pequeno", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Médio", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Grande", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual dessas é uma característica física do Bulldog Francês?",
    ordem: 3,
    ativo: true,
    alternativas: [
      { descricao: "Focinho achatado", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Orelhas caídas", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Cauda longa", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "O Bulldog Francês geralmente se dá bem com:",
    ordem: 4,
    ativo: true,
    alternativas: [
      { descricao: "Crianças e outros animais", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Apenas adultos", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Apenas outros cães", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual é um possível problema de saúde comum na raça?",
    ordem: 5,
    ativo: true,
    alternativas: [
      { descricao: "Problemas respiratórios", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Problemas de audição", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Problemas dentários", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Quantas vezes por dia um Bulldog Francês adulto deve comer?",
    ordem: 6,
    ativo: true,
    alternativas: [
      { descricao: "2 vezes", ordem: 1, pontos: 1, ativo: true },
      { descricao: "1 vez", ordem: 2, pontos: 0, ativo: true },
      { descricao: "4 vezes", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual é o nível de energia típico da raça?",
    ordem: 7,
    ativo: true,
    alternativas: [
      { descricao: "Moderado", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Muito alto", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Muito baixo", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "O Bulldog Francês costuma latir muito?",
    ordem: 8,
    ativo: true,
    alternativas: [
      { descricao: "Não, costuma ser silencioso", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Sim, late bastante", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Só quando está sozinho", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual é a expectativa de vida média do Bulldog Francês?",
    ordem: 9,
    ativo: true,
    alternativas: [
      { descricao: "10 a 12 anos", ordem: 1, pontos: 1, ativo: true },
      { descricao: "5 a 7 anos", ordem: 2, pontos: 0, ativo: true },
      { descricao: "15 a 18 anos", ordem: 3, pontos: 0, ativo: true },
    ],
  },
  {
    titulo: "Qual ambiente é mais adequado para um Bulldog Francês?",
    ordem: 10,
    ativo: true,
    alternativas: [
      { descricao: "Ambientes internos", ordem: 1, pontos: 1, ativo: true },
      { descricao: "Fazenda com muito espaço", ordem: 2, pontos: 0, ativo: true },
      { descricao: "Ambientes muito quentes", ordem: 3, pontos: 0, ativo: true },
    ],
  },
];

async function enviarPerguntas() {
  for (const pergunta of perguntas) {
    try {
      const res = await fetch('http://localhost:3000/perguntas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pergunta),
      });
      const data = await res.json();
      console.log(`Pergunta "${pergunta.titulo}" enviada:`, data);
    } catch (err) {
      console.error('Erro ao enviar pergunta:', err);
    }
  }

  console.log('Script finalizado com sucesso!');
}

enviarPerguntas();
