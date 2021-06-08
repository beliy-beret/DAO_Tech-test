import { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  const [tasksList, setTasksLiist] = useState([]);

  return (
    <div className="App">
      <section className="App__tasksList">
        <TaskList tasksList={tasksList}/>  
      </section>
      <section className="App__input">
        <InputTask />
      </section>      
    </div>
  );
}

export default App;
