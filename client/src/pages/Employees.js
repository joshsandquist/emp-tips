import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import NewEmployeeForm from '../components/NewEmployeeForm';
import EmployeeList from '../components/EmployeeList';

function Employees() {
  return (
    <Flex flexDirection={'column'}>
    <Heading as="h1" size="lg" textAlign="center" p={8}>Employees</Heading>
    <Box p={8}>
      <Heading as="h2" size="lg">Add New Employee</Heading>
      <NewEmployeeForm />
    </Box>
    <Box p={8}>
      <EmployeeList />
    </Box>
    </Flex>
  )
}

export default Employees;