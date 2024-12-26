import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수 -> 클린업, 정리함수 -> 이 useEffect가 끝날 때 적용
    return () => {
      console.log('unmount');
    };
  }, []);
  return <>짝수입니다.</>;
};
export default Even;
