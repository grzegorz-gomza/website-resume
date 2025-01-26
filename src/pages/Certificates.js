import React from 'react';
import { Grid } from '@mui/material';
import CertItem from '../components/Cards/CertItem'; 
import certConfig from '../assets/configs/certConfig';

const Certificates = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {certConfig.map((item, index) => (
                <Grid item key={index}>
                    <CertItem item={item} id={index} tags={item.tags} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Certificates;