import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => {
    return (
        <Grid2 container spacing={10} justifyContent="center">
            {projectConfig.map((item, index) => (
                <Grid2 item key={index} >
                    <CardItem item={item} />
                </Grid2>
            ))}
        </Grid2>
    );
}

export default Projects;
