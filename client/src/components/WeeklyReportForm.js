import { useQuery, useMutation, gql } from '@apollo/client';
import { VStack, Heading, Box, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const GET_ACTIVE_EMPLOYEES = gql`
  query GetActiveEmployees {
    getActiveEmployees {
      id
      firstName
      lastName
      hoursWorked
    }
  }
`;

const UPDATE_HOURS = gql`
  mutation UpdateEmployeeHours($input: UpdateHoursInput!) {
    updateEmployeeHours(input: $input) {
      hoursWorked
    }
  }
`;

const CREATE_REPORT = gql`
  mutation CreateReport($input: ReportInput!) {
    createReport(input: $input) {
      hourlyRate
      tipDate
    }
  }
`;

function WeeklyReportForm() {
  const { loading, error, data } = useQuery(GET_ACTIVE_EMPLOYEES);
  const [updateEmployeeHours] = useMutation(UPDATE_HOURS);
  const [createReport] = useMutation(CREATE_REPORT);
  const [totalTips, setTotalTips] = useState(0);
  const [employeeHours, setEmployeeHours] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleHoursChange = (id, hours) => {
    setEmployeeHours(prev => ({ ...prev, [id]: hours }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');
    setSuccess(false);

    if (totalTips === 0 || Object.keys(employeeHours).length !== data.getActiveEmployees.length) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    for (const id in employeeHours) {
      await updateEmployeeHours({
        variables: {
          input: {
            id,
            hoursWorked: parseFloat(employeeHours[id])
          }
        }
      });
    }

    await createReport({
      variables: {
        input: {
          totalTips: parseFloat(totalTips)
        }
      }
    });

    setSuccess(true);
  };

  const resetForm = () => {
    setEmployeeHours({});
    setTotalTips(0);
    setErrorMessage('');
    setSuccess(false);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <VStack spacing={4} p={8} align="start">
      <Heading as="h2" size="lg">Weekly Report</Heading>
  
      {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      
      {success ? (
        <Box>
          <Text color="green.500" align="center">
            Report successfully generated! Navigate to the reports page to view the report.
          </Text>
          <Button onClick={resetForm} colorScheme="teal" m={2}>
            Create another report
          </Button>
        </Box>
      ) : (
        <VStack as="form" onSubmit={handleSubmit} spacing={4} align="start">
          {data.getActiveEmployees.map(employee => (
            <Box key={employee.id}>
              <Text fontSize="lg">{employee.firstName} {employee.lastName}</Text>
              <Input 
                type="number"
                step="0.01"
                placeholder="Hours Worked"
                onChange={e => handleHoursChange(employee.id, e.target.value)}
              />
            </Box>
          ))}
          <Box>
            <Text fontSize="lg">Total Tips:</Text>
            <Input 
              type="number" 
              value={totalTips} 
              onChange={e => setTotalTips(e.target.value)} 
            />
          </Box>
          <Button type="submit" colorScheme="blue">Generate Report</Button>
        </VStack>
      )}
    </VStack>
  );
}

export default WeeklyReportForm;