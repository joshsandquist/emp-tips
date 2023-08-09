import React from 'react';
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Reports from './pages/Reports';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';


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
      <ChakraProvider>
        <Router>
          <Flex direction="column" minHeight="100vh">
            <Header />
            <Box as="main" flex="1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/reports" element={<Reports />} />
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