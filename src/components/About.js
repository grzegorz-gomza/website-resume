import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
      <Box sx={{ maxWidth: '960px', mx: 'auto', textAlign: 'center', backgroundColor:'rgb(237, 240, 240)', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
        <Card>
          <CardContent sx={{ backgroundColor:'rgb(237, 240, 240)'}}>
            <Typography variant="body1" paragraph>
              {start}
            </Typography>
            <Typography variant="body1">
              {exit}
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
};

export default About;
