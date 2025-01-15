import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import { getEmotionImage } from './util/get-emotion-image';

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
      <div>
        <img src={getEmotionImage(1)} alt="이모티콘1" />
        <img src={getEmotionImage(2)} alt="이모티콘2" />
        <img src={getEmotionImage(3)} alt="이모티콘3" />
        <img src={getEmotionImage(4)} alt="이모티콘4" />
        <img src={getEmotionImage(5)} alt="이모티콘5" />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동!!</button>
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
