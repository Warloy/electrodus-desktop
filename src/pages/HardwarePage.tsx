import { Typography, 
  Card } from '@mui/material';
import { colors } from '../constants/Colors';

export default function HardwarePage() {

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
        Módulo de Equipos
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
    </Card>
  );
}