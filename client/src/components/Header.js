import { Box, Heading, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Flex 
      as="header" 
      p={6} 
      bg="blue.700" 
      color="white" 
      alignItems={{ base: "center"}}
      justifyContent={{ base: "center", md: "space-between" }} 
      flexDirection={{ base: "column", md: "row" }}
    >
      <Heading as="h1" size="xl" p={2} fontWeight="bold">Employee Tip Calculator</Heading>
      <Box as="nav" display="flex" gap={8} p={2} >
        <ChakraLink 
          as={NavLink} 
          to="/" 
          borderBottom="2px solid white" 
          fontSize="lg" 
          _hover={{ borderBottomColor: "transparent" }} 
          transition="border-bottom-color 0.3s ease"
        >
          Home
        </ChakraLink>
        <ChakraLink 
          as={NavLink} 
          to="/reports" 
          borderBottom="2px solid white" 
          fontSize="lg" 
          _hover={{ borderBottomColor: "transparent" }} 
          transition="border-bottom-color 0.3s ease"
        >
         New Report
        </ChakraLink>
        <ChakraLink 
          as={NavLink} 
          to="/pastreports" 
          borderBottom="2px solid white" 
          fontSize="lg" 
          _hover={{ borderBottomColor: "transparent" }} 
          transition="border-bottom-color 0.3s ease"
        >
         Past Reports
        </ChakraLink>
        <ChakraLink 
          as={NavLink} 
          to="/employees" 
          borderBottom="2px solid white" 
          fontSize="lg" 
          _hover={{ borderBottomColor: "transparent" }} 
          transition="border-bottom-color 0.3s ease"
        >
          Employees
        </ChakraLink>
      </Box>
    </Flex>
  );
}

export default Header;