import { useContext, useState } from 'react'
import { Box, Button, Input, Select, VStack, Textarea } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('todo')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: Date.now(),
      title,
      description,
      deadline,
      status,
    }

    dispatch({ type: 'ADD_TASK', payload: newTask })

    setTitle('')
    setDescription('')
    setDeadline('')
    setStatus('todo')
  }

  return (
    <Box bg="black" p={4} borderRadius="md" boxShadow="sm">
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
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
        <Button type="submit" colorScheme="blue">Agregar Tarea</Button>
      </VStack>
    </Box>
  )
}

export default TaskForm

