import { useContext, useState } from 'react'
import { Box, HStack, Text, Button, Badge } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'
import EditTask from './EditTask'

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext)
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id })
  }

  return (
    <Box bg="gray.100" p={4} borderRadius="md" w="100%" boxShadow="sm">
      {isEditing ? (
        <EditTask task={task} onClose={() => setIsEditing(false)} />
      ) : (
        <HStack justifyContent="space-between">
          <Box>
            <Text fontWeight="bold" color="#000000">{task.title}</Text>
            <Text color="#000000">{task.description}</Text>
            <Text color="#000000">Fecha: {task.deadline ? task.deadline : 'Sin fecha'}</Text>
            <Badge colorScheme={
              task.status === 'todo' ? 'yellow' :
              task.status === 'inProgress' ? 'orange' : 'green'
            }>
              {task.status === 'todo' ? 'Por Hacer' : task.status === 'inProgress' ? 'En Progreso' : 'Completada'}
            </Badge>
          </Box>

          <HStack spacing={2}>
            <Button 
              colorScheme="blue" 
              size="sm" 
              onClick={() => setIsEditing(true)}
            >
              Editar
            </Button>
            
            <Button 
              colorScheme="red" 
              size="sm" 
              onClick={handleDelete}
            >
              Eliminar
            </Button>
          </HStack>
        </HStack>
      )}
    </Box>
  )
}

export default TaskItem




