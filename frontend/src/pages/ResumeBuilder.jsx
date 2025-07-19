// ResumeBuilder.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    experience: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, selectedFile);
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
          Resume Builder
        </Typography>

        <Typography align="center" sx={{ color: '#aaa', mb: 4 }}>
          Fill in your details or upload a resume file to get started.
        </Typography>

        <Paper elevation={4} sx={{ p: 4, background: '#1a1a1a', borderRadius: '10px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: '#fff' }}>Job Role</InputLabel>
                  <Select
                    name="jobRole"
                    value={formData.jobRole}
                    label="Job Role"
                    onChange={handleChange}
                    sx={{ color: 'white' }}
                  >
                    <MenuItem value="frontend">Frontend Developer</MenuItem>
                    <MenuItem value="backend">Backend Developer</MenuItem>
                    <MenuItem value="data">Data Scientist</MenuItem>
                    <MenuItem value="design">UI/UX Designer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Experience Summary"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFileIcon />}
                  sx={{ background: 'linear-gradient(135deg, #ff214f, #ff6b6b)' }}
                >
                  Upload Resume
                  <input hidden accept=".pdf,.doc,.docx" type="file" onChange={handleFileChange} />
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2, background: 'linear-gradient(135deg, #ff214f, #ff6b6b)' }}
                >
                  Generate Resume
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResumeBuilder;
