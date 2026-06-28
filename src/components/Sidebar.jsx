import React from 'react';

const keywords = ['전체', '수학', '영어', '과학', '프로그래밍', '기타'];

export default function Sidebar({ selectedKeyword, onSelect, isDarkMode, onToggleTheme }) {
  return (
    <div className="column">
      <div className="column-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>📚 과목 골라보기</span>
          <button 
            onClick={onToggleTheme} 
            style={{
              background: 'var(--bg-surface-hover)', 
              border: 'none', 
              padding: '6px 12px',
              borderRadius: '20px', 
              cursor: 'pointer', 
              fontSize: '1.2rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title="화면 테마 바꾸기"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {keywords.map(kw => (
          <button
            key={kw}
            onClick={() => onSelect(kw)}
            style={{
              padding: '12px 16px',
              textAlign: 'left',
              backgroundColor: selectedKeyword === kw ? 'var(--accent-color)' : 'var(--bg-surface)',
              color: selectedKeyword === kw ? '#fff' : 'var(--text-primary)',
              border: selectedKeyword === kw ? '3px solid var(--accent-color)' : '3px solid var(--border-subtle)',
              borderRadius: 'var(--btn-radius)',
              cursor: 'pointer',
              fontSize: '1.05rem',
              transition: 'all 0.2s',
              fontWeight: '700',
              boxShadow: selectedKeyword === kw ? '0 4px 10px rgba(59, 130, 246, 0.3)' : '0 2px 5px rgba(0,0,0,0.05)',
              transform: selectedKeyword === kw ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = selectedKeyword === kw ? 'scale(1.02)' : 'scale(1)'}
          >
            {kw === '전체' ? '🌈' : '📌'} {kw}
          </button>
        ))}
      </div>
    </div>
  );
}
