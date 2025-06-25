import { Box, Text, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MotionBox = motion(Box);

const name = "ABRAHAM";
const neonMagenta = `
  0 0 5px #00FFFF,
  0 0 10px #00FFFF,
  0 0 20px #00FFFF,
  0 0 40px #00FFFF,
  0 0 80px #00FFFF
`;

export default function Hero() {
  return (
    <MotionBox
      as="section"
      id="hero"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
      px={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Teks "Hi, I'm" */}
      <Text fontSize="5xl" fontWeight="medium" color="blue.400">
        Hi, I'm{" "}
        {name.split("").map((char, idx) => (
          <MotionText
            key={idx}
            as="span"
            fontWeight="bold"
            color="#00FFFF"
            initial={{ opacity: 0.1, textShadow: "none" }}
            animate={{
              opacity: 1,
              textShadow: neonMagenta,
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.2,
              onComplete: () => {}, // optional for debugging
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileInView={{
              textShadow: neonMagenta,
            }}
            // Breathing effect:
            style={{ display: "inline-block" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              animate={{
                textShadow: [
                  neonMagenta,
                  "0 0 10px #3B82F6, 0 0 15px #3B82F6, 0 0 30px #3B82F6",
                  neonMagenta,
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.2 * idx + 1, // dimulai setelah animasi masuk
              }}
            >
              {char}
            </motion.span>
          </MotionText>
        ))}
      </Text>

      {/* Deskripsi */}
      <Text mt={4} fontSize="lg" textAlign="center" maxW="lg" color="gray.700">
        Fullstack Developer with React, Laravel, MySQL, Networking and Server Administrator.
      </Text>

      {/* Tombol Aksi */}
      <Stack direction="row" spacing={4} mt={6}>
        <Button colorScheme="cyan" as="a" href="#projects">
          Lihat Proyek
        </Button>
        <Button variant="outline" colorScheme="cyan" as="a" href="#contact">
          Kontak
        </Button>
      </Stack>
    </MotionBox>
  );
}
