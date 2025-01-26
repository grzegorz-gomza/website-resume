import React from 'react';
import { Container, Unstable_Grid2, Box, Typography } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import homeConfig from '../../assets/configs/homeConfig';
import SkillsItems from '../Skills/SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import GG from '../../assets/images/GG.jpg';

const Home = () => {
    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Unstable_Grid2 container justifyContent="center" alignItems="center" className="home-header">
                    <Unstable_Grid2 item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ color: '#f5f5f5', fontSize: '3em' }}>
                            {homeConfig.greeting}
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={GG} alt="GG" height='350px'/>
                        </Box>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <DynamicTyping titles={homeConfig.titles} />
                        </Box>
                        <Box sx={{  maxWidth: '960px', mx: 'auto', mt: 4 }}>
                            <About about={homeConfig.about} />
                        </Box>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </Container>

            <section id="skills">
            <Box sx={{ maxWidth: '960px', mx: 'auto', textAlign: 'center', py: 4, backgroundColor:'rgb(237, 240, 240)', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                    <strong>Main Skills & Tools</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.mainSkills} />
                    </Box>

                </Box>
                
            <Box sx={{ maxWidth: '960px', mx: 'auto', textAlign: 'center', py: 4, backgroundColor:'rgb(237, 240, 240)', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                    <strong>Complementary Skills & Tools</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.complementarySkills} />
                    </Box>
                </Box>
                
            <Box sx={{ maxWidth: '960px', mx: 'auto', textAlign: 'center', py: 4, backgroundColor:'rgb(237, 240, 240)', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
            <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                <strong>Basic knowledge</strong>
            </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <SkillsItems config={skillsConfig.basicSkills} />
                    </Box>
                </Box>

            <Box sx={{ maxWidth: '960px', mx: 'auto', textAlign: 'center', py: 4, backgroundColor:'rgb(237, 240, 240)', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
            <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                <strong>Soft skills and transferable skills</strong>
            </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <SkillsItems config={skillsConfig.softSkills} />
                </Box>
                </Box>
                
        </section>
        </section>
    );
}

export default Home;
