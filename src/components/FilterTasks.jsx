import { useContext } from 'react'
import { HStack, Button } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'

const FilterTasks = () => {
  const { dispatch } = useContext(TaskContext)

  const handleFilter = (status) => {
    dispatch({ type: 'SET_FILTER', payload: status })
  }

  return (
    <HStack spacing={4} mb={4}>
      <Button colorScheme="blue" onClick={() => handleFilter('all')}>Todas</Button>
      <Button colorScheme="yellow" onClick={() => handleFilter('todo')}>Por Hacer</Button>
      <Button colorScheme="orange" onClick={() => handleFilter('inProgress')}>En Progreso</Button>
      <Button colorScheme="green" onClick={() => handleFilter('completed')}>Completadas</Button>
    </HStack>
  )
}

export default FilterTasks