import React, { useState, useEffect } from 'react';
import { Paperclip, PanelLeftOpen, ArrowUp } from 'lucide-react';
import { createPalette } from '../services/api';

const MainChat = ({ isSidebarOpen, toggleSidebar, onNewPrompt, selected }) => {
  const [message, setMessage] = useState('');
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');
  const [error, setError] = useState('');

  // Carrega paleta selecionada via Sidebar
  useEffect(() => {
    if (!selected) return;
    try {
      const colorsArr = Array.isArray(selected.colors) ? selected.colors : JSON.parse(selected.colors || '[]');
      Promise.resolve().then(() => {
        setColors(colorsArr || []);
        setLastPrompt(selected.prompt || '');
        setHasStartedChat(true);
        setError('');
      });
    } catch (e) {
      console.error('Falha ao carregar paleta selecionada:', e);
    }
  }, [selected]);

  const handleSend = async () => {
    if (!message.trim()) return;

    setHasStartedChat(true);
    setLoading(true);
    setError('');
    setColors([]);
    setLastPrompt(message);

    try {
      const data = await createPalette(message);

      if (data?.palette && data.palette.length > 0) {
        setColors(data.palette);
        onNewPrompt({ id: data.record?.id, prompt: message });
      } else {
        setError('Nenhuma paleta foi gerada.');
      }
    } catch (err) {
      console.error(err);
      const serverMsg = err?.response?.data?.message;
      setError(serverMsg || 'Erro ao gerar paleta.');
    }

    setLoading(false);
    setMessage('');
  };

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 10% 80px',
        position: 'relative',
        height: '100vh',
        boxSizing: 'border-box'
      }}
    >
      {/* BOTÃO SIDEBAR */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: '#F3F4F6',
            border: 'none',
            borderRadius: '12px',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <PanelLeftOpen size={24} color="#4B5563"/>
        </button>
      )}

      {/* ÁREA CENTRAL */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          width: '100%'
        }}
      >
        {!hasStartedChat ? (
          <>
            <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: '#111' }}>
              WELCOME TO <span className="gradient-text">COLORIMETR-IA</span>
            </h1>

            <p style={{ color: '#6B7280', fontSize: '1.1rem', maxWidth: '600px' }}>
              Exploring new ideas and concepts daily help foster creativity and colors.
            </p>
          </>
        ) : (
          <div style={{ width: '100%', maxWidth: '800px' }}>
          {/* PROMPT DIGITADO (igual chat) */}
            <p
              style={{
                color: '#111',
                fontSize: '1.2rem',
                marginBottom: '20px',
                fontWeight: 500,
              }}
            >
              You: {lastPrompt}
            </p>

            {/* LOADING */}
            {loading && (
              <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>
                Gerando paleta...
              </p>
            )}

            {/* ERRO */}
            {error && (
              <div style={{ 
                  background: '#FEE2E2', 
                  color: '#991B1B', 
                  padding: '10px 20px', 
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginTop: '10px'
              }}>
                 ⚠️ {error}
              </div>
            )}

            {/* PALETA */}
            {!loading && colors.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: '18px',
                  marginTop: '20px',
                  justifyContent : 'center',
                  flexWrap: 'wrap',
                }}
              >
                {colors.map((c, i) => (
                  <div
                    key={i}
                    title={c.hex}
                    onClick={() => navigator.clipboard.writeText(c.hex)}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      background: c.hex,
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* INPUT */}
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          background:'linear-gradient(#fff, #fff) padding-box, var(--rainbow-gradient) border-box',
          border: '2px solid transparent',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      >
        <textarea
          placeholder="Ask about colors.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
            fontSize: '1.2rem',
            height: '50px',
            background: 'transparent',
            color: '#111',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '14px',
          }}
        >
          {/* CLIP RETO */}
          <Paperclip
            size={22}
            color="#9CA3AF"
            style={{
              cursor: 'pointer',
              transform: 'rotate(-43deg)',
              marginTop: '10px',
            }}
          />

          {/* BOTÃO ENVIAR */}
           <button
            onClick={handleSend}
            className="send-btn-gradient"
          style={{
            width: '50px',
           height: '50px',
           borderRadius: '50%',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           padding: 0,
       }}
      >
         <ArrowUp
           color="#FFFFFF"
           strokeWidth={3}
           style={{
           width: '30px',
           height: '30px',
       }}
     />
          </button>

        </div>
      </div>
    </div>
  );
};

export default MainChat;
