import React from 'react';
import { Unstable_Grid2 } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => {
    return (
        <Unstable_Grid2 container spacing={10} justifyContent="center">
            {projectConfig.map((item, index) => (
                <Unstable_Grid2 item key={index} >
                    <CardItem item={item} />
                </Unstable_Grid2>
            ))}
        </Unstable_Grid2>
    );
}

export default Projects;
