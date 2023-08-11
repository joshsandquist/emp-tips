import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Box, Text, VStack, Heading, Button, SimpleGrid} from '@chakra-ui/react';

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

const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;

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
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <VStack spacing={4} align="start" width="full">
      <Heading as="h2" size="lg">All Employees</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} width="full">
        {data.getEmployees.map((employee) => (
          <Box 
            key={employee.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            padding="4" 
            bg="white"
            boxShadow="md"
          >
            <Text fontSize="2xl" my={4}fontWeight="bold" textAlign="center"> 
              {employee.firstName} {employee.lastName}
            </Text>
            <Box display="flex" justifyContent="center">
            <Button my={2} colorScheme="purple" size="sm" >
              About
            </Button>
            <Button my={2} ml={6}colorScheme="red" size="sm" onClick={() => handleDelete(employee.id)}>
              Delete
            </Button>
            </Box>
            
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default EmployeeList;