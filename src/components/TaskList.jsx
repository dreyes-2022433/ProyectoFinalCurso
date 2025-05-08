import { useContext } from 'react'
import { Box, VStack, Text } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'
import TaskItem from './TastItem'

const TaskList = () => {
  const { state } = useContext(TaskContext)

  return (
    <Box p={4}>
      <VStack spacing={3}>
        {state.tasks.length === 0 ? (
          <Text color="#000000">No hay tareas aún</Text>
        ) : (
          state.tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </VStack>
    </Box>
  )
}

export default TaskList



