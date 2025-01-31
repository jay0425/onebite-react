import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

// import { useSearchParams } from 'react-router-dom';

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get('value'));

  return (
    <div>
      <Header title={'2025년 1월'} leftChild={<Button text={'<'} />} rightChild={<Button text={'>'} />} />
      <DiaryList />
    </div>
  );
};

export default Home;
