import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Home() {
  return (
    <VStack spacing={8} align="center" p={8}>
      <Box
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.7)"
        color="white"
        w={{ base: 'full', md: '4xl' }}
        bg="blue.700"
        borderRadius="lg"
        
        p={8}
      >
        <Box>
          <Heading as="h1"  size="2xl" textAlign="center" mb={2}>Welcome to the Employee Tip Calculator</Heading>
          <Text fontSize="xl" m={4} textAlign="center">The perfect tool for managing your company's tip pool and generating reports efficiently.</Text>
        </Box>
        <Box mt={2}>
          <VStack align="start" spacing={2} mt={4}>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Efficient Tip Calculations</Heading>
              <Text fontSize="lg" my={2}>Easily calculate pooled tips for your employees quickly and accurately.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Employee Management</Heading>
              <Text fontSize="lg" my={2}>Manage your employees' records, ensuring their tip history is always up-to-date.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Reports</Heading>
              <Text fontSize="lg" my={2}>Generate comprehensive reports for individual employees or the whole team.</Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </VStack>
  )
}

export default Home;