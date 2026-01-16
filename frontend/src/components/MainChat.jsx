import React from 'react';
import { Paperclip, ArrowUp } from 'lucide-react';

const MainChat = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      {/* Texto de Boas Vindas */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333', fontWeight: '700' }}>
          WELCOME TO <span className="gradient-text">COLORIMETR-IA</span>
        </h1>
        <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto' }}>
          Exploring new ideas and concepts daily help foster creativity and colors.
        </p>
      </div>

      {/* Área de Input */}
      <div style={{ 
          width: '100%', maxWidth: '700px', 
          border: '2px solid transparent', 
          borderRadius: '15px', 
          padding: '15px',
          background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #333399,rgb(0, 255, 179),rgb(148, 255, 77),rgb(255, 163, 76), #333399) border-box', 
          boxShadow: '0 1px 15px rgba(0, 0, 0, 0.47)',
          position: 'relative'
      }}>
        <textarea 
            placeholder="Ask about colors.." 
            style={{ 
                width: '100%', 
                border: 'none', 
                outline: 'none', 
                resize: 'none', 
                fontSize: '1.2rem', 
                height: '50px', 
                color: '#374151',
                background: 'transparent'
            }}
        />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <Paperclip size={20} color="#999" style={{ cursor: 'pointer' }}/>
            
            <button style={{ 
                width: '35px', height: '35px', borderRadius: '50%', border: 'none', 
                background: 'linear-gradient(135deg,rgb(255, 108, 206),rgb(255, 99, 99),rgb(218, 255, 83),rgb(100, 162, 255),rgb(255, 104, 217) ,rgb(234, 148, 255))', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white'
            }}>
                <ArrowUp size={20} />
            </button>
        </div>
      </div>

    </div>
  );
};

export default MainChat;