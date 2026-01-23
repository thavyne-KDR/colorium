import React, { useState } from 'react';
import {
  Settings,
  LifeBuoy,
  Plus,
  MessageSquare,
  LogOut,
  X,
  PanelLeftClose
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, history = [], onDelete, onUpdate, userName, userEmail, onLogout }) => {
  const [hoveredKey, setHoveredKey] = useState(null);

  const handleDelete = (e, item) => {
    e.stopPropagation();
    if (typeof onDelete === 'function') onDelete(item);
  };

  const handleUpdate = (item) => {
    if (typeof onUpdate === 'function') onUpdate(item);
  };

  return (
    <div style={{ 
      width: isOpen ? '280px' : '0', 
      padding: isOpen ? '25px' : '0', 
      background: 'rgb(143,143,143)', 
      color: '#fff', 
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transition: 'all 0.4s ease',
      borderRight: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
    }}>

      {/* ===== TOPO (Logo e Histórico) ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
        
        {/* Cabeçalho */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <img
            src="/Colorimetr.png"
            alt="ColorimetrIA"
            style={{ height: '90px', objectFit: 'contain', marginLeft: '-10px' }} // Ajuste fino pra logo não cortar
          />

          <button
            onClick={toggleSidebar}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
          >
            <PanelLeftClose size={22} />
          </button>
        </div>

        {/* Botão New Chat */}
        <button
          style={{
            width: '100%', padding: '12px', paddingLeft: '50px', borderRadius: '999px',
            border: 'none', background: '#FFFFFF', color: '#111', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            gap: '10px', fontWeight: 600, marginBottom: '20px', flexShrink: 0
          }}
        >
            <Plus size={20} /> New chat
        </button>

        {/* Lista de Histórico (Com Scroll) */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px', paddingRight: '5px' }}>
          {history.length > 0 && (
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#EDEDED', letterSpacing: '1px', marginBottom: '16px', sticky: 'top' }}>
              HISTORY
            </p>
          )}

          {history.map((item) => {
            const key = item?.id ?? item?.prompt ?? String(item);
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredKey(key)}
                onMouseLeave={() => setHoveredKey(null)}
                onClick={() => handleUpdate(item)}
                style={{
                  display: 'flex', gap: '10px', alignItems: 'center', color: '#fff',
                  marginBottom: '12px', fontSize: '0.9rem', cursor: 'pointer',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1, minWidth: 0 }}>
                  <MessageSquare size={16} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.prompt ?? String(item)}
                  </span>
                </div>
                
                {/* Botão de Excluir (X) que aparece ao passar o mouse */}
                <button
                  onClick={(e) => handleDelete(e, item)}
                  title="Excluir"
                  style={{
                    visibility: hoveredKey === key ? 'visible' : 'hidden',
                    background: 'transparent', border: 'none', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: 0, width: '24px', height: '24px', cursor: 'pointer'
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== RODAPÉ FIXO (Settings, Support, Perfil + Logout) ===== */}
      <div style={{ flexShrink: 0 }}> 
        <div style={{ display: 'flex', gap: '12px', color: '#fff', marginBottom: '16px', cursor: 'pointer', fontSize: '1rem', alignItems: 'center' }}>
            <Settings size={20} /> Settings
        </div>
        <div style={{ display: 'flex', gap: '12px', color: '#fff', marginBottom: '20px', cursor: 'pointer', fontSize: '1rem', alignItems: 'center' }}>
            <LifeBuoy size={20} /> Support
        </div>

        {/* Linha Divisória */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', marginBottom: '15px' }}></div>

        {/* CONTAINER PERFIL + LOGOUT */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Lado Esquerdo: Avatar + Textos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                <div style={{ 
                    width: '45px', height: '45px', borderRadius: '50%', 
                    background: '#f3f4f6', color: '#333',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '1.2rem', border: '2px solid white',
                    flexShrink: 0
                }}>
                  {userName ? userName.charAt(0).toUpperCase() : 'A'}
                </div>
                {/* Textos do Usuário */}
                <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#F3F4F6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {userName || 'Visitante'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#E5E7EB', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {userEmail || 'sem@email.com'}
                    </span>
                </div>
            </div>

            {/* Lado Direito: Botão de Sair */}
            <button 
                onClick={onLogout}
                title="Sair"
                style={{ 
                    background: 'transparent',
                    borderRadius: '8px', 
                    width: '36px', height: '36px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    color: 'white', cursor: 'pointer', marginLeft: '8px', flexShrink: 0
                }}
            >
              <img 
                    src="/sair.png" 
                    alt="Sair"
                    style={{ 
                        width: '20px', 
                        height: '20px', 
                        display: 'block'
                    }} 
                />

            </button>

        </div>
      </div>

    </div> 
  );
};

export default Sidebar;