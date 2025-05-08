import { Box, Heading } from '@chakra-ui/react'
import CalendarView from '../components/CalendarView1.jsx'
const CalendarPage = () => {
    return (
      <Box p={4}>
        <Heading mb={4}>Calendario de Tareas</Heading>
        <CalendarView />
      </Box>
    )
  }
  
  export default CalendarPage

