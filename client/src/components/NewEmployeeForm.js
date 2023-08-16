import { useMutation, gql } from '@apollo/client';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import {useState} from 'react';


const ADD_EMPLOYEE = gql`
  mutation AddEmployee($input: EmployeeInput!) {
    addEmployee(input: $input) {
      id
      firstName
      lastName
    }
  }
`;

function NewEmployeeForm() {
  const [addEmployee] = useMutation(ADD_EMPLOYEE);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();

    await addEmployee({
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    });

    setFirstName('');
    setLastName('');
  };

  return  (
    <Box 
      as="form" 
      onSubmit={handleSubmit} 
      mt={4}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      noValidate
    >
      <FormControl id="firstName" isRequired>
        <FormLabel fontSize="lg">First Name</FormLabel>
        <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </FormControl>
      <FormControl id="lastName" isRequired mt={4} >
        <FormLabel fontSize="lg">Last Name</FormLabel>
        <Input value={lastName} onChange={e => setLastName(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Add Employee
      </Button>
    </Box>
  );
}

export default NewEmployeeForm;