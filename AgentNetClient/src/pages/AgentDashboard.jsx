import { LeftBar } from "../components/left-bar/left-bar";
import { TopBar } from "../components/top-bar/top-bar";
import { Routes, Route } from "react-router-dom";
import "./AgentDashboard.css";

export function AgentDashboard() {
  return (
    <div className="dashboard">
      <div>
        <TopBar />
      </div>
      <div className="main">
        <LeftBar />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/solicitudes" element={<h1>Solicitudes</h1>} />
          <Route path="/inmuebles" element={<h1>Inmuebles</h1>} />
          <Route path="/colecciones" element={<h1>Colecciones</h1>} />
          <Route path="/busquedas" element={<h1>Busquedas</h1>} />
          <Route path="/transacciones" element={<h1>Transacciones</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
          <Route path="/reseñas" element={<h1>Reseñas</h1>} />
          <Route path="/herramientas" element={<h1>Herramientas</h1>} />
          <Route path="/configuración" element={<h1>Configuración</h1>} />
        </Routes>
      </div>
    </div>
  );
}
