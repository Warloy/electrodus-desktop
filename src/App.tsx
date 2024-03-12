import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
/* Components */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material";
import { Layout } from './components/Layout';
/* Context hooks */
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store"
/* Pages */
import Login from './pages/Login';
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RequestsPage from "./pages/RequestsPage";
import TicketsPage from "./pages/TicketsPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import HardwarePage from "./pages/HardwarePage";
import PersonnelPage from "./pages/PersonnelPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
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
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <Router>
              <Layout>
                <CssBaseline/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/recover" element={<ForgotPasswordPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/solicitudes" element={<RequestsPage/>}/>
                    <Route path="/tickets" element={<TicketsPage/>}/>
                    <Route path="/servicios" element={<ServicesPage/>}/>
                    <Route path="/equipos" element={<HardwarePage/>}/>
                    <Route path="/personal" element={<PersonnelPage/>}/>
                    <Route path="/configuracion" element={<SettingsPage/>}/>
                    <Route path="/perfil" element={<ProfilePage/>}/>
                    <Route path="*" element={<Navigate to={"/"}/>}/>
                </Routes>
              </Layout>
          </Router>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App
