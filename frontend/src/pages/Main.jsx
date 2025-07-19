import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Main() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff214f, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NEXTGEN RESUME
        </Typography>

        <Typography align="center" sx={{ color: '#ccc', mb: 6 }}>
          Build your resume. Beat the bots. Get hired.
        </Typography>

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
              onClick={() => navigate('/builder')}
            >
              <WorkIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Resume Builder</Typography>
              <Typography variant="body2">
                Create modern, clean, and ATS-friendly resumes easily.
              </Typography>
            </Box>
          </Grid>

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
              onClick={() => navigate('/ats-checker')}
            >
              <BarChartIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">ATS Checker</Typography>
              <Typography variant="body2">
                Analyze your resume and get real-time ATS feedback.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
