import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'
import Home from './pages/Homex'
import CalendarPage from './pages/CalendarPage'
import NotFound from './pages/NotFound'
import { Box, Container } from '@chakra-ui/react'

function App() {
  return (
    <TaskProvider>
      <Router>
        <Box bg="gray.800" minH="100vh" color="white" py={8}>
          <Container maxW="container.md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </TaskProvider>
  )
}

export default App

