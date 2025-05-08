import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { TaskProvider } from '../context/TaskContext'
import TaskItem from '../components/TaskItem'

const mockTask = {
  id: 1,
  title: 'Test Task',
  description: 'This is a test task',
  status: 'todo'
}

test('Renderiza una tarea y elimina correctamente', () => {
  render(
    <ChakraProvider>
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    </ChakraProvider>
  )

  expect(screen.getByText('Test Task')).toBeInTheDocument()

  const deleteButton = screen.getByText('Eliminar')
  fireEvent.click(deleteButton)

  expect(screen.queryByText('Test Task')).not.toBeInTheDocument()
})
