import { useMutation, gql } from '@apollo/client';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import {useState} from 'react';


const ADD_EMPLOYEE = gql`
  mutation AddEmployee($input: EmployeeInput!) {
    addEmployee(input: $input) {
      id
      firstName
      lastName
      hoursWorked
    }
  }
`;

function NewEmployeeForm() {
  const [addEmployee] = useMutation(ADD_EMPLOYEE);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    await addEmployee({
      variables: {
        input: {
          firstName,
          lastName,
          hoursWorked: parseFloat(hours),
        },
      },
    });

    setFirstName('');
    setLastName('');
    setHours('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mt={4}>
      <FormControl id="firstName" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </FormControl>
      <FormControl id="lastName" isRequired mt={4}>
        <FormLabel>Last Name</FormLabel>
        <Input value={lastName} onChange={e => setLastName(e.target.value)} />
      </FormControl>
      <FormControl id="hours" isRequired mt={4}>
        <FormLabel>Weekly Hours</FormLabel>
        <Input type="number" value={hours} onChange={e => setHours(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Add Employee
      </Button>
    </Box>
  );
}

export default NewEmployeeForm;