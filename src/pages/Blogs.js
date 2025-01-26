import React from 'react';
import { Unstable_Grid2 } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import blogConfig from '../assets/configs/blogConfig';

const Blogs = () => {
    return (
        <Unstable_Grid2 container spacing={6} justifyContent="center">
            {blogConfig.map((item, index) => (
                <Unstable_Grid2 item key={index} xs={12} sm={6} md={4}>
                    <CardItem item={item} />
                </Unstable_Grid2>
            ))}
        </Unstable_Grid2>
    );
}

export default Blogs;
