import React from 'react';
import WeeklyReportForm from '../components/WeeklyReportForm';
import { VStack } from '@chakra-ui/react';

function Reports() {
  return (
    <VStack>
      <WeeklyReportForm/>
    </VStack>    
  );
}

export default Reports;

//Need to make sure that deleted employees are not removed from the system causing previous report errors.