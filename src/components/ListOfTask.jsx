import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../styles/ListOfTask.css';


function ListOfTask() {
  //inicialmente "tasks" sera un arreglo vacio(Uso de Hooks)
  const [ tasks, setTasks ] = useState([]);

  const addTask = ( task ) => {
    console.log("Agregare tarea ", task);
    if( task.text.trim() ) {
      task.text = task.text.trim();
      //Con esto le digo que quiero un arreglo con la nueva tarea al principio y el resto de tareas
      const updatedTasks = [ task, ...tasks ]; //Con el operador "..." deja de ser un arreglo "tasks" y mete cada uno de sus valores al nuevo arreglo
      setTasks(updatedTasks);
    }
  }

  //Se puede usar fragmentos(Son para que se pueda escribir la estructura y no aparecen reflejados cuando se crea en HTML) "<> </>", son etiquetas que no tienen definición
  return(
    <>
      <TaskForm sendTask={ addTask } />
      <div className='task-list-container'>
  {/* Para renderizar una lista de componentes se hace de la sig manera, usando llaves */}
        {
          tasks.map((task) =>
          <Task
            key={ task.id } //Es importante usar "key"(no es un prop) para que no tenga problemas React al renderizar el elemento unico
            id= { task.id } 
            text={ task.text }
            completed={ task.completed } />
          )
        }
      </div>
    </>
  );
}

export default ListOfTask;