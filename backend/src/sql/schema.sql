-- Colorium schema

CREATE TABLE IF NOT EXISTS palettes (
  id SERIAL PRIMARY KEY,
  prompt TEXT NOT NULL,
  colors JSONB NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Optional users table for auth (already referenced in code)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
