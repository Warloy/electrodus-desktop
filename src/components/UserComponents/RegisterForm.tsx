import { Button,
  TextField,
  Box,
  Typography, 
  Card, 
  Autocomplete} from '@mui/material';
import { colors } from '../../constants/Colors';
import { useNavigate } from 'react-router-dom';
import { statesOfVenezuela } from '../../constants/StatesOfVenezuela';

export default function RegisterForm() {
  const navigate = useNavigate()

	return (
    <Card
      sx={{
        boxShadow: 0,
        backgroundColor: colors.transparent,
        maxHeight:"100vh",
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
        Registrarse
      </Typography>
      <Box 
        component="form" 
        noValidate 
        sx={{ mt: 1,
          px: 4,
          maxWidth: "75%",
          maxHeight: "60vh",
          overflow: "auto",
          flexGrow: 1
        }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="correo"
          label="Correo electrónico"
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
        <TextField
          margin="normal"
          fullWidth
          name="name"
          label="Nombre"
          placeholder="Ingrese el nombre"
          id="name"
          autoComplete="off"
        />
        <TextField
          margin="normal"
          fullWidth
          name="surname"
          label="Apellido"
          placeholder="Ingrese el apellido"
          id="surname"
          autoComplete="off"
        />
        <TextField
          margin="normal"
          fullWidth
          name="identifier"
          label="Cédula"
          placeholder="Ingrese la cédula (Ej: 12345678)"
          id="identifier"
          autoComplete="off"
        />
        <Autocomplete
          fullWidth
          disablePortal
          id="ComboBox"
          options={["Masculino","Femenino","Otro"]}
          sx={{ my: 2 }}
          renderInput={(params) => <TextField {...params} label="Sexo" />}
        />
        <TextField
          margin="normal"
          fullWidth
          name="phone"
          label="Teléfono"
          placeholder="Ingrese el número de teléfono (Ej: 04261234567)"
          id="phone"
          autoComplete="off"
        />
        <Autocomplete
          fullWidth
          disablePortal
          id="ComboBox"
          options={statesOfVenezuela}
          sx={{ my: 2 }}
          renderInput={(params) => <TextField {...params} label="Estado" />}
        />
        <TextField
          margin="normal"
          fullWidth
          name="city"
          label="Ciudad"
          placeholder="Ingrese la ciudad"
          id="city"
          autoComplete="off"
        />
      </Box>
      <Button
          type="submit"
          variant="contained"
          onClick={()=>{
            navigate("/")
          }}
          sx={{ mt: 3, width:"75%" }}
        >
          Confirmar registro
      </Button>
      <Button
        variant="contained"
        onClick={()=>{
          navigate("/login")
        }}
        sx={{ mt: 2, width:"75%" }}
      >
        Volver
      </Button>
    </Card>
  );
}