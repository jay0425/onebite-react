import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

const mockData = [
  {
    id: 1,
    createdDate: new Date('2025-02-05').getTime(),
    emotionId: 1,
    content: '1번 일기 내용입니다.',
  },
  {
    id: 2,
    createdDate: new Date('2025-02-04').getTime(),
    emotionId: 2,
    content: '2번 일기 내용입니다.',
  },
  {
    id: 3,
    createdDate: new Date('2025-01-07').getTime(),
    emotionId: 3,
    content: '3번 일기 내용입니다.',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action, ...state];
    case 'UPDATE':
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 일기 내용을 저장할 state
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdData, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdData,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, 'Hello');
        }}
      >
        일기 추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getDate(), 3, '수정된 일기');
        }}
      >
        일기 수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
