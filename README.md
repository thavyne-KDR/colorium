# 🎨 ColorimetrIA

> **Assistente inteligente de criatividade para geração de paletas de cores usando IA Local.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-Local_AI-orange?style=for-the-badge)

---

## 📋 Sobre o Projeto

O **ColorimetrIA** é uma aplicação Fullstack desenvolvida para auxiliar designers e artistas. Diferente de geradores comuns, ele utiliza uma **Arquitetura Híbrida**: combina regras de design pré-definidas com a inteligência artificial do modelo **Gemma:2b (via Ollama)** rodando localmente.

Isso permite que o usuário converse em linguagem natural (ex: *"Quero cores para uma cafeteria rústica"*) e receba paletas visualmente coerentes e tecnicamente precisas.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend (Interface)
* **React + Vite:** Para alta performance e construção rápida.
* **Lucide React:** Ícones modernos e consistentes.
* **Axios/Fetch:** Comunicação com a API.
* **CSS Modules:** Estilização com gradientes e layouts responsivos.

### ⚙️ Backend (API)
* **Node.js (18+):** Ambiente de execução.
* **Fastify:** Framework web focado em alta performance (substituto moderno ao Express).
* **PostgreSQL:** Banco de dados relacional para persistência do histórico.
* **Ollama (IA Local):** Execução do modelo de IA `gemma:2b` sem dependência de internet.
* **Arquitetura em Camadas:** Separação entre Rotas, Serviços, Repositórios e Plugins.

---

## 🧠 Diferencial: Arquitetura Híbrida

O sistema foi projetado para evitar "alucinações" comuns em IAs puras.
1.  **Classificador (Utils):** Identifica o tema do pedido (ex: Natal, Pastel, Neon) via código.
2.  **IA Generativa:** O modelo Gemma complementa as cores e gera nomes criativos.
3.  **Resultado:** Paletas mais estáveis, rápidas e visualmente agradáveis.

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* **Node.js** (Versão 18 ou superior)
* **PostgreSQL** (Instalado e rodando)
* **Ollama** (Instalado para a IA)

### Passo 1: Configurar a IA (Ollama)
Como a IA roda localmente, você precisa baixar o modelo antes:
```bash
# No seu terminal
ollama run gemma:2b

# Mantenha o terminal do Ollama aberto ou rodando em segundo plano.```
cd backend

# 1. Instalar dependências
npm install

# 2. Configurar Variáveis de Ambiente
# Crie um arquivo .env na pasta backend com:
PORT=3333
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=colorimetria

# 3. Criar Tabela no Banco
# Execute o script SQL no seu cliente PostgreSQL ou terminal:
# \i ./src/sql/schema.sql

# 4. Iniciar o Servidor
node src/server.js

# Abra um novo terminal
cd frontend

# 1. Instalar dependências
npm install

# 2. Rodar o projeto
npm run dev

Método,Rota,Descrição,Body (Exemplo)
POST,/palette,Gera nova paleta com IA,"{ ""prompt"": ""paleta futurista"" }"
GET,/palettes,Lista histórico de paletas,-
GET,/palette/:id,Busca paleta específica,-
PUT,/palette/:id,Edita uma paleta salva,"{ ""prompt"": ""novo nome"", ""colors"": [...] }"
DELETE,/palette/:id,Remove uma paleta,-


📂 Estrutura de Pastas
ColorimetrIA/
├── backend/
│   ├── src/
│   │   ├── plugins/      # Conexão DB (Fastify plugin)
│   │   ├── routes/       # Rotas da API
│   │   ├── services/     # Lógica da IA
│   │   ├── repositories/ # Queries SQL
│   │   └── utils/        # Regras de cores e Classificadores
│   └── server.js         # Entrada da API
│
└── frontend/
    ├── src/
    │   ├── components/   # Sidebar, MainChat, Auth
    │   ├── services/     # Integração com Backend
    │   └── App.jsx       # Gerenciamento de Estado
    └── public/           # Assets

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

Ana Lívia Farias Silva - Frontend & Integração

Thávyne Kerolly Dias Ribeiro - Backend & Arquitetura de IA
