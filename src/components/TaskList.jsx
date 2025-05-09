import { useContext } from 'react'
import { Box, VStack, Text } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'
import TaskItem from './TastItem'

const TaskList = () => {
  const { state } = useContext(TaskContext)

 
  const filteredTasks = state.filter === 'all'
    ? state.tasks
    : state.tasks.filter(task => task.status === state.filter)

  return (
    <Box p={4}>
      <VStack spacing={3}>
        {filteredTasks.length === 0 ? (
          <Text color="#000000">No hay tareas en esta categoría</Text>
        ) : (
          filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </VStack>
    </Box>
  )
}

export default TaskList




