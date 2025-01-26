// NavBar.js
import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';
import BackgroundImage from '../../assets/images/header.png';

const NavBar = () => {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Center the NavBar
        width: '100%',
        padding: '0 16px', // Optional padding for mobile
    };

    const navBarStyles = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '150px',
        maxWidth: '1200px', // Adjust the max-width of the NavBar
        borderRadius: '8px', // Optional: Add rounded corners
    };

    const toolbarStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    };

    return (
        <>
            <Box style={containerStyles}>
                <AppBar position="static" style={navBarStyles}>
                    <Toolbar style={toolbarStyles}>
                        <NavBarItems />
                    </Toolbar>
                </AppBar>
            </Box>
            <Box />
        </>
    );
};

export default NavBar;
