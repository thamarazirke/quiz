import { useLocation, useNavigate } from 'react-router-dom';

export default function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const pontos = location.state?.pontos;

  if (pontos === undefined) {
    return (
      <div>
        <p>Resultado não disponível.</p>
        <button onClick={() => navigate('/')}>Voltar ao Quiz</button>
      </div>
    );
  }

  // Mensagem personalizada com base na pontuação
  let mensagem = '';
  if (pontos < 5) {
    mensagem = 'Você precisa estudar mais!';
  } else if (pontos < 8) {
    mensagem = 'Bom trabalho, continue melhorando!';
  } else {
    mensagem = 'Excelente! Parabéns!';
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Seu resultado:</h2>
      <p><strong>{pontos} ponto(s)</strong></p>
      <p>{mensagem}</p>
      <button onClick={() => navigate('/')}>Refazer Quiz</button>
    </div>
  );
}
