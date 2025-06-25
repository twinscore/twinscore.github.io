import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Tag,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = [
  "React", "Laravel", "MySQL", "REST API", "Tailwind CSS",
  "Proxmox", "Linux", "Networking"
];

export default function Skills() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const tagColor = useColorModeValue("blue.500", "blue.200");
  const tagBg = useColorModeValue("blue.100", "blue.900");

  return (
    <MotionBox
      as="section"
      id="skills"
      h="100vh"
      bg={bgColor}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="full"
        maxW="4xl"
        mx="auto"
        px={4}
        textAlign="center"
      >
        <Heading
          size="xl"
          mb={8}
          color={useColorModeValue("blue.600", "blue.300")}
        >
          Keahlian Utama
        </Heading>

        <Wrap justify="center" spacing={5}>
          {skills.map((skill) => (
            <WrapItem key={skill}>
              <Tag
                size="lg"
                bg={tagBg}
                color={tagColor}
                px={4}
                py={2}
                fontWeight="semibold"
                borderRadius="full"
                _hover={{ transform: "scale(1.1)", boxShadow: "lg" }}
                transition="all 0.3s ease"
              >
                {skill}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </MotionBox>
  );
}
