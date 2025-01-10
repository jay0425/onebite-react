import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [date, setDate] = useState(new Date()); // 매초마다 현재 시간을 업데이트

  useEffect(() => {
    console.log('useEffect 실행 되고 있나? 마운트 시에!!');
    const timer = setInterval(() => {
      setDate(new Date()), 1000; // 1초 마다 state에 새로운 값 넣기
    });

    return () => {
      clearInterval(timer);
      console.log('언마운트');
    }; // 컴포넌트가 언마운트(컴포넌트가 화면에서 사라질 때)될 때 타이머 정리
    // 언마운트 시 정리 작업(cleanup)
    // useEffect에서는 타이머 정리, 이벤트 리스너 제거 등을 할 수 있다. 이 작업은 메모리 누수를 방지하기 위해 꼭 필요하다.
  }, []);

  const dateToString = (date) => {
    let week = new Array('일', '월', '화', '수', '목', '금', '토');

    let localeTime = date.toLocaleTimeString();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let dayName = week[date.getDay()];

    return (
      <div className="Header">
        <h2>오늘의 할일 😆</h2>
        <p>{year + '년 ' + month + '월 ' + day + '일 ' + dayName + '요일 ' + localeTime}</p>
      </div>
    );
  };

  return dateToString(date);
};

export default Header;
