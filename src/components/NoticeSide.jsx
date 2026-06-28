import React from 'react';

export default function NoticeSide() {
  return (
    <div className="column" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="column-header">공지사항</div>
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderLeft: '4px solid var(--danger-color)',
          padding: '16px',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          <h4 style={{ color: 'var(--danger-color)', marginBottom: '8px' }}>🚨 서비스 점검 안내</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>
            오늘 밤 12시부터 약 1시간 동안 서버 안정화 작업이 진행될 예정입니다. 질문 작성이 제한될 수 있습니다.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'var(--bg-base)',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)'
        }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>💡 질문 팁</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>
            질문할 때는 어느 부분에서 막혔는지 구체적으로 적어주시면 더 빠르고 정확한 답변을 받을 수 있어요!
          </p>
        </div>
      </div>
    </div>
  );
}
