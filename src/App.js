import { useState, useEffect } from 'react';
import '../src/css/App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Counter from './components/Counter';
import FilterComponent from './components/FilterComponent';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
   
  // Состояние  
  const tasksList = useSelector( state => state.tasksList);
  const taskText = useSelector( state => state.taskText);
  const filter = useSelector( state => state.filter);
  const complitedCounter = useSelector( state => state.complitedCounter);


  
  const [uncomplitedCounter, setUncomplitedCounter] = useState(0);
  const [complited, setComplited] = useState(null);
  const [uncomplited, setUncomplited] = useState(null);
  

  //Обработчики сосотояния
  const setComplitedCounter = () => dispatch({type: "SET_COMPLITED_COUNTER"}); 
  useEffect(() => setComplitedCounter, [tasksList]);
  useEffect(() => setUncomplitedCounter(tasksList.filter( item => item.done === false).length), [tasksList]);
  useEffect(() => setComplited(tasksList.filter(item => item.done === true)), [tasksList]);
  useEffect(() => setUncomplited(tasksList.filter(item => item.done === false)), [tasksList]);  
  const inputHandler = (e) => dispatch({ type: "SET_TASKTEXT", payload: e.target.value});    
  const createTask = () => {
    if (taskText.length > 10) {
      alert("Должно быть не более 10 символов !");
    } else if (taskText.length < 1) {
      alert ("Сперва нужно написать текст задачи !")
    } else {      
      dispatch({type: "ADD_TASK", payload: taskText});
      dispatch({type: "SET_TASKTEXT", payload: ""});
    }  
  }
  const deleteTask = (Id) => dispatch({type: "DEL_TASK", payload: Id});
  const toggleDone = (Id) => dispatch({type: "TOGGLE_DONE", payload: Id});        
  
  const toggleFilter = (e) => dispatch({type: "SET_FILTER_VALUE", payload: e.target.value}); 
  
  //Тело приложения  
  return (
    <div className="App">
      <section className="App__counters">
        <div className="complited">
          <Counter value={complitedCounter} label={"Заданий выполнено"} />
        </div>
        <div className="uncomplited">
          <Counter value={uncomplitedCounter} label={"Заданий нужно выполнить"} />
        </div>
      </section>
      <section className="App__tasksList">        
        <TaskList tasksList={tasksList} complited={complited} uncomplited={uncomplited} 
        filter={filter} deleteTask={deleteTask} toggleDone={toggleDone} />   
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>
      <section className="App__filters">
        <p>Фильтр:</p>
        <FilterComponent label="выполненые задания" name="tasks" value="complited" onchange={toggleFilter} />
        <FilterComponent label="не выполненые задания" name="tasks" value="uncomplited" onchange={toggleFilter} />
        <FilterComponent label="все задания" name="tasks" value="all" onchange={toggleFilter} defaultChecked="true" />        
      </section>      
    </div>
  );
}
export default App;