import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='task-list-content'>
        <h1>Tareas</h1>
        <TaskForm />
        <Task 
         text='Aprender React' />
      </div>
    </div>
  );
}

export default App;
