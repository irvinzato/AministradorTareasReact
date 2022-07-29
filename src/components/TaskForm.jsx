import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    const newTask = {
      id: uuidv4(),       //Para usar la funcion instale "npm i uuid"
      text: value,
      completed: false
    }
    //console.log("Enviare ", newTask);
    props.sendTask( newTask );
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