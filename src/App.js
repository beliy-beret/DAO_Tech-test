import { useState, useEffect } from 'react';
import '../src/css/App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Counter from './components/Counter';

function App() {
  // Состояние
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [doneCounter, setDoneCounter] = useState(0);
  const [taskCounter, setTaskCounter] = useState(0);
  const [complited, setComplited] = useState(null);
  const [uncomplited, setUncomplited] = useState(null);

  //Обработчики сосотояния
  useEffect(() => setDoneCounter(tasksList.filter( item => item.done === true).length), [tasksList]);
  useEffect(() => setTaskCounter(tasksList.filter( item => item.done === false).length), [tasksList]);
  const getComplited = () => setComplited(tasksList.filter(item => item.done === true));
  const getUncomplited = () => setUncomplited(tasksList.filter(item => item.done === false));  
  const inputHandler = (e) => setTaskText(e.target.value);    
  const createTask = () => {
    if (taskText.length <= 3) {
      alert("Должно быть болше 3 символов")
    } else {
      setTasksList([
        ...tasksList,
        {id: Math.floor(Math.random() * 1000), text: taskText, done: false}
      ]);
      setTaskText("");
    }  
  }
  const deleteTask = (Id) => {
    setTasksList(tasksList.filter( el => el.id !== Id))
  };
  const toggleDone = (Id) => {
    setTasksList(tasksList.map( item => {
      if (item.id === Id) {        
        return {          
          ...item,
          done: !item.done
        };        
      } return item     
    }));    
  }  
  
  return (
    <div className="App">
      <section className="App__counters">
        <div className="done-tasks">
          <Counter value={doneCounter} label={"Заданий выполнено"} />
        </div>
        <div className="tasks">
          <Counter value={taskCounter} label={"Заданий нужно выполнить"} />
        </div>
      </section>
      <section className="App__tasksList">        
        <TaskList tasksList={tasksList} deleteTask={deleteTask} toggleDone={toggleDone} />  
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>
      <section className="App__filters">
        <label>Выполненые задания<input type="checkbox" onChange={getComplited} /></label>
        <label>Не выполненые задания<input type="checkbox" onChange={getUncomplited} /></label>
      </section>      
    </div>
  );
}
export default App;
