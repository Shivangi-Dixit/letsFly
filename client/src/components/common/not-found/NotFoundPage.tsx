import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styles } from './NotFoundPage.styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" color="primary" sx={styles.title}>
        404
      </Typography>
      <Typography variant="h3" color="text.primary" sx={styles.subtitle}>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={styles.description}>
        The route you're looking for doesn't exist on LetsFly.
      </Typography>
      <Button 
        variant="contained" 
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={styles.button}
      >
        Back to LetsFly Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
