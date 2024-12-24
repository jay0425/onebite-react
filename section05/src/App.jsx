import './App.css';
import Register from './components/Register';

// 자식 컴포넌트 리렌더링 되는 경우...
// 1. state 값 변경 시
// 2. props 값 변경 시
// 부모 컴포넌트 리렌더링 시

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
