# 🎨 Colorimetr-IA — Backend

> Backend responsável por gerar paletas de cores inteligentes utilizando IA local com Ollama, armazenar histórico de buscas e fornecer uma API para o frontend em React.

---

## 🚀 Tecnologias Utilizadas

### 🟢 Node.js

- **Plataforma JavaScript** para execução do backend
- **Versão recomendada:** Node.js 18+
- 👉 [nodejs.org](https://nodejs.org)

### ⚡ Fastify

- Framework web **rápido e leve** para Node.js
- Responsável pelas rotas da API (`/palette`, `/palettes`)

```bash
npm install fastify
```

### 🌐 CORS

- Permite comunicação entre **frontend (React)** e backend

```bash
npm install @fastify/cors
```

### 🗄 PostgreSQL

- Banco de dados relacional para salvar:
  - ✅ Prompt do usuário
  - ✅ Paletas geradas
  - ✅ Data de criação
- 👉 [postgresql.org](https://www.postgresql.org/)

### 📦 pg (node-postgres)

- Biblioteca para conectar o Node.js ao PostgreSQL

```bash
npm install pg
```

### 🧠 Ollama (IA Local)

- Executa modelos de IA **localmente**, sem depender da internet
- **Modelo utilizado:** `gemma:2b`
- 👉 [ollama.com](https://ollama.com/)

**Instalar e rodar o modelo:**

```bash
ollama run gemma:2b
```

> ⚠️ **Importante:** O Ollama precisa estar rodando para a IA funcionar corretamente.

### 🔐 dotenv

- Gerencia variáveis de ambiente (`.env`)

```bash
npm install dotenv
```

### 🔄 Fetch (Node 18+)

- Utiliza o `fetch` **nativo** do Node.js para comunicação com o Ollama
- ✨ Não é necessário instalar `node-fetch` se estiver usando Node 18+

---

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── routes/
│   │   └── palette.js
│   ├── services/
│   │   └── ai.js
│   ├── utils/
│   │   ├── classifier.js
│   │   └── paletteRules.js
│   ├── plugins/
│   │   └── db.js
│   ├── repositories/
│   │   └── paletteRepository.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz de `backend/` (mesmo nível de `package.json`).
Você pode usar o `.env.example` como base:

```env
PORT=3333

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=colorimetr
```

---

## ▶️ Como Rodar o Backend

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Iniciar o banco PostgreSQL

Certifique-se de que o PostgreSQL esteja **rodando** e que o banco exista.

Crie as tabelas necessárias (uma vez):

```sql
-- No psql ou seu cliente SQL
\i ./src/sql/schema.sql
```

### 3️⃣ Rodar o Ollama

```bash
ollama run gemma:2b
```

> Deixe o Ollama **ativo em segundo plano**.

### 4️⃣ Iniciar o servidor

```bash
node src/server.js
```

✅ Se tudo estiver correto, você verá:

```
Servidor rodando em http://localhost:3333
```

---

## 📡 Endpoints da API

### 🔹 `POST /palette`

Gera uma nova paleta de cores com base no prompt do usuário.

**Body (JSON):**

```json
{
  "prompt": "paleta para natal"
}
```

### 🔹 `GET /palettes`

Retorna o histórico de paletas geradas.

### 🔹 `GET /palette/:id`

Retorna uma paleta específica pelo seu `id`.

### 🔹 `PUT /palette/:id`

Atualiza uma paleta existente. Envie qualquer campo que deseja alterar.

Body (JSON):

```json
{
  "prompt": "nova descrição opcional",
  "colors": [
    { "name": "Primary", "hex": "#AABBCC" },
    { "name": "Secondary", "hex": "#DDEEFF" },
    { "name": "Accent", "hex": "#112233" },
    { "name": "Background", "hex": "#445566" }
  ]
}
```

### 🔹 `DELETE /palette/:id`

Remove uma paleta pelo `id`.

---

## 🧠 Observação Importante sobre a IA

Este projeto utiliza uma **arquitetura híbrida**:

- ✅ **Regras no código** para identificar o tema (ex: Natal, pastel, minimalista)
- ✅ **IA apenas para complementar** e nomear as cores

### Isso garante:

- 🎯 Paletas mais coerentes
- 🛡️ Menos erros da IA
- 🎨 Resultados visuais melhores

---

<div align="center">
  <strong>Feito com 💜 para gerar paletas de cores inteligentes</strong>
</div>
