import React, { useState } from 'react';
import {
  Settings,
  LifeBuoy,
  Plus,
  MessageSquare,
  PanelLeftClose,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, history = [], onDelete, onUpdate }) => {
  const [hoveredKey, setHoveredKey] = useState(null);

  const handleDelete = (e, item) => {
    e.stopPropagation();
    if (typeof onDelete === 'function') onDelete(item);
  };

  const handleUpdate = (item) => {
    if (typeof onUpdate === 'function') onUpdate(item);
  };

  return (
    <div
      style={{
        width: isOpen ? '280px' : '0',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'width 0.4s ease, opacity 0.3s ease',
        background: '#9B9B9B',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* ===== TOPO ===== */}
      <div style={{ padding: '24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <img
            src="/Colorimetr.png"
            alt="ColorimetrIA"
            style={{ height: '90px' }}
          />

          <button
            onClick={toggleSidebar}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <PanelLeftClose size={22} />
          </button>
        </div>

        <button
          style={{
            width: '100%',
            padding: '12px',
            paddingLeft: '40px',
            borderRadius: '999px',
            border: 'none',
            background: '#FFFFFF',
            color: '#111',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '10px',
            fontWeight: 600,
         }}
       >
           <Plus size={20} /> New chat
         </button>

      </div>

      {/* ===== HISTORY (ROLÁVEL) ===== */}
      <div
        className="sidebar-history"
        style={{
          flex: 1,
          padding: '0 24px',
          overflowY: 'auto',
          marginTop: '10px',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#EDEDED',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}
        >
          HISTORY
        </p>

        {history.map((item) => {
          const key = item?.id ?? item?.prompt ?? String(item);
          return (
          <div
            key={key}
            onMouseEnter={() => setHoveredKey(key)}
            onMouseLeave={() => setHoveredKey(null)}
            onClick={() => handleUpdate(item)}
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              color: '#fff',
              marginBottom: '12px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              lineHeight: '1.4',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1, minWidth: 0 }}>
              <MessageSquare size={16} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.prompt ?? String(item)}
              </span>
            </div>
            <button
              onClick={(e) => handleDelete(e, item)}
              title="Excluir"
              style={{
                visibility: hoveredKey === key ? 'visible' : 'hidden',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                width: '24px',
                height: '24px'
              }}
            >
              <X size={16} />
            </button>
          </div>
        )})}
      </div>

      {/* ===== RODAPÉ FIXO ===== */}
      <div
        style={{
          padding: '20px 24px',
          borderTop: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            color: '#fff',
            marginBottom: '14px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            alignItems: 'center',
          }}
        >
          <Settings size={18} /> Settings
        </div>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            alignItems: 'center',
          }}
        >
          <LifeBuoy size={18} /> Support
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
