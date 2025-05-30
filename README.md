# Calculadora Financeira

Uma aplicação web para cálculos financeiros, incluindo juros simples, juros compostos e cálculo de parcelas.

## Estrutura do Projeto

- `server.js` - Backend Node.js com Express
- `frontend/` - Frontend React com TypeScript

## Requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Instale as dependências do backend:
```bash
npm install
```

2. Instale as dependências do frontend:
```bash
cd frontend
npm install
```

## Executando o Projeto

1. Inicie o servidor backend (na pasta raiz):
```bash
npm run dev
```

2. Em outro terminal, inicie o frontend (na pasta frontend):
```bash
cd frontend
npm start
```

O frontend estará disponível em `http://localhost:3000` e o backend em `http://localhost:5000`.

## Funcionalidades

- Cálculo de Juros Simples
- Cálculo de Juros Compostos
- Calculadora de Parcelas

## Tecnologias Utilizadas

- Backend:
  - Node.js
  - Express
  - CORS
  
- Frontend:
  - React
  - TypeScript
  - Material-UI
  - Axios 