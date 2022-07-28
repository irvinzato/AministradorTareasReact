import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='task-list-content'>
        <h1>Tareas</h1>
        <Task 
         text='Aprender React' />
      </div>
    </div>
  );
}

export default App;