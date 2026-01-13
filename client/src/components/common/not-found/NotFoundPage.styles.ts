import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    p: 4,
    gap: 2
  },
  title: {
    fontSize: { xs: '4rem', md: '6rem' },
    fontWeight: 700,
    lineHeight: 1
  },
  subtitle: {
    fontSize: { xs: '1.5rem', md: '2.5rem' },
    fontWeight: 600,
    mb: 2
  },
  description: {
    maxWidth: 500,
    mb: 4,
    lineHeight: 1.6
  },
  button: {
    px: 4,
    py: 1.5,
    fontSize: '1.1rem',
    borderRadius: 2
  }
};
