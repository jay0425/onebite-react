import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    // 특정 조건에 따라 페이지 이동 시켜야 한다면 useNavigate
    nav('/new');
  };
  return (
    <>
      <Button
        text={'123'}
        type={'DEFAULT'}
        onClick={() => {
          console.log('123번 버튼 클릭!!');
        }}
      />
      <Button
        text={'123'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('123번 버튼 클릭!!');
        }}
      />
      <Button
        text={'123'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('123번 버튼 클릭!!');
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
