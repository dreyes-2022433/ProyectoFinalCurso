import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { TaskProvider } from '../context/TaskContext'
import CalendarView from '../components/CalendarView'

const tasks = [
  { id: 1, title: 'Task 1', description: 'First task', deadline: '2025-05-10', status: 'todo' },
  { id: 2, title: 'Task 2', description: 'Second task', deadline: '2025-05-10', status: 'inProgress' },
  { id: 3, title: 'Task 3', description: 'Third task', deadline: '2025-05-15', status: 'completed' }
]

test('Muestra las tareas para una fecha seleccionada', () => {
  render(
    <ChakraProvider>
      <TaskProvider>
        <CalendarView />
      </TaskProvider>
    </ChakraProvider>
  )

  fireEvent.click(screen.getByText('10'))

  expect(screen.getByText('Task 1')).toBeInTheDocument()
  expect(screen.getByText('Task 2')).toBeInTheDocument()
  expect(screen.queryByText('Task 3')).not.toBeInTheDocument()
})
