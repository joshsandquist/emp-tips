import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_EMPLOYEE_BY_ID = gql`
  query GetEmployeeById($id: ID!) {
    getEmployee(id: $id) {
      id
      firstName
      lastName
      reports {
        tipAmount
        tipDate
      }
    }
  }
`;

function EmployeeDetail({ id }) {
  const { loading, error, data } = useQuery(GET_EMPLOYEE_BY_ID, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { firstName, lastName, reports } = data.getEmployee;

  const totalTips = reports.reduce((acc, report) => acc + report.tipAmount, 0);

  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <h2>Total Tips: {totalTips}</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>Tip: {report.tipAmount}, Date: {new Date(report.tipDate).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDetail;