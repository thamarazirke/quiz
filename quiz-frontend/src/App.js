import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Resultado from './components/Resultado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  );
}

export default App;
