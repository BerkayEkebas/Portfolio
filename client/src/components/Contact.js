import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        Fusce eget nibh nec justo interdum condimentum. Morbi justo ex, efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Container>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
