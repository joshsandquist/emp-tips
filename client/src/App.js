import React from 'react';
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Reports from './pages/Reports';

function App() {
  return (
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
  );
}

export default App;