import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Box>
            <BrowserRouter basename="/website-resume">
                <Box>
                    <NavBar />
                </Box>
                <Container>
                    <Routes>
                        <Route path="/" element={<Navigate to="/portfolio" />} />
                        <Route path="/portfolio" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </Box>
    );
}

export default App;