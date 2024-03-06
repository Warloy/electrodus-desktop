import { Box,
  Card } from '@mui/material';
import { colors } from '../constants/Colors';
import RegisterForm from '../components/UserComponents/RegisterForm';

export default function RegisterPage() {

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
      <RegisterForm/>
    </Card>
  );
}