import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const AboutMe = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Box
        component={Paper}
        elevation={3}
        sx={{ p: 4, borderRadius: 2, bgcolor: 'background.default' }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          This is a brief introduction about myself. I am a web designer with a passion for creating visually stunning and user-friendly websites. I have a deep understanding of web technologies and design principles, and I am always eager to learn and adapt to new challenges.
        </Typography>
        <Typography variant="body1" paragraph>
          My experience includes working on various web projects, from designing simple landing pages to developing complex web applications. I take pride in delivering high-quality work that meets the needs and expectations of my clients.
        </Typography>
        <Typography variant="body1" paragraph>
          Outside of work, I enjoy exploring new technologies, working on personal projects, and staying updated with the latest trends in web design and development.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;
