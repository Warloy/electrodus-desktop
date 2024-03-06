
import { useNavigate } from 'react-router-dom';
import { Typography, 
  Card, 
  Button} from '@mui/material';
import { colors } from '../constants/Colors';

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        boxShadow: 0,
        padding: 6,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
      }}
    >
      <Typography 
        noWrap
        component="h1" 
        variant="h5"
        fontWeight="semibold"
        fontSize={24}
        color={colors.primary}
      >
        Dashboard
      </Typography>
      <Typography 
        noWrap
        component="h1" 
        variant="h5"
        fontWeight="light"
        fontSize={18}
        color={colors.primary}
      >
        En construcción
      </Typography>
      <Button
        fullWidth
        variant="contained"
        onClick={() => { navigate("/login") }}
        sx = {{ my: 2 }}
      >
        Ir al inicio de sesión
      </Button>
    </Card>
  );
}