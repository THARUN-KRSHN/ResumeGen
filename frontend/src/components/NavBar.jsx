import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NextGen Resume
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/builder">Builder</Button>
          <Button color="inherit" component={Link} to="/ats-checker">ATS Checker</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
