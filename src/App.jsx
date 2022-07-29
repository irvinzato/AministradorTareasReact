import './App.css';
import Logo from './components/Logo';
import ListOfTask from './components/ListOfTask';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='task-list-content'>
        <h1>Tareas</h1>
        <ListOfTask />
      </div>
    </div>
  );
}

export default App;
