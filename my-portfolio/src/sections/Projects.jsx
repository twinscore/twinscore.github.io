import { motion } from "framer-motion";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Inventory System",
    description: "Laravel + MySQL untuk pengelolaan stok barang.",
  },
  {
    title: "Company Website",
    description: "React + SEO Menggunakan React Helmet, deploy ke Cpanel.",
  },
  {
    title: "Network Monitor",
    description: "Dashboard pemantauan jaringan berbasis Laravel + SNMP serta BOT yang akan langsung mengirim informasi Via Discord.",
  },
  {
    title: "Ticketing",
    description: "Laravel + MySQL untuk penjualan Ticket.",
  },
  {
    title: "Payroll ",
    description: "Web Apps yang digunakan untuk pencatatan serta distribusi slip gaji.",
  },
  {
    title: "HRIS ",
    description: "Web Apps yang ditujukan untuk pengelolaan SDM.",
  },
  {
    title: "Repository ",
    description: "Repository berbasis linux yang gunakan untuk instalasi, backup dan distribusi terkait Source Code.",
  },
  {
    title: "Net Conf ",
    description: "QoS, Firewall, Proxy, DNS, Web Server.",
  },
];

export default function Projects() {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <MotionBox
      as="section"
      id="projects"
      py={20}
      bg="gray.100"
      minH="100vh"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box maxW="6xl" mx="auto" px={4}>
        <Heading size="lg" mb={8} textAlign="center" color="blue.600">
          Project
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {projects.map((proj, idx) => (
            <Box
              key={idx}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              shadow="md"
              transition="all 0.3s"
              _hover={{ shadow: "xl" }}
            >
              <Heading size="md" mb={2} color="blue.500">
                {proj.title}
              </Heading>
              <Text color="gray.600">{proj.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MotionBox>
  );
}
