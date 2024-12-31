import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState } from 'react';

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
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
