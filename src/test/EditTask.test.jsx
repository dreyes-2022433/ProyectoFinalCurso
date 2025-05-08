import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { TaskProvider } from '../context/TaskContext'
import EditTask from '../components/EditTask'

const mockTask = {
  id: 1,
  title: 'Test Task',
  description: 'Test Description',
  status: 'todo'
}

test('Actualiza una tarea correctamente', () => {
  const handleClose = jest.fn()

  render(
    <ChakraProvider>
      <TaskProvider>
        <EditTask task={mockTask} onClose={handleClose} />
      </TaskProvider>
    </ChakraProvider>
  )

  fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Updated Task' } })
  fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { value: 'Updated Description' } })
  fireEvent.click(screen.getByText('Actualizar Tarea'))

  expect(screen.queryByText('Updated Task')).toBeInTheDocument()
  expect(handleClose).toHaveBeenCalled()
})
