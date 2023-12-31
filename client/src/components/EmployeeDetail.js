import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_EMPLOYEE = gql`
query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    firstName
    lastName
    reports {
      employeeTips {
        tipAmount
      }
      tipDate
    }
  }
}`

function EmployeeDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getEmployee) return <p>No Employee Data</p>;

  const { firstName, lastName, reports } = data.getEmployee;


  const totalTips = reports 
    ? reports.reduce((acc, report) => acc + report.tipAmount, 0)
    : 0;

  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <h2>Total Tips: {totalTips}</h2>
      <ul>
        {reports && reports.map((report, index) => (
          <li key={index}>Tip: {report.tipAmount}, Date: {new Date(report.tipDate).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDetail;