import React from 'react';
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Reports from './pages/Reports';
import PastReports from './pages/PastReports';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import {  extendTheme } from "@chakra-ui/react";
import ReportDetail from './components/ReportDetail';
import EmployeeDetail from './components/EmployeeDetail';
const theme = extendTheme({
  fonts: {
    body: "Futura, sans-serif",
    heading: "Futura, sans-serif"
  }
});



const link = new HttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Flex direction="column" minHeight="100vh">
            <Header />
            <Box as="main" flex="1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/pastreports"
                element={<PastReports />} />
                <Route path="/employee/:id" render={(props) => <EmployeeDetail id={props.match.params.id} />} />
                <Route path="/reportdetail/:id"
                element={<ReportDetail />} />
              </Routes>
            </Box>
            <Footer />
          </Flex>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;