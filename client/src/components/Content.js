import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Content = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
        marginLeft: '240px', // Sidebar genişliğine göre
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default Content;
