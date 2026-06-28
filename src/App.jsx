import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import QuestionModal from './components/QuestionModal';
import WriteQuestionModal from './components/WriteQuestionModal';
import { mockQuestions, mockComments, MOCK_USER } from './mockData';
import './index.css';

function App() {
  const [selectedKeyword, setSelectedKeyword] = useState('전체');
  
  // 테마(다크모드/라이트모드) 상태
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드가 바뀔 때마다 <body> 태그의 클래스를 변경합니다.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, [isDarkMode]);
  
  // 데이터 관리를 위한 상태(State)
  const [questions, setQuestions] = useState(mockQuestions);
  const [comments, setComments] = useState(mockComments);
  
  // 팝업창(모달) 열림/닫힘 상태
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // 질문 등록 함수 (테스트 유저 데이터 포함하여 배열 맨 앞에 추가)
  const handleAddQuestion = (newQuestionData) => {
    const newQuestion = {
      ...newQuestionData,
      id: 'q_' + Date.now(),
      authorId: MOCK_USER.id,
      authorName: MOCK_USER.name,
      createdAt: new Date().toISOString(),
      commentsCount: 0
    };
    setQuestions([newQuestion, ...questions]);
    setIsWriteModalOpen(false); // 창 닫기
  };

  // 답변 등록 함수
  const handleAddComment = (questionId, content) => {
    const newComment = {
      id: 'c_' + Date.now(),
      questionId,
      authorId: MOCK_USER.id,
      authorName: MOCK_USER.name,
      content,
      createdAt: new Date().toISOString()
    };
    setComments([...comments, newComment]);
    
    // 해당 질문의 댓글 수 + 1
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, commentsCount: q.commentsCount + 1 } : q
    ));
  };

  return (
    <div className="app-container">
      <Sidebar 
        selectedKeyword={selectedKeyword} 
        onSelect={setSelectedKeyword} 
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <Feed 
        selectedKeyword={selectedKeyword} 
        questions={questions}
        onOpenWriteModal={() => setIsWriteModalOpen(true)}
        onOpenQuestion={(q) => setSelectedQuestion(q)}
      />

      {/* 새 질문 작성 팝업 */}
      {isWriteModalOpen && (
        <WriteQuestionModal 
          onClose={() => setIsWriteModalOpen(false)}
          onSubmit={handleAddQuestion}
        />
      )}

      {/* 질문 상세/답변 팝업 */}
      {selectedQuestion && (
        <QuestionModal 
          question={selectedQuestion}
          comments={comments.filter(c => c.questionId === selectedQuestion.id)}
          onClose={() => setSelectedQuestion(null)}
          onSubmitComment={handleAddComment}
        />
      )}
    </div>
  );
}

export default App;
