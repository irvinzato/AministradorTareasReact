import React, { useState } from 'react';
import '../styles/TaskForm.css';

function TaskForm( props ) {

  const [ value, setValue ] = useState('');

  const handleChange = ( e ) => {
    //console.log("Escribiendo...", e.target.value);
    setValue(e.target.value);
  }

  const handleShipping = ( e ) => {
    //Con esta funcion evitamos que vuelva a cargar la pagina al enviar formulario
    e.preventDefault();
    console.log("Enviare ", value);
    const newTask = {
      id: '123',
      text: value,
      completed: false
    }
  }

  return(
    <form className='task-form' onSubmit={ handleShipping }>
      <input className='task-input' type='text' autoComplete='off'
             placeholder='Escribe una tarea' name='text'
             onChange={ handleChange } />
      
      <button className='task-button'>Agregar tarea</button>
    </form>
  );

}

export default TaskForm;