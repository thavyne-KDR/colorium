import React from 'react';
import { Paperclip, PanelLeftOpen, ArrowUp } from 'lucide-react';

const MainChat = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '0 10%',
        position: 'relative'
    }}>
      
      {/* botão de abrir o sidebar */}
      {!isSidebarOpen && (
        <button 
            onClick={toggleSidebar}
            style={{
                position: 'absolute', top: '20px', left: '20px',
                background: '#F3F4F6', border: 'none', borderRadius: '12px',
                width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#4B5563', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
            <PanelLeftOpen size={24} />
        </button>
      )}

      {/* texto welcome*/}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: '#111', letterSpacing: '-1px' }}>
          WELCOME TO <span className="gradient-text">COLORIMETR-IA</span>
        </h1>
        <p style={{ color: '#6B7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Exploring new ideas and concepts daily help foster creativity and colors.
        </p>
      </div>

      {/* input */}
      <div style={{ 
          width: '100%', maxWidth: '600px', position: 'relative',
          background: 'linear-gradient(#fff, #fff) padding-box, var(--rainbow-gradient) border-box',
          border: '2px solid transparent', borderRadius: '20px', padding: '20px',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
      }}>
        <textarea 
            placeholder="Ask about colors.." 
            style={{ 
                width: '100%', border: 'none', outline: 'none', resize: 'none', 
                fontSize: '1.2rem', height: '50px', color: '#374151', background: 'transparent'
            }}
        />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
            <Paperclip size={22} color="#9CA3AF" style={{ cursor: 'pointer' }}/>
            
            <button className="send-btn-gradient">
            <ArrowUp color="white" strokeWidth={3} size={24} 
            style={{ 
            minWidth: '24px',  
            minHeight: '24px', 
            width: '24px',     
            height: '24px'}}/></button>
        </div>
      </div>

    </div>
  );
};

export default MainChat;