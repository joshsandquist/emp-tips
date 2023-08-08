import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import NewEmployeeForm from '../components/NewEmployeeForm';

function Employees() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Weekly Report</Heading>
      <NewEmployeeForm />
    </Box>
  )
}

export default Employees;