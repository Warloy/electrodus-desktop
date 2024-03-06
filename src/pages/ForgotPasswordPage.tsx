import { useState } from 'react';
import { Button,
  TextField,
  Box,
  Typography, 
  Card } from '@mui/material';
import { colors } from '../constants/Colors';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [solicitado, setSolicitado] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background
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
          backgroundColor: colors.transparent,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography 
          component="h1" 
          variant="h5"
          fontWeight="light"
          fontSize={24}
          color={colors.primary}
        >
          Recuperar contraseña
        </Typography>
        { !solicitado ? 
        <>
          <Box component="form" 
            noValidate 
            sx={{ mt: 1, width:"100%" }}>            
            <Typography
              width={"95%"}
              fontWeight="light"
              fontSize={16}
              color={colors.primary}
              sx = {{ mt: 2 }}
              textAlign="left"
            >
              Ingresa el correo electrónico asociado a tu cuenta. Enviaremos un código de recuperación.
            </Typography>
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
            <Button
              fullWidth
              variant="contained"
              onClick={()=>{
                setSolicitado(true)
              }}
              sx={{ mt: 3 }}
            >
              Solicitar código
            </Button>
          </Box>
          <Button
              fullWidth
              variant="contained"
              onClick={()=>{
                navigate("/login")
              }}
              sx={{ mt: 2 }}
            >
              Volver
          </Button>
        </>
        :
        <>
          { !changePassword ? 
          <>
            <Box component="form" 
              noValidate 
              sx={{ mt: 1, width:"100%" }}>
              <Typography
                width={"95%"}
                fontWeight="light"
                fontSize={16}
                color={colors.primary}
                sx = {{ mt: 2 }}
                textAlign="left"
              >
                Ingresa el código que hemos enviado a tu correo.
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                id="OTP"
                label="Código de recuperación"
                placeholder="######"
                type="password"
                name="OTP"
                autoComplete="off"
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                onClick={()=>{
                  setChangePassword(true)
                }}
                sx={{ mt: 3 }}
              >
                Confirmar código
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={()=>{
                  setSolicitado(false)
                }}
                sx={{ mt: 2 }}
              >
                Cancelar
            </Button>
            </Box>
          </> : 
          <>
            <Box component="form" 
              noValidate 
              sx={{ mt: 1, width:"100%" }}>
              <Typography
                width={"95%"}
                fontWeight="light"
                fontSize={16}
                color={colors.primary}
                sx = {{ mt: 2 }}
                textAlign="left"
              >
                Ingresa la nueva contraseña.
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Contraseña"
                placeholder="Ingrese la contraseña"
                type="password"
                id="password"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                fullWidth
                name="repassword"
                label="Confirmar contraseña"
                placeholder="Ingrese nuevamente la contraseña"
                type="password"
                id="repassword"
                autoComplete="off"
              />
              <Button
                fullWidth
                variant="contained"
                onClick={()=>{
                  navigate("/login")
                }}
                sx={{ mt: 3 }}
              >
                Confirmar
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={()=>{
                  setSolicitado(false)
                  setChangePassword(false)
                }}
                sx={{ mt: 2 }}
              >
                Cancelar
            </Button>
            </Box>
          </> }
          
        </>}
      </Card>
    </Card>
  );
}