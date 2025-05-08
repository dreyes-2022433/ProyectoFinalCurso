import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { TaskProvider } from '../context/TaskContext'
import FilterTasks from '../components/FilterTasks'

test('Cambia el filtro al hacer clic en los botones', () => {
  render(
    <ChakraProvider>
      <TaskProvider>
        <FilterTasks />
      </TaskProvider>
    </ChakraProvider>
  )

  fireEvent.click(screen.getByText('Completadas'))
  expect(screen.getByText('Completadas')).toBeInTheDocument()

  fireEvent.click(screen.getByText('En Progreso'))
  expect(screen.getByText('En Progreso')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Por Hacer'))
  expect(screen.getByText('Por Hacer')).toBeInTheDocument()
})
