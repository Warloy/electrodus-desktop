import { Button,
  TextField,
  Box,
  Typography, 
  Card,
  Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setSession } from "../../services/jwt";
import { login } from "../../features/user/userSlice";
import { TUser } from "../../types/User.Type";
import { colors } from "../../constants/Colors";


const LoginForm = () => {
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading()
  const appDispatch = useAppDispatch();
  const { dispatch } = useAuthContext();
  const status = useAppSelector(state => state.user.user)

  const handleLogin = async () => {
    startLoading();
    console.log("Login button is pressed");

    try {
      const user: TUser = {
        id: "id",
        email: "any@any.com",
        name: 'Gato',
        surname: 'Cuántico',
        username: 'quantacat',
        bio: 'Gato muy cuántico del mar de Quanta.',
        birthday: new Date(1997, 11, 12).toISOString(),
        avatar: null
      }
      dispatch(({
        type: "LOGIN",
        payload: {
          user: {
            id: "id",
            token: "usertoken"
          }
        }
      }));
      await setSession({
        id: "id",
        token: "usertoken"
      })

      appDispatch(login(user))

      navigate("/")
      console.log(`Managed to login ${status}`)
    } catch(err){
      console.log(`Login error: ${err}`)
    } finally {
      stopLoading();
    }
  }

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
            fullWidth
            variant="contained"
            onClick={()=>{
              handleLogin()
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
  )
}

export default LoginForm;