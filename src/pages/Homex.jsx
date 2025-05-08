import { Box, Heading, VStack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskFrom'
import FilterTasks from '../components/FilterTasks'
import TaskList from '../components/TaskList'

const Home = () => {
  const navigate = useNavigate()

  const goToCalendar = () => {
    navigate('/calendar')
  }

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">Gestión de Tareas</Heading>
      <VStack spacing={6} align="stretch">
        <TaskForm />
        <Button 
          colorScheme="blue" 
          onClick={goToCalendar} 
          mb={4} 
          alignSelf="center"
        >
          Ver Calendario
        </Button>
        <FilterTasks />
        <TaskList />
      </VStack>
    </Box>
  )
}

export default Home
