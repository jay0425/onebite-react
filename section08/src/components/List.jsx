import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🎨</h4>
      <input value={search} onChange={onChangeSearch} placeholder="Please enter your search term" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};
export default List;
