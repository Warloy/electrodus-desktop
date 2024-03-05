import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
/* Components */

/* Context hooks */
import { AuthProvider } from "./context/AuthContext";
import useAuthContext from "./hooks/useAuthContext";
/* Assets */
import './App.css'
import { Layout } from './components/Layout';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Layout>
            <CssBaseline/>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login/>}/>
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
    </AuthProvider>
  );
}

export default App
