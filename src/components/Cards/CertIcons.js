import React from 'react';
import { Box, IconButton } from '@mui/material';

const CertIcons = (props) => {
    return (
        <Box>
            {props.item && props.item.links ? props.item.links.map((link) => (
                <IconButton
                    key={props.item.id + link.name}
                    title={link.name}
                    href={link.url}
                    target={props.item.target}
                    rel="noopener noreferrer"
                    color="primary"
                >
                    {link.icon}
                </IconButton>
            )) : null}
        </Box>
    );
}

export default CertIcons;