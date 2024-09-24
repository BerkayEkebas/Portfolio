import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SkillsIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        height: '100vh',
        position: 'fixed',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" noWrap>
          My Portfolio
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/about-me">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={Link} to="/skills">
          <ListItemIcon>
            <SkillsIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component={Link} to="/my-works">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="My Work" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Me" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="caption" color="textSecondary">
          © 2024 My Portfolio
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
