import { Box, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box p={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">404 - Página No Encontrada</Text>
      <Text>La ruta que intentas acceder no existe.</Text>
    </Box>
  )
}

export default NotFound

