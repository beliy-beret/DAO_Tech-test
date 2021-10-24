import { TaskType } from '../AppTypes'
import * as types from './actionsTypes'

type ActionType = {
  type: string
  payload: any
}

type DefaultStateType = {
  tasksList: TaskType[]
  taskText: string
  complited: TaskType[]
  uncomplited: TaskType[]
  filter: string
  complitedCounter: number
  uncomplitedCounter: number
}

const defaultState: DefaultStateType = {
  tasksList: [],
  taskText: '',
  complited: [],
  uncomplited: [],
  filter: 'all',
  complitedCounter: 0,
  uncomplitedCounter: 0,
}

const reducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasksList: [
          ...state.tasksList,
          { id: Math.floor(Math.random() * 1000), text: action.payload, done: false },
        ],
      }
    case types.DEL_TASK:
      return {
        ...state,
        tasksList: state.tasksList.filter((el) => el.id !== action.payload),
      }
    case types.TOGGLE_DONE:
      return {
        ...state,
        tasksList: state.tasksList.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              done: !task.done,
            }
          } return task
        }),
      }
    case types.SET_TASKTEXT:
      return {
        ...state,
        taskText: action.payload,
      }
    case types.SET_FILTER_VALUE:
      return {
        ...state,
        filter: action.payload,
      }
    case types.SET_COMPLITED_COUNTER:
      return {
        ...state,
        complitedCounter: state.tasksList.filter((item) => item.done === true).length,
      }
    case types.SET_UNCOMPLITED_COUNTER:
      return {
        ...state,
        uncomplitedCounter: state.tasksList.filter((item) => item.done === false).length,
      }
    case types.GET_COMPLITED_TASK:
      return {
        ...state,
        complited: state.tasksList.filter((item) => item.done === true),
      }
    case types.GET_UNCOMPLITED_TASK:
      return {
        ...state,
        uncomplited: state.tasksList.filter((item) => item.done === false),
      }
    default:
      return state
  }
}
export default reducer
