import { Button,
      TextField,
      Box,
      Typography } from '@mui/material';

export default function Login() {

	return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Iniciar sesión
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="correo"
          label="Correo Electrónico"
          name="email"
          autoComplete="off"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="off"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
      </Box>
    </Box>
	);
}