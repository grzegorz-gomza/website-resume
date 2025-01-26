import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Certificates from './pages/Certificates';
import './App.css';

function App() {
    return (
        <Box sx={{  minHeight: '100vh'}}>
            <Router>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <NavBar />
                </Box>
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/portfolio" exact element={<Home />}/>
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </Routes>
                </Container>
            </Router>
        </Box>
    );
}

export default App;
