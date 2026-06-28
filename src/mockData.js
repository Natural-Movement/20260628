export const mockQuestions = [
  {
    id: 'q_001',
    authorId: 'user_02',
    authorName: '이해봄',
    title: '수학 미적분에서 적분 상수를 어떻게 처리해야 할까요?',
    contentSnippet: '여기 3번 문제에서 부정적분을 구했는데...',
    fullContent: '여기 3번 문제에서 부정적분을 구했는데, 마지막에 적분 상수 C를 어떻게 특정값으로 확정하는지 잘 모르겠습니다. 조건이 하나 더 필요한가요?',
    keywords: ['수학', '미적분'],
    createdAt: '2026-06-28T09:00:00Z',
    commentsCount: 2
  },
  {
    id: 'q_002',
    authorId: 'user_03',
    authorName: '김코딩',
    title: '리액트에서 useEffect 의존성 배열 질문',
    contentSnippet: '의존성 배열을 비워두는 것과 아예 생략하는 것의 차이가 헷갈립니다.',
    fullContent: 'useEffect를 쓸 때 `[]`로 두는 것과 아예 배열을 안 적는 것의 차이가 정확히 뭔가요? 렌더링될 때마다 실행되는 조건이 헷갈립니다.',
    keywords: ['프로그래밍', 'React'],
    createdAt: '2026-06-28T10:30:00Z',
    commentsCount: 1
  }
];

export const mockComments = [
  {
    id: 'c_001',
    questionId: 'q_001',
    authorId: 'user_01',
    authorName: '테스트 유저',
    content: '보통 문제의 첫 부분이나 마지막에 f(0) = 3 처럼 초기 조건을 줍니다. 그걸 대입해서 C를 찾으시면 됩니다!',
    createdAt: '2026-06-28T09:15:00Z'
  },
  {
    id: 'c_002',
    questionId: 'q_001',
    authorId: 'user_02',
    authorName: '이해봄',
    content: '아하! 다시 보니 f(1)=5 라는 조건이 숨어 있었네요. 감사합니다.',
    createdAt: '2026-06-28T09:20:00Z'
  },
  {
    id: 'c_003',
    questionId: 'q_002',
    authorId: 'user_01',
    authorName: '테스트 유저',
    content: '[]는 첫 마운트 시 한 번만 실행되고, 아예 생략하면 컴포넌트가 렌더링될 때마다 매번 실행됩니다!',
    createdAt: '2026-06-28T11:00:00Z'
  }
];

export const MOCK_USER = {
  id: 'user_01',
  name: '테스트 유저'
};
