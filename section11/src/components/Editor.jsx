import { useState, useRef, useContext } from 'react';
import './Editor.css';
import { TodoContext } from '../App';

const Editor = () => {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="New To do..."
      />
      <button onClick={onSubmit}>add</button>
    </div>
  );
};
export default Editor;
