import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // AQUI VOCÊ VAI CONECTAR COM A API DEPOIS
    //simulando um login/cadastro bem-sucedido
    if (email && password) {
      console.log(isLogin ? 'Logando...' : 'Cadastrando...', { email, password, name });
      onLogin({ name: name || 'Usuário', email }); 
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'white' 
    }}>
      <div style={{ 
        background: 'rgba(143, 143, 143, 0.7)',
        padding: '40px', 
        borderRadius: '24px', 
        boxShadow: '0 10px 25px hsla(0, 0.70%, 27.30%, 0.70)', 
        width: '100%', 
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        {/* LOGO */}
        <div style={{ marginBottom: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <img
            src="/Colorimetr.png"
            alt="ColorimetrIA"
            style={{ height: '150px' }}
          />
        </div>
        {/* TÍTULO */}
        <h2 style={{ marginBottom: '29px', color: 'white' }}>
          {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
        </h2>
        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Nome só aparece no Cadastro */}
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Seu nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
          )}

          <input 
            type="email" 
            placeholder="Seu e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          
          <input 
            type="password" 
            placeholder="Sua senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>
            {isLogin ? 'Entrar' : 'Cadastrar'} <ArrowRight size={18} />
          </button>
        </form>

        <p style={{ marginTop: '28px', fontSize: '0.9rem', color: '#666' }}>
          {isLogin ? 'Não tem uma conta?' : 'Já tem conta?'}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: '#7F5AF0', fontWeight: 'bold', cursor: 'pointer', marginLeft: '5px' }}
          >
            {isLogin ? 'Cadastre-se' : 'Faça Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

// Estilos simples para não poluir o código acima
const inputStyle = {
  padding: '15px 20px',
  borderRadius: '20px',
  fontSize: '0.95rem',
  background: '#fff',
  outline: 'none',
  border: '1px solid #ccc',
  color: 'black',
};

const buttonStyle = {
  padding: '12px',
  borderRadius: '12px',
  border: 'none',
  background: 'white',
  color: 'black',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px'
};

export default Auth;