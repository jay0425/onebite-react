import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
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
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
