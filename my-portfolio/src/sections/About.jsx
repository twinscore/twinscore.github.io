import { Box, Heading, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <Box id="about" pt="20" px={4} maxW="4xl" mx="auto">
      <Heading mb={4}>About Me</Heading>
      <Text fontSize="lg">
        Saya adalah Fullstack Developer dengan pengalaman di React, Laravel, MySQL, dan networking.
      </Text>
    </Box>
  )
}
