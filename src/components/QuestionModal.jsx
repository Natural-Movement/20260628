import React, { useState } from 'react';

export default function QuestionModal({ question, comments, onClose, onSubmitComment }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    onSubmitComment(question.id, newComment);
    setNewComment(''); // 작성 후 입력창 비우기
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        {/* 상단 닫기 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={closeBtnStyle}>✕</button>
        </div>

        {/* 질문 영역 */}
        <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px', marginBottom: '20px' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>{question.title}</h2>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              작성자: {question.authorName} • {new Date(question.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>
            {question.fullContent}
          </p>
        </div>

        {/* 댓글(답변) 영역 */}
        <div style={{ marginBottom: '20px', maxHeight: '250px', overflowY: 'auto' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '16px' }}>
            답변 {comments.length}개
          </h3>
          {comments.map(c => (
            <div key={c.id} style={commentCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{c.authorName}</span>
                <span style={{ color: 'var(--text-muted)' }}>{new Date(c.createdAt).toLocaleDateString()}</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.4' }}>{c.content}</p>
            </div>
          ))}
          {comments.length === 0 && (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', margin: '20px 0' }}>아직 답변이 없습니다. 첫 답변을 남겨주세요!</p>
          )}
        </div>

        {/* 답변 작성 폼 */}
        <form onSubmit={handleCommentSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="답변이나 조언을 남겨주세요!" 
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={submitBtnStyle}>등록</button>
        </form>
      </div>
    </div>
  );
}

// 스타일 모음
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 100
};
const modalStyle = {
  backgroundColor: 'var(--bg-surface)', padding: '30px', borderRadius: '12px',
  width: '600px', maxWidth: '90%', maxHeight: '90vh', overflowY: 'auto', border: '1px solid var(--border-subtle)'
};
const closeBtnStyle = {
  background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer'
};
const commentCardStyle = {
  backgroundColor: 'var(--bg-base)', padding: '16px', borderRadius: '8px',
  border: '1px solid var(--border-subtle)', marginBottom: '12px'
};
const inputStyle = {
  flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid var(--border-subtle)',
  backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)', outline: 'none'
};
const submitBtnStyle = {
  padding: '0 20px', backgroundColor: 'var(--accent-color)', color: '#fff',
  border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer'
};
