import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CertIcons from './CertIcons';
import Tags from '../Tags/Tags';

const CertItem = ({ item, id, tags }) => {
    return (
        <Card sx={{ margin: 2, width: 650}}>
            <CardMedia
                component="div"
                sx={{
                    backgroundImage: `url(${item.image})`,
                    height: 450,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                }}
                alt={item.title}
            />
            <CardContent>
                <Box>
                    <Typography variant="h6" component="div" textAlign="center">
                        <strong>{item.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" textAlign="center">
                        {item.description}
                    </Typography>
                </Box>
                <CertIcons item={item} />
                <Tags id={id} tags={tags} />
            </CardContent>
        </Card>
    );
}

export default CertItem;