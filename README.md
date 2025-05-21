
# Quiz Project

Projeto de quiz com backend em Node.js e frontend em React. O projeto possui três pastas principais:

- `quiz-backend`: API backend para gerenciar perguntas e respostas.
- `quiz-frontend`: aplicação React para exibir o quiz e mostrar resultados.
- `quiz-insert-data`: scripts para inserir dados iniciais no banco.

---

## Pré-requisitos

- Node.js (v16 ou superior recomendado)
- npm ou yarn instalado
- (Opcional) Banco de dados configurado conforme backend requer

---

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/thamarazirke/quiz.git
cd quiz
```

### 2. Instalar dependências

Instale as dependências separadamente para backend, frontend e insert-data:

```bash
cd quiz-backend
npm install
# ou yarn install

cd ../quiz-frontend
npm install
# ou yarn install

cd ../quiz-insert-data
npm install
# ou yarn install
```

---

## Como rodar

### Backend

Na pasta `quiz-backend`, execute:

```bash
npm start
# ou yarn start
```

O backend estará rodando normalmente na porta 3000 (ajuste conforme seu código).

### Insert Data

Na pasta `quiz-insert-data`, execute scripts para inserir dados no banco (se necessário):

```bash
npm run insert
# ou o comando que você configurou
```

### Frontend

Na pasta `quiz-frontend`, execute:

```bash
npm start
# ou yarn start
```

O frontend abrirá em `http://localhost:3001`

---

## Uso

- Acesse o frontend no navegador.
- Responda o quiz.
- Após enviar, você verá a página de resultado com sua pontuação.

---

## Tecnologias usadas

- Backend: Node.js, Express (ou outro framework que usar)
- Frontend: React, React Router DOM
- Banco de dados: SQLite
- Ferramentas de build: npm, yarn, react-scripts

---

## Contato

Fique a vontade para abrir issues no GitHub.
