import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import './App.css';
import { listPalettes, updatePalette, deletePalette, getPalette } from './services/api';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]); // [{id, prompt}]
  const [selected, setSelected] = useState(null); // {id, prompt, colors}

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // 🔹 Carrega histórico do backend ao abrir o site
  useEffect(() => {
    refreshHistory();
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

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        history={history}
        onDelete={handleDeleteFromHistory}
        onUpdate={handleUpdateFromHistory}
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
