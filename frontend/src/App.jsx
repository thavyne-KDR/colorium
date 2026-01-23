import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import Auth from './components/Auth'; 
import './App.css';
import { listPalettes, getPalette, getProfile, deletePalette } from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]); 
  const [selected, setSelected] = useState(null); 
  
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogout = () => {
    setUser(null); 
    setSelected(null);
    localStorage.removeItem('token');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    if (user){
      refreshHistory();
    }
  }, [user]);

  useEffect(() => {
    console.log('=== INICIANDO VALIDAÇÃO DE SESSÃO ===');
    const token = localStorage.getItem('token');
    console.log('🔍 Token no localStorage:', token ? `Existe (${token.substring(0, 20)}...)` : 'NÃO EXISTE');
    
    if (token) {
      console.log('✓ Tentando validar token com getProfile()...');
      getProfile()
        .then(profile => {
          console.log('✅ Profile recebido:', profile);
          const nameFromEmail = profile?.user?.email?.split('@')[0] || 'Usuário';
          console.log('✅ Setando user como:', { name: nameFromEmail, email: profile?.user?.email });
          setUser({ name: nameFromEmail, email: profile?.user?.email });
        })
        .catch((err) => {
          console.error('❌ ERRO ao validar token:', err.message);
          console.error('Status:', err.response?.status);
          console.error('Dados:', err.response?.data);
          localStorage.removeItem('token');
          setUser(null);
        });
    } else {
      console.log('⚠️ NENHUM TOKEN ENCONTRADO. Mostrando tela de login.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshHistory = async () => {
    try {
      const data = await listPalettes();
      const items = (data.palettes || []).map(p => ({ id: p.id, prompt: p.prompt })).filter(x => x.id && x.prompt);
      setHistory(items);
    } catch (err) {
      console.error('Erro ao carregar histórico:', err);
    }
  };

  // 🔹 Adiciona novo prompt no histórico em tempo real
  const addToHistory = (item) => {
    if (!item || !item.prompt) return;
    setHistory(prev => {
      if (prev[0]?.id === item.id || prev[0]?.prompt === item.prompt) return prev;
      return item.id ? [item, ...prev] : [{ id: crypto.randomUUID(), prompt: item.prompt }, ...prev];
    });
  };

  // Delete via sidebar
  const handleDeleteFromHistory = async (item) => {
    const id = item?.id;
    let targetId = id;
    if (!targetId) {
      try {
        const data = await listPalettes();
        const found = (data.palettes || []).find(p => p.prompt === item?.prompt);
        targetId = found?.id;
      } catch (e) {
        console.error('Falha ao resolver id para delete:', e);
      }
    }
    if (!targetId) {
      console.error('ID não encontrado para deletar');
      return;
    }
    try {
      const result = await deletePalette(targetId);
      console.log('Paleta deletada:', result);
      await refreshHistory();
    } catch (e) {
      console.error('Falha ao deletar paleta:', e);
      alert('Falha ao deletar paleta. Verifique o console.');
    }
  };

  // Selecionar via sidebar (click item) e carregar no MainChat
  const handleUpdateFromHistory = async (item) => {
    try {
      let targetId = item?.id;
      if (!targetId) {
        const data = await listPalettes();
        targetId = (data.palettes || []).find(p => p.prompt === item?.prompt)?.id;
      }
      if (!targetId) return;
      const data = await getPalette(targetId);
      if (data?.palette) {
        setSelected({ id: data.palette.id, prompt: data.palette.prompt, colors: data.palette.colors });
      }
    } catch (e) {
      console.error('Falha ao carregar paleta:', e);
    }
  };
  
  if (!user) {
    return <Auth onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        history={history}
        onDelete={handleDeleteFromHistory}
        onUpdate={handleUpdateFromHistory}
        userName={user.name} 
        userEmail={user.email}
        onLogout={handleLogout}
      />

      <MainChat
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onNewPrompt={addToHistory}
        onChangedPalettes={refreshHistory}
        selected={selected}
      />
    </div>
  );
}

export default App;
