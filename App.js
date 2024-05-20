import { Box, Container } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
     {/* <Box width={['400px','700px','1600px']} m='auto'> */}
     {/* <Container maxW={'container.xl'}> */}
     <Navbar/>
        <Outlet/>
        <Footer/>
     {/* </Container> */}

     {/* </Box> */}
    </>
  );
}

export default App;
