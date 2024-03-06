import { Button,
      TextField,
      Box,
      Typography, 
      Card,
      Link } from '@mui/material';
import { colors } from '../constants/Colors';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()

	return (
    <Card
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.background,
        justifySelf: "Center"
      }}
    >
      <Card sx ={{
          maxWidth:"50%",
          boxShadow:0,
          backgroundColor: colors.transparent
        }}
      >
        <Box 
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }}
          src="https://cdn.discordapp.com/attachments/1037541208731422772/1214743250238185522/logo.png?ex=65fa38cf&is=65e7c3cf&hm=ef4eea72677059c6755e73e5563842f10eeb3d7a6dbff2a86b2dde2c6bb5bbdb&"
        />
      </Card>
      <Card
        sx={{
          padding: 6,
          boxShadow: 0,
          backgroundColor: colors.transparent
        }}
      >
        <Typography 
          component="h1" 
          variant="h5"
          fontWeight="light"
          fontSize={24}
          color={colors.primary}
        >
          Iniciar sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="correo"
            label="Correo Electrónico"
            placeholder="ejemplo@correo.com"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            type="password"
            id="password"
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={()=>{
              navigate("/")
            }}
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
        <Box
          width="100%"
        >
          <Link
            href="/recover"
            fontWeight="semibold"
            fontSize={16}
            color={colors.primary}
            underline="hover"
          >
            Olvidé mi contraseña
          </Link>
        </Box>
        <Box
          width="100%"
          flexDirection="row"
          sx = {{
            justifyItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Link
            href="/register"
            fontWeight="semibold"
            fontSize={16}
            color={colors.primary}
            noWrap
            underline="hover"
            sx = {{
              display: {sm: "block", md: "flex"}
            }}
          >
              ¿Eres nuevo?
            <Typography
              fontWeight="bold"
              pl={1}
            >
              Regístrate
            </Typography>
          </Link>
        </Box>
      </Card>
    </Card>
	);
}