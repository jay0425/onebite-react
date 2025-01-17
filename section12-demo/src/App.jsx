import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import { getEmotionImage } from './util/get-emotion-image';

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="emotion1" />
        <img src={getEmotionImage(2)} alt="emotion2" />
        <img src={getEmotionImage(3)} alt="emotion3" />
        <img src={getEmotionImage(4)} alt="emotion4" />
        <img src={getEmotionImage(5)} alt="emotion5" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
