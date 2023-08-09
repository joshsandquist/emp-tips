import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Text, VStack, Heading } from '@chakra-ui/react';

const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      id
      firstName
      lastName
      hoursWorked
    }
  }
`;

function EmployeeList() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <VStack spacing={4} align="start" width="full">
      <Heading as="h2" size="lg">Employees</Heading>
      {data.getEmployees.map((employee) => (
        <Box 
          key={employee.id} 
          borderWidth="1px" 
          borderRadius="lg" 
          padding="4" 
          width="full"
          bg="white"
          boxShadow="md"
        >
          <Text fontSize="lg" fontWeight="bold">
            {employee.firstName} {employee.lastName}
          </Text>
          <Text mt={2}>Hours Worked: {employee.hoursWorked}</Text>
        </Box>
      ))}
    </VStack>
  );
}

export default EmployeeList;