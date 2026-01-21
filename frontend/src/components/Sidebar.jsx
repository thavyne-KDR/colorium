import React from 'react';
import { Settings, LifeBuoy, Plus, MessageSquare, ChevronRight, PanelLeftClose } from 'lucide-react';

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div style={{ 
      width: isOpen ? '280px' : '0', 
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      padding: isOpen ? '25px' : '0',
      transition: 'width 0.4s ease, padding 0.4s ease, opacity 0.4s ease', 
      background: '#8F8F8F',
      borderRight: isOpen ? '1px solid rgba(255,255,255,0.1)' : 'none',
      overflow: 'hidden', 
      whiteSpace: 'nowrap', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative' 
    }}>
    <div style={{ width: '230px',
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0 }}></div>
      
      {/*topo com logo*/}
    <div>
      <div style={{ 
            display: 'flex',             
            alignItems: 'center',       
            justifyContent: 'space-between',
            marginBottom: '50px',
            marginTop: '-15px'
        }}>
            
            {/* logo */}
            <img 
              src="/Colorimetr.png" 
              alt="ColorimetrIA Logo" 
              style={{ 
                  height: '90px',        
                  width: 'auto',        
                  display: 'block',
              }} 
            />
            {/* botão de fechar sidebar */}
            <button 
                onClick={toggleSidebar} 
                style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer', 
                    color: 'white',
                    zIndex: 100,
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

        {/* botão new chat */}
        <button style={{ 
            width: '100%', padding: '10px 40px', borderRadius: '99px', border: 'none',
            background: '#F3F4F6', color: '#333', cursor: 'pointer', 
            display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600',
            boxShadow: '0 2px 5px rgba(212, 212, 212, 0.69)'
        }}>
          <Plus size={25} /> New chat
        </button>

        {/* Histórico, vai ser colocado o historico que ta salvo no banco*/}
        <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#C7C7C7', marginBottom: '16px', letterSpacing: '1px' }}>TOMORROW</p>
            
            {/* Item da Lista */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ffffff', marginBottom: '16px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> Meat is real life?
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ffffff', marginBottom: '16px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> What colors are best...
            </div>
            
             <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#C7C7C7', marginBottom: '16px', marginTop: '30px', letterSpacing: '1px' }}>7 DAYS AGO</p>
             <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ffffff', marginBottom: '12px', fontSize: '0.9rem', cursor: 'pointer' }}>
                <MessageSquare size={16} /> Pink and purple are...
            </div>
        </div>
      </div>

      {/* Rodapé, setting e support*/}
      <div>
        <div style={{ display: 'flex', gap: '12px', color: '#ffffff', marginBottom: '16px', cursor: 'pointer', fontSize: '0.95rem' }}>
            <Settings size={18} /> Settings
        </div>
        <div style={{ display: 'flex', gap: '12px', color: '#ffffff', marginBottom: '32px', cursor: 'pointer', fontSize: '0.95rem' }}>
            <LifeBuoy size={18} /> Support
        </div>
        {/* Perfil do Usuário */}
        
      </div>

    </div>
  );
};

export default Sidebar;