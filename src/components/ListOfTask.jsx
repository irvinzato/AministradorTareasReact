import React from 'react';
import TaskForm from './TaskForm';
import '../styles/ListOfTask.css'

function ListOfTask() {
  //Se puede usar fragmentos(Son para que se pueda escribir la estructura y no aparecen reflejados cuando se crea en HTML) "<> </>", son etiquetas que no tienen definición
  return(
    <>
      <TaskForm />
      <div className='task-list-container'>
        Lista de tareas
      </div>
    </>
  );
}

export default ListOfTask;