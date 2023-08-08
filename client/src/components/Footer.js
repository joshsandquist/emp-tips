import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Flex
      as="footer"
      p={6}
      bg="blue.700"
      color="white"
      alignItems={{ base: "center" }}
      justifyContent={{ base: "center"}}
      flexDirection={{ base: "row"}}
    >
      <Text fontSize="xl" p={2} fontWeight="bold">Josh Sandquist © 2023</Text>
      <ChakraLink href="https://github.com/joshsandquist/emp-tips" isExternal>
        <FaGithub size="28px" />
      </ChakraLink>
    </Flex>
  );
}

export default Footer;