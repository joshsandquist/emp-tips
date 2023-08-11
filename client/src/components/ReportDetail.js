import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { VStack, Text, Heading, Button, Box, Divider, Center, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const GET_REPORT_BY_ID = gql`
  query GetReport($id: ID!) {
    getReport(id: $id) {
      totalTips
      hourlyRate
      tipDate
      employeeTips {
        employee {
          firstName
          lastName
        }
        tipAmount
        hoursWorked
      }
    }
  }
`;

function ReportDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REPORT_BY_ID, {
    variables: { id }
  });

  if (loading) return <Center fontSize="xl">Loading...</Center>;
  if (error) return <Center color="red.500" fontSize="xl">Error: {error.message}</Center>;

  const report = data.getReport;

  return (
    <Center>
      <VStack spacing={6} align="center" width="full" maxWidth="600px" mt={8}>
        <Flex justifyContent="space-around" alignItems="center" width="full">
          <Heading as="h2" size="lg">{new Date(Number(report.tipDate)).toLocaleDateString()}</Heading>
          <Button as={RouterLink} to="/pastreports" colorScheme="blue">Back To Reports</Button>
        </Flex>

        <Box p={4} width="full" borderWidth="2px" borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" mb={4} textAlign="center">Tips</Heading>
          <Divider mb={4}/>
          <VStack spacing={2} align="center">
            <Text fontSize="xl">Total Tips: ${report.totalTips}</Text>
            <Text fontSize="xl">Hourly Rate: ${report.hourlyRate.toFixed(2)}</Text>
          </VStack>
        </Box>
        
        <Box p={4} width="full" borderWidth="2px" borderRadius="md" mt={4} boxShadow="md">
          <Heading as="h3" size="md" mb={4} textAlign="center">Employees</Heading>
          <Divider mb={4}/>
          {report.employeeTips.map((employeeTip, idx) => (
        <Box key={idx} textAlign="center" mb={2}>
            <Text fontSize="lg">
            {employeeTip.employee.firstName} {employeeTip.employee.lastName}
            </Text>
            <Text fontSize="md">Tips: ${employeeTip.tipAmount.toFixed(2)}</Text>
            <Text fontSize="md">Hours Worked: {employeeTip.hoursWorked}</Text>
        </Box>
))}
        </Box>
      </VStack>
    </Center>
  );
}

export default ReportDetail;