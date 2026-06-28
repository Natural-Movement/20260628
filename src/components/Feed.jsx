import React from 'react';
import QuestionCard from './QuestionCard';

export default function Feed({ selectedKeyword, questions, onOpenWriteModal, onOpenQuestion }) {
  // 키워드 필터링 로직
  const filteredQuestions = questions.filter(q => {
    if (selectedKeyword === '전체') return true;
    return q.keywords.includes(selectedKeyword);
  });

  return (
    <div className="column" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="column-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>질문 게시판 {selectedKeyword !== '전체' && `> ${selectedKeyword}`}</span>
        <button 
          onClick={onOpenWriteModal}
          style={{
          backgroundColor: 'var(--accent-color)',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          + 질문하기
        </button>
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} onClick={() => onOpenQuestion(q)} />
          ))
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '40px' }}>
            해당 키워드의 질문이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
