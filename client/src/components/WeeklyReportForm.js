import { useQuery, useMutation, gql } from '@apollo/client';
import { VStack, Heading, Box, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

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
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  const [updateEmployeeHours] = useMutation(UPDATE_HOURS);
  const [createReport] = useMutation(CREATE_REPORT);
  const [totalTips, setTotalTips] = useState(0);
  const [employeeHours, setEmployeeHours] = useState({});

  const handleHoursChange = (id, hours) => {
    setEmployeeHours(prev => ({ ...prev, [id]: hours }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
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

    // Still to do: add page for displaying individual or all reports that will be a redirect
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4} align="start">
      <Heading as="h2" size="lg">Weekly Report</Heading>

      {data.getEmployees.map(employee => (
        <Box key={employee.id}>
          <Text>{employee.firstName} {employee.lastName}</Text>
          <Input 
            type="number"
            placeholder="Hours Worked"
            onChange={e => handleHoursChange(employee.id, e.target.value)}
          />
        </Box>
      ))}

      <Box>
        <Text>Total Tips:</Text>
        <Input type="number" value={totalTips} onChange={e => setTotalTips(e.target.value)} />
      </Box>

      <Button type="submit" colorScheme="blue">Generate Report</Button>
    </VStack>
  );
}

export default WeeklyReportForm;