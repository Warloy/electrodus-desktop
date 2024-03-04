import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
/* Components */

/* Context hooks */
import { AuthProvider } from "./context/AuthContext";
import useAuthContext from "./hooks/useAuthContext";
/* Assets */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Layout>
            <CssBaseline/>
            <Routes>
              
            </Routes>
          </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App
