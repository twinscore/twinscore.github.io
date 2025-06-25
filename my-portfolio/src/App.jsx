import { ChakraProvider, Box } from '@chakra-ui/react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box
        as="main"
        h="100dvh"
        overflowY="auto"
        scrollSnapType="y mandatory"
        sx={{
          '& > section': {
            scrollSnapAlign: 'start',
            minHeight: '100dvh',
          },
        }}
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
