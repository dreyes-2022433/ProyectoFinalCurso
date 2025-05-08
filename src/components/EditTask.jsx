import { useContext, useState } from 'react'
import { Box, Button, Input, Select, Textarea, VStack } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'

const EditTask = ({ task, onClose }) => {
  const { dispatch } = useContext(TaskContext)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [deadline, setDeadline] = useState(task.deadline)
  const [status, setStatus] = useState(task.status)

  const handleUpdate = (e) => {
    e.preventDefault()

    const updatedTask = {
      ...task,
      title,
      description,
      deadline,
      status,
    }

    dispatch({ type: 'UPDATE_TASK', payload: updatedTask })
    onClose()
  }

  return (
    <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
      <VStack as="form" spacing={4} onSubmit={handleUpdate}>
        <Input 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea 
          placeholder="Descripción" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)}
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">Por Hacer</option>
          <option value="inProgress">En Progreso</option>
          <option value="completed">Completada</option>
        </Select>
        <Button type="submit" colorScheme="green">Actualizar Tarea</Button>
        <Button onClick={onClose} colorScheme="red">Cancelar</Button>
      </VStack>
    </Box>
  )
}

export default EditTask

