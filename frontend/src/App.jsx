import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // 🔹 Carrega histórico do backend ao abrir o site
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await fetch('http://localhost:3333/palettes');
        const data = await res.json();

        // evita undefined e garante ordem correta
        const prompts = data.palettes
          .map(p => p.prompt)
          .filter(Boolean);

        setHistory(prompts);
      } catch (err) {
        console.error('Erro ao carregar histórico:', err);
      }
    };

    loadHistory();
  }, []);

  // 🔹 Adiciona novo prompt no histórico em tempo real
  const addToHistory = (prompt) => {
    if (!prompt) return;

    setHistory(prev => {
      // evita duplicar o mesmo prompt seguido
      if (prev[0] === prompt) return prev;
      return [prompt, ...prev];
    });
  };

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        history={history}
      />

      <MainChat
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onNewPrompt={addToHistory}
      />
    </div>
  );
}

export default App;
