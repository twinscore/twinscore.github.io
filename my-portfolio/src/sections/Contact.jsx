import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Contact() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <MotionBox
      as="section"
      id="contact"
      py={20}
      h="100vh"
      bg={bg}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box maxW="4xl" mx="auto" textAlign="center" px={4}>
        <Heading
          size="xl"
          mb={6}
          color="blue.500"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          My Contact
        </Heading>

        <Text fontSize="lg" mb={8} color={textColor}>
          Feel free to contact me via the following platforms:
        </Text>

        <VStack spacing={5}>
          <HStack spacing={3}>
            <Icon as={FiMail} boxSize={6} color="blue.400" />
            <Link
              href="mailto:abrahamignatius9@gmail.com"
              fontSize="lg"
              fontWeight="medium"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              abrahamignatius9@gmail.com
            </Link>
          </HStack>

          <HStack spacing={3}>
            <Icon as={FaGithub} boxSize={6} color="gray.600" />
            <Link
              href="https://github.com/twinscore"
              fontSize="lg"
              fontWeight="medium"
              color="gray.700"
              isExternal
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              github.com/twinscore
            </Link>
          </HStack>

          <HStack spacing={3}>
            <Icon as={FaLinkedin} boxSize={6} color="blue.600" />
            <Link
              href="https://www.linkedin.com/in/igna-abr"
              fontSize="lg"
              fontWeight="medium"
              color="gray.700"
              isExternal
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              linkedin.com/in/igna-abr
            </Link>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
}
