import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    p: 3,
    width: '100%',
    backgroundColor: 'background.default',
  },
  spinner: {
    color: 'primary.main'
  }
};
