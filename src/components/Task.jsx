import React from 'react';
import '../styles/Task.css'

function Task({ text }) {

  return(
    <div className='task-container'>
      <div className='task-text'>
        { text }
      </div>
      <div className='task-icon'>
        icono
      </div>
    </div>
  );

}

export default Task;