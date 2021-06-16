const ADD_TASK = "ADD_TASK";
const DEL_TASK = "DEL_TASK";
const TOGGLE_DONE = "TOGGLE_DONE";
const SET_TASKTEXT = "SET_TASKTEXT";
const SET_FILTER_VALUE = "SET_FILTER_VALUE";
const SET_COMPLITED_COUNTER = "SET_COMPLITED_COUNTER";  
 
const defaultState = {
    tasksList: [],
    taskText: "",
    filter: "all",
    complitedCounter: 0,
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasksList: [
                    ...state.tasksList,
                    {id: Math.floor(Math.random() * 1000), text: action.payload, done: false}
                ]
            };
        case DEL_TASK:
            return {
                ...state,
                tasksList: state.tasksList.filter( el => el.id !== action.payload)
            };
        case TOGGLE_DONE:
            return {
                ...state,
                tasksList: state.tasksList.map( task => {
                    if (task.id === action.payload){
                        return {
                            ...task,
                            done: !task.done
                        }
                    } return task
                })
            };
        case SET_TASKTEXT:
            return {
                ...state,
                taskText: action.payload
            };
        case SET_FILTER_VALUE:
            return {
                ...state,
                filter: action.payload
            };
        case SET_COMPLITED_COUNTER:
            return {
                ...state,
                complitedCounter: state.tasksList.filter( item => item.done === true).length
            };
        default:
            return state
    };
}
export default reducer;