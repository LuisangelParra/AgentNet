import { Routes, Route, Navigate } from "react-router-dom";
import { AgentDashboard } from "./pages/AgentDashboard/AgentDashboard";
import { Authentication } from "./pages/Authentication/Authentication";
import {  } from "./pages/LandingPage/LandingPage";
import React from "react";

// Utilidad para verificar si el usuario está autenticado
const isUserAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Componente de protección de ruta
const PrivateRoute = ({ element, path }) => {
  if (isUserAuthenticated()) {
    // Si el usuario está autenticado y trata de acceder a la página de inicio de sesión, redirigir al dashboard
    if (path.includes("/auth/login")) {
      return <Navigate to="/dashboard" replace />;
    }
    return element; // Permitir el acceso normal a otras rutas autenticadas
  } else {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión solo si la ruta es /auth/login
    if (path === "/auth/login") {
      return element;
    } else {
      // Si el usuario no está autenticado y trata de acceder a otras rutas protegidas, redirigir a la página de inicio de sesión con la información de la ruta
      return <Navigate to="/auth/login" replace state={{ from: path }} />;
    }
  }
};

function App() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={isUserAuthenticated() ? <Navigate to="/dashboard" replace /> : <Authentication />}
      />
      <Route
        path="/dashboard/*"
        element={<PrivateRoute element={<AgentDashboard />} path="/dashboard/*" />}
      />
    </Routes>
  );
}

export default App;