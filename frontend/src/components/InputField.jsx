import { TextField, Box } from '@mui/material';

export default function InputField({ label, placeholder, multiline = false, rows = 1 }) {
  return (
    <Box my={2}>
      <TextField
        label={label}
        placeholder={placeholder}
        fullWidth
        variant="outlined"
        multiline={multiline}
        rows={rows}
      />
    </Box>
  );
}
