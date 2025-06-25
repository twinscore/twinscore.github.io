import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="fixed" w="100%" bg="whiteAlpha.900" boxShadow="md" zIndex={50}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="6xl" mx="auto" px={4}>
        <Text fontWeight="bold" fontSize="xl" color="blue.600">
          Ignatius.dev
        </Text>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <ChakraLink
              key={link.label}
              href={link.href}
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "blue.500" }}
            >
              {link.label}
            </ChakraLink>
          ))}
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack px={4} spacing={4}>
            {Links.map((link) => (
              <ChakraLink key={link.label} href={link.href} fontWeight="medium" color="gray.700">
                {link.label}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
