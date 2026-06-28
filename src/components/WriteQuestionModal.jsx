import React, { useState } from 'react';

export default function WriteQuestionModal({ onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [keyword, setKeyword] = useState('수학'); // 기본값

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    if (!title.trim() || !content.trim()) return; // 빈 칸이면 작성 안됨
    
    // 부모 컴포넌트(App.jsx)로 새 데이터 전달
    onSubmit({
      title,
      contentSnippet: content.slice(0, 60) + (content.length > 60 ? '...' : ''),
      fullContent: content,
      keywords: [keyword]
    });
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ color: 'var(--text-primary)' }}>새 질문 작성</h2>
          <button onClick={onClose} style={closeBtnStyle}>✕</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={labelStyle}>과목/키워드</label>
            <select value={keyword} onChange={e => setKeyword(e.target.value)} style={inputStyle}>
              <option value="수학">수학</option>
              <option value="영어">영어</option>
              <option value="과학">과학</option>
              <option value="프로그래밍">프로그래밍</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>질문 제목</label>
            <input 
              type="text" 
              placeholder="무엇이 궁금한가요?" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              style={inputStyle} 
            />
          </div>

          <div>
            <label style={labelStyle}>상세 내용</label>
            <textarea 
              placeholder="어느 부분에서 막혔는지 자세히 적어주세요!" 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              style={{ ...inputStyle, height: '120px', resize: 'none' }} 
            />
          </div>

          <button type="submit" style={submitBtnStyle}>질문 등록하기</button>
        </form>
      </div>
    </div>
  );
}

// 스타일 모음 (가독성을 위해 하단 분리)
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 100
};
const modalStyle = {
  backgroundColor: 'var(--bg-surface)', padding: '30px', borderRadius: '12px',
  width: '500px', maxWidth: '90%', border: '1px solid var(--border-subtle)'
};
const labelStyle = {
  display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem'
};
const inputStyle = {
  width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-subtle)',
  backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none'
};
const submitBtnStyle = {
  marginTop: '10px', padding: '14px', backgroundColor: 'var(--accent-color)', color: '#fff',
  border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer'
};
const closeBtnStyle = {
  background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer'
};
