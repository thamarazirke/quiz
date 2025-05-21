import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();

  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/quiz')
      .then(res => res.json())
      .then(data => {
        setPerguntas(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao carregar perguntas');
        setLoading(false);
      });
  }, []);

  function handleChange(perguntaId, alternativaId) {
    setRespostas(prev => ({ ...prev, [perguntaId]: alternativaId }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const respostasParaEnviar = perguntas.map(pergunta => {
      const altId = respostas[pergunta.id];
      const alternativa = pergunta.alternativas.find(a => a.id === altId);
      return alternativa ? { idalternativa: altId, pontos: alternativa.pontos } : null;
    }).filter(r => r !== null);

    if (respostasParaEnviar.length !== perguntas.length) {
      setMsg('Por favor, responda todas as perguntas antes de enviar.');
      return;
    }

    const payload = {
      idusuario: 1,
      respostas: respostasParaEnviar
    };

    try {
      const res = await fetch('http://localhost:3000/respostas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        const totalPontos = respostasParaEnviar.reduce((acc, cur) => acc + cur.pontos, 0);
        navigate('/resultado', { state: { pontos: totalPontos } });
      } else {
        setMsg(`Erro ao enviar respostas: ${data.error || 'Desconhecido'}`);
      }
    } catch (err) {
      setMsg('Erro de rede ao enviar respostas.');
    }
  }

  if (loading) return <p>Carregando perguntas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map(pergunta => (
        <div key={pergunta.id} style={{ marginBottom: '20px' }}>
          <p><strong>{pergunta.ordem}. {pergunta.titulo}</strong></p>
          {pergunta.alternativas.map(alternativa => (
            <label key={alternativa.id} style={{ display: 'block', cursor: 'pointer' }}>
              <input
                type="radio"
                name={`pergunta-${pergunta.id}`}
                value={alternativa.id}
                checked={respostas[pergunta.id] === alternativa.id}
                onChange={() => handleChange(pergunta.id, alternativa.id)}
                required
              />
              {' '}
              {alternativa.descricao}
            </label>
          ))}
        </div>
      ))}

      <button type="submit">Enviar</button>

      {msg && <p>{msg}</p>}
    </form>
  );
}
