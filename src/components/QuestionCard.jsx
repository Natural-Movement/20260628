import React from 'react';

export default function QuestionCard({ question, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
      backgroundColor: 'var(--bg-surface)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      transition: 'transform 0.2s, border-color 0.2s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
    >
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {question.keywords.map(kw => (
          <span key={kw} style={{
            backgroundColor: 'rgba(94, 106, 210, 0.2)',
            color: 'var(--accent-color)',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            {kw}
          </span>
        ))}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
        {question.title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '16px' }}>
        {question.contentSnippet}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>{question.authorName} • {new Date(question.createdAt).toLocaleDateString()}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          💬 답변 {question.commentsCount}
        </span>
      </div>
    </div>
  );
}
