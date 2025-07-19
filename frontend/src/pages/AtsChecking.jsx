// ATSChecker.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  Grid,
  TextField,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ATSChecker = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [keywords, setKeywords] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCheck = () => {
    console.log('Checking ATS compatibility for', selectedFile, keywords);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#0d0d0d', color: 'white', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff214f, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ATS Resume Checker
        </Typography>

        <Typography align="center" sx={{ color: '#aaa', mb: 4 }}>
          Upload your resume and enter target keywords to check if your resume is ATS-optimized.
        </Typography>

        <Paper elevation={4} sx={{ p: 4, background: '#1a1a1a', borderRadius: '16px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<UploadFileIcon />}
                sx={{ background: 'linear-gradient(135deg, #ff214f, #ff6b6b)' }}
              >
                Upload Resume
                <input hidden accept=".pdf,.doc,.docx" type="file" onChange={handleFileChange} />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Target Keywords / Job Description"
                multiline
                rows={4}
                fullWidth
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleCheck}
                sx={{ background: 'linear-gradient(135deg, #ff214f, #ff6b6b)' }}
              >
                Check ATS Compatibility
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ATSChecker;
