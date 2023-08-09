import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import NewEmployeeForm from '../components/NewEmployeeForm';
import EmployeeList from '../components/EmployeeList';

function Employees() {
  return (
    <Flex flexDirection={'column'}>
    <Box p={8}>
      <Heading as="h2" size="xl">Add New Employee</Heading>
      <NewEmployeeForm />
    </Box>
    <Box p={8}>
      <EmployeeList />
    </Box>
    </Flex>
  )
}

export default Employees;