import { useQuery, gql } from '@apollo/client';
import { VStack, Text, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const GET_ALL_REPORTS = gql`
  query GetAllReports {
    getReports {
      id
      tipDate
    }
  }
`;

function PastReports() {
  const { loading, error, data } = useQuery(GET_ALL_REPORTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <VStack spacing={4} align="start">
      <Heading as="h2" size="lg"  pt={8}>Past Reports</Heading>
      {data.getReports.map(report => {
        const displayDate = new Date(Number(report.tipDate)).toLocaleDateString();
        return (
          <Link as={RouterLink} key={report.id} to={`/reportdetail/${report.id}`}>
            {displayDate}
          </Link>
        );
      })}
    </VStack>
  );
}

export default PastReports;