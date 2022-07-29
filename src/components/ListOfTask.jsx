import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../styles/ListOfTask.css';


function ListOfTask() {
  //inicialmente "tasks" sera un arreglo vacio(Uso de Hooks)
  const [ tasks, setTasks ] = useState([]);

  const addTask = ( task ) => {
    console.log("Agregare tarea ", task);
  }

  //Se puede usar fragmentos(Son para que se pueda escribir la estructura y no aparecen reflejados cuando se crea en HTML) "<> </>", son etiquetas que no tienen definición
  return(
    <>
      <TaskForm />
      <div className='task-list-container'>
  {/* Para renderizar una lista de componentes se hace de la sig manera, usando llaves */}
        {
          tasks.map((task) =>
          <Task 
          text={ task.text }
          complete={ task.completed } />
          )
        }
      </div>
    </>
  );
}

export default ListOfTask;