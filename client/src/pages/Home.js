import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Home() {
  return (
    <VStack spacing={8} align="center"  p={8}>
      {/* Content Box */}
      <Box
        color="white"
        w={{ base: 'full', md: '4xl' }}
        bg="blue.700"
        borderRadius="lg"
        boxShadow="md"
        p={8} // Increased padding for more space inside the box
      >
        {/* Hero Section */}
        <Box>
          <Heading as="h1"  size="2xl" textAlign="center" mb={2}>Welcome to the Employee Tip Calculator</Heading>
          <Text fontSize="xl" m={4} textAlign="center">The perfect tool for managing your employee tip pool and generating reports easily.</Text>
        </Box>

        {/* Features Section */}
        <Box mt={2}>
          <Heading as="h2" size="xl" textDecoration="underline" my={4}>Features</Heading>
          <VStack align="start" spacing={2} mt={4}>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Efficient Tip Calculations</Heading>
              <Text fontSize="lg" m={2}>Calculate pooled tips for your employees quickly and accurately.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Employee Management</Heading>
              <Text fontSize="lg" m={2}>Manage your employees' records, ensuring their tip history is always up-to-date.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" color="yellow.100">Reports</Heading>
              <Text fontSize="lg" m={2}>Generate comprehensive reports for individual employees or the whole team.</Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </VStack>
  )
}

export default Home;