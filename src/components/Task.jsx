import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, complete }) {

  return(
    <div className={ complete ? 'task-container task-completed' :'task-container' }>
      <div className='task-text'>
        { text }
      </div>
      <div className='task-content-icon'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );

}

export default Task;