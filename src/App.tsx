import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Components */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material";
import { Layout } from './components/Layout';
/* Pages */
import Login from './pages/Login';
/* Context hooks */
import { AuthProvider } from "./context/AuthContext";
/* import useAuthContext from "./hooks/useAuthContext"; */
/* Assets */
import { colors } from "./constants/Colors";
import './App.css'

const mainTheme = createTheme({
  palette:{
    background:{
      default: colors.background
    },
    primary:{
      main: colors.primary
    },
    secondary:{
      main: colors.tertiary
    }
  }
})

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={mainTheme}>
        <Router>
            <Layout>
              <CssBaseline/>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Login/>}/>
                <Route path="/recover" element={<Login/>}/>
                <Route path="/solicitudes" element={<Login/>}/>
                <Route path="/tickets" element={<Login/>}/>
                <Route path="/servicios" element={<Login/>}/>
                <Route path="/equipos" element={<Login/>}/>
                <Route path="/personal" element={<Login/>}/>
                <Route path="/configuracion" element={<Login/>}/>
                <Route path="/perfil" element={<Login/>}/>
              </Routes>
            </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App
