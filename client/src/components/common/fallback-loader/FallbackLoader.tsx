import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { styles } from './FallbackLoader.styles';

const FallbackLoader: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={50} thickness={4} sx={styles.spinner} />
    </Box>
  );
};

export default FallbackLoader;
