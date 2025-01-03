import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/exam';
import { useState, useRef } from 'react';

// 리렌더링 될 때마다 다시 생설될 필요 없고 애초에 상수라 값이 변할 일도 없어서
// 컴포넌트 바깥에 mockTodos를 두도록 한다.
const mockTodos = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'next.js 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'typescript 공부하기',
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State 의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}

export default App;
