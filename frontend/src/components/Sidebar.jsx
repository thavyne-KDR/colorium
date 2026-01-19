import React from 'react';
import { Settings, LifeBuoy, Plus, MessageSquare, ChevronRight, PanelLeftClose } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div style={{ 
      width: isOpen ? '280px' : '0', 
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden', 
      transition: 'all 0.4s ease', 
      background: '#F3F4F6',
      borderRight: '1px solid rgba(187, 187, 187, 0.5)',
      overflow: 'hidden', 
      whiteSpace: 'nowrap', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative' 
    }}>
    <div style={{ width: '280px',
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0 }}></div>
      
      {/*Topo com logo*/}
    <div>
      <div style={{ 
            display: 'flex',             // Alinha um ao lado do outro
            alignItems: 'center',        // Centraliza verticalmente (fio do meio)
            justifyContent: 'space-between',
            marginBottom: '24px'
        }}>
            
            {/* A LOGO */}
            <img 
              src="/Colorimetr.png" 
              alt="ColorimetrIA Logo" 
              style={{ 
                  height: '80px',        // Define altura fixa (largura se ajusta sozinha)
                  width: 'auto',         // Mantém a proporção
                  display: 'block',
              }} 
            />
            {/* Botão de Fechar Sidebar */}
            <button 
                onClick={toggleSidebar} 
                style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer', 
                    color: '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '50%',
                    transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#E5E7EB'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <PanelLeftClose size={24} />
            </button>
        </div>

        {/* Botão New Chat (Fica logo abaixo do cabeçalho) */}
        <button style={{ 
            width: '80%', padding: '10px 40px', borderRadius: '99px', border: 'none', 
            background: '#BFBFBF', color: 'white', cursor: 'pointer', 
            display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600',
            boxShadow: '0 2px 5px rgba(218, 218, 218, 0.69)'
        }}>
          <Plus size={25} /> New chat
        </button>

        {/* Histórico */}
        <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#9CA3AF', marginBottom: '16px', letterSpacing: '1px' }}>TOMORROW</p>
            
            {/* Item da Lista */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#4B5563', marginBottom: '16px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> Meat is real life?
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#4B5563', marginBottom: '16px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> What colors are best...
            </div>
            
             <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#9CA3AF', marginBottom: '16px', marginTop: '30px', letterSpacing: '1px' }}>7 DAYS AGO</p>
             <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#4B5563', marginBottom: '12px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> Pink and purple are...
            </div>
        </div>
      </div>

      {/* Rodapé, setting e support*/}
      <div>
        <div style={{ display: 'flex', gap: '12px', color: '#4B5563', marginBottom: '16px', cursor: 'pointer', fontSize: '0.95rem' }}>
            <Settings size={18} /> Settings
        </div>
        <div style={{ display: 'flex', gap: '12px', color: '#4B5563', marginBottom: '32px', cursor: 'pointer', fontSize: '0.95rem' }}>
            <LifeBuoy size={18} /> Support
        </div>
        {/* Perfil do Usuário */}
        
      </div>

    </div>
  );
};

export default Sidebar;