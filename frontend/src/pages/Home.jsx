import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { Container, Grid, Box, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#0d0d0d', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #ff214f, #ff6b6b)',
                color: '#fff',
                borderRadius: '16px',
                p: 4,
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transition: '0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
              onClick={() => navigate('/Main')}
            >
              <Typography variant="h1" sx={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600
  }}>NEXTGEN AI</Typography>
              <Typography variant="body2">
                Build smarter resumes and check your ATS compatibility — all in one powerful, future-ready platform.
              </Typography>
            </Box>
          </Grid>
          </Grid>
      </Container>
    </Box>
  );
}
