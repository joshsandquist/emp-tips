import { Box, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box as="header" p={6} bg="blue.500" color="white">
      <Heading as="h1" size="lg" fontWeight="bold">Employee Tip Calculator</Heading>
      <Box as="nav" display="flex" gap={4}>
        <ChakraLink as={Link} to="/" textDecoration="underline" _hover={{textDecoration: "none"}}>Home</ChakraLink>
        <ChakraLink as={Link} to="/reports" textDecoration="underline" _hover={{textDecoration: "none"}}>Reports</ChakraLink>
        <ChakraLink as={Link} to="/employees" textDecoration="underline" _hover={{textDecoration: "none"}}>Employees</ChakraLink>
      </Box>
    </Box>
  );
}

export default Header;