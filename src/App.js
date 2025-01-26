import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Blogs from './Blogs';
import Skills from './Skills';
import Certificates from './Certificates';
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
                        <Route path="*" element={<Navigate to="/portfolio" replace />} />
                    </Routes>
                </Container>
            </Router>
        </Box>
    );
}

export default App;
