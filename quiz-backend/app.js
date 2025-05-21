import express from 'express';
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import perguntaRoutes from './routes/perguntaRoutes.js';
import alternativaRoutes from './routes/alternativaRoutes.js';
import testeRoutes from './routes/testeRoutes.js';
import respostaRoutes from './routes/respostaRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usar rotas
app.use('/usuarios', usuarioRoutes);
app.use('/perguntas', perguntaRoutes);
app.use('/alternativas', alternativaRoutes);
app.use('/testes', testeRoutes);
app.use('/respostas', respostaRoutes);
app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
