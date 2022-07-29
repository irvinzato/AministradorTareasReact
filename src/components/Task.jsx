import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, completed, taskCompleted, deleteTask }) {

  return(
    <div className={ completed ? 'task-container task-completed' :'task-container' }>
      <div className='task-text' onClick={() => taskCompleted(id)}>
        { text }
      </div>
      <div className='task-content-icon'>
        <AiOutlineCloseCircle className='task-icon' onClick={() => deleteTask(id)} />
      </div>
    </div>
  );

}

export default Task;