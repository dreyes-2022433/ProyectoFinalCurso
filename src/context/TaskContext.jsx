import { createContext, useReducer, useEffect } from 'react'

const TaskContext = createContext()

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filter: 'all',
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const updatedTasksAdd = [...state.tasks, action.payload]
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd))
      return { ...state, tasks: updatedTasksAdd }

    case 'UPDATE_TASK':
      const updatedTasksEdit = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      )
      localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit))
      return { ...state, tasks: updatedTasksEdit }

    case 'DELETE_TASK':
      const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete))
      return { ...state, tasks: updatedTasksDelete }

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





