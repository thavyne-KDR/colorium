# 🎨 ColorimetrIA

> **Sua assistente de criatividade baseada em Inteligência Artificial para geração de paletas de cores.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

---

## 📋 Sobre o Projeto

O **ColorimetrIA** é uma aplicação web desenvolvida para auxiliar designers, artistas e criativos na escolha de cores. Através de um chat interativo com IA, o usuário descreve um cenário ou sentimento (ex: "Cores para uma hamburgueria retrô") e o sistema gera automaticamente uma paleta de cores harmoniosa, com códigos HEX prontos para uso.

O projeto foi desenvolvido seguindo a arquitetura **MVC**, com separação clara entre Frontend e Backend, além de persistência de dados e autenticação de usuários.

---

## 🚀 Funcionalidades Principais

* **Chat com IA:** Interface conversacional para solicitar cores.
* **Geração de Paletas:** Visualização imediata das cores geradas com códigos HEX.
* **Histórico (CRUD):**
    * Salvar automaticamente as paletas geradas.
    * Consultar histórico na barra lateral.
    * Editar prompts antigos.
    * Excluir paletas indesejadas.
* **Autenticação:** Sistema de Login e Cadastro de usuários para proteger os dados.
* **Design Responsivo:** Interface moderna, com sidebar retrátil e animações fluidas.

---

## 🛠️ Tecnologias Utilizadas

### Frontend (Interface)
* **React + Vite:** Para uma construção rápida e performática.
* **Lucide React:** Biblioteca de ícones moderna.
* **CSS3:** Estilização personalizada com gradientes e layouts Flexbox.
* **Axios:** Para comunicação com a API.

### Backend (API)
* **Node.js:** Ambiente de execução.
* **Express:** Framework para criação das rotas e servidor.
* **PostgreSQL:** Banco de dados relacional para salvar usuários e paletas.
* **Dotenv:** Gerenciamento de variáveis de ambiente.

---


## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado.
* PostgreSQL instalado e rodando.
  

### 1. Configurando o Banco de Dados
Crie um banco de dados no PostgreSQL chamado `colorimetria` (ou o nome que preferir) e configure as tabelas conforme os modelos do backend.

### 2. Configurando o Backend
```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env na raiz do backend com as configurações:
# PORT=3333
# DB_HOST=localhost
# DB_USER=postgres
# DB_PASSWORD=sua_senha
# DB_NAME=colorimetria

# Inicie o servidor
npm start

### 2. Configurando o Frontend

# Abra um novo terminal e entre na pasta frontend
cd frontend

# Instale as dependências
npm install

# Inicie o projeto
npm run dev

## 2. Estrutura de pastas
colorimetria/
├── backend/
│   ├── src/
│   │   ├── controllers/  # Lógica das requisições
│   │   ├── models/       # Modelos do Banco de Dados
│   │   ├── routes/       # Definição de Rotas da API
│   │   └── services/     # Regras de negócio
│   └── .env              # Configurações sensíveis
│
└── frontend/
    ├── src/
    │   ├── components/   # Componentes reutilizáveis (Sidebar, Chat, Auth)
    │   ├── services/     # Conexão com a API (Axios)
    │   └── App.jsx       # Componente Principal
    └── public/           # Assets estáticos


Este projeto foi desenvolvido como parte de um trabalho acadêmico.

Ana Lívia Farias Silva - Design, Frontend & Integração

[Nome da Sua Amiga] - Backend & Banco de Dados
