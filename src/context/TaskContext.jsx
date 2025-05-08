import { createContext, useReducer } from 'react'

const TaskContext = createContext()

const initialState = {
  tasks: [],
  filter: 'all',
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
    case 'SET_FILTER':
      return { ...state, filter: action.payload }
    default:
      return state
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext



