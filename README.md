# 🎨 ColorimetrIA

> **Assistente inteligente de criatividade para geração de paletas de cores usando IA Local.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-Local_AI-orange?style=for-the-badge)


---


## 📋 Sobre o Projeto
O **ColorimetrIA** é uma aplicação web desenvolvida para auxiliar designers, artistas e criativos na escolha de cores. Através de um chat interativo com IA, o usuário descreve um cenário ou sentimento (ex: "Cores para uma hamburgueria retrô") e o sistema gera automaticamente uma paleta de cores harmoniosa, com códigos HEX prontos para uso.

O projeto foi desenvolvido seguindo a arquitetura **MVC**, com separação clara entre Frontend e Backend, além de persistência de dados e autenticação de usuários.


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


## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* **Node.js** (Versão 18 ou superior)
* **PostgreSQL** (Instalado e rodando)
* **Ollama** (Instalado para a IA)

  
---


## Passo 1: Configurar a IA (Ollama)
Como a IA roda localmente, você precisa baixar o modelo antes (modelo utilizado: gemma:2b **👉 ollama.com**):
```bash
# No seu terminal
ollama run gemma:2b

# Mantenha o terminal do Ollama aberto ou rodando em segundo plano.
```


---


## Passo 2: Configurar o Backend
#### Abra um novo terminal e entre na pasta do backend:
```bash
-cd backend
```


#### instalar dependências
```bash
-npm install
```


---


### ⚙️ Variáveis de Ambiente
```bash
Crie um arquivo chamado `.env` dentro da pasta `backend` e configure as seguintes variáveis:

| Variável | Descrição | Exemplo Padrão |
| :--- | :--- | :--- |
| `PORT` | Porta onde o servidor vai rodar | `3333` |
| `DB_HOST` | Endereço do banco de dados | `localhost` |
| `DB_PORT` | Porta do PostgreSQL | `5432` |
| `DB_USER` | Usuário do banco | `postgres` |
| `DB_PASSWORD` | Senha do seu banco local | `admin` (ou sua senha) |
| `DB_NAME` | Nome do banco de dados | `colorimetria` |
```

---

## 3. Criar Tabela no Banco
#### Execute o script SQL no seu cliente PostgreSQL ou terminal:
```bash
# \i ./src/sql/schema.sql
```

#### 4. Iniciar o Servidor
```bash
node src/server.js
```

---


### Passo 4: Configurar o Frontend
#### Abra um novo terminal e digite:
```bash
cd frontend
```

#### 1. Instalar dependências
```bash
npm install
```
#### 2. Rodar o projeto
```bash
npm run dev
```

---


## 📂 Estrutura de Pastas
```bash
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
```

---

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

Ana Lívia Farias Silva - Frontend & Integração

Thávyne Kerolly Dias Ribeiro - Backend & Arquitetura de IA

