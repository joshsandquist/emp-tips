import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Box, Text, VStack, Heading, Button } from '@chakra-ui/react';

const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      id
      firstName
      lastName
      hoursWorked
    }
  }
`
const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;;

function EmployeeList() {
    const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
    const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);
  
    const handleDelete = async (id) => {
      try {
        await deleteEmployee({
          variables: { id }
        });
        refetch();
      } catch (err) {
        console.error("Error deleting employee:", err.message);
      }
    }
  
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
            <Button mt={2} colorScheme="red" size="sm" onClick={() => handleDelete(employee.id)}>
              Delete
            </Button>
          </Box>
        ))}
      </VStack>
    );
  }
  
  export default EmployeeList;