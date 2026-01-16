import React from 'react';
import { Settings, LifeBuoy, Plus, MessageSquare, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  return (
    <div style={{ 
      width: '280px', 
      background: '#F3F4F6', 
      padding: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      borderRight: '1px solid #E5E7EB'
    }}>
      
      {/* Topo */}
      <div>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#333' }}>Colorimetr<span className="gradient-text">IA</span></h2>
        </div>

        {/* Botão New Chat */}
        <button style={{ 
            width: '100%', padding: '12px 20px', borderRadius: '99px', border: 'none', 
            background: '#BFBFBF', color: 'white', cursor: 'pointer', 
            display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            justifyContent: 'center'
        }}>
          <Plus size={20} /> New chat
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
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', overflow: 'hidden' }}>
                    {/* Aqui entraria a foto, usei um placeholder */}
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" alt="User" style={{width: '100%'}} />
                </div>
                {/* Nome e Email */}
                <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1F2937' }}>Ana Lívia</p>
                    <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>analiv@gmail.com</p>
                </div>
            </div>
            <ChevronRight size={16} color="#9CA3AF"/>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;