import { useContext, useState } from 'react'
import { Box, Text, VStack, Badge, Heading, HStack } from '@chakra-ui/react'
import TaskContext from '../context/TaskContext'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../styles/calendar.css'

const CalendarView = () => {
  const { state } = useContext(TaskContext)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const selectedDateString = selectedDate.toISOString().split('T')[0]
  const filteredTasks = state.tasks.filter(task => task.deadline === selectedDateString)

  return (
    <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
      <Heading size="md" mb={4} color="#000000">Calendario de Tareas</Heading>
      
      <Calendar 
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => {
          const dateString = date.toISOString().split('T')[0]
          const tasksForDate = state.tasks.filter(task => task.deadline === dateString)

          return tasksForDate.length > 0 ? (
            <HStack spacing={1} justify="center">
              {tasksForDate.map((task) => (
                <Badge 
                  key={task.id} 
                  colorScheme={
                    task.status === 'todo' ? 'yellow' : 
                    task.status === 'inProgress' ? 'orange' : 'green'
                  }
                  fontSize="xs"
                  color="#000000"
                >
                  {task.title}
                </Badge>
              ))}
            </HStack>
          ) : null
        }}
      />

      <VStack mt={4} align="stretch">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <Box key={task.id} bg="gray.200" p={3} borderRadius="md">
              <Text fontWeight="bold" color="#000000">{task.title}</Text>
              <Text color="#000000">{task.description}</Text>
              <Badge colorScheme={
                task.status === 'todo' ? 'yellow' : 
                task.status === 'inProgress' ? 'orange' : 'green'
              }>
                {task.status === 'todo' ? 'Por Hacer' : task.status === 'inProgress' ? 'En Progreso' : 'Completada'}
              </Badge>
            </Box>
          ))
        ) : (
          <Text color="#000000">No hay tareas para esta fecha.</Text>
        )}
      </VStack>
    </Box>
  )
}

export default CalendarView


