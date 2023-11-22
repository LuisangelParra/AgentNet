import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AgentDashboard.css";


// Import Components
import { LeftBar } from "../../components/left-bar/left-bar";
import { TopBar } from "../../components/top-bar/top-bar";
import { Routes, Route } from "react-router-dom";
import { HomeMenu } from "../../components/home-menu/home-menu";
import { RequestMenu } from "../../components/request-menu/request-menu";
import { PropertyMenu } from "../../components/property-menu/property-menu";
import { SearchProperty } from "../../components/search-property/search-property";
import { PostProperty } from "../../components/post-property/post-property";

export function AgentDashboard() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/test_token/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        setUserProfile(response.data.profile);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Manejar errores, como token expirado, etc.
      }
    };

    fetchUserData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className="dashboard">
      <TopBar profile={userProfile}/>
      <div className="container">
        <LeftBar />
        <div className="rutas">
          <Routes>
            <Route path="/" element={<HomeMenu profile={userProfile} />} />
            <Route path="/solicitudes" element={<RequestMenu />} />
            <Route path="/inmuebles" element={<PropertyMenu />} />
            <Route path="/inmuebles/busqueda" element={<SearchProperty />} />
            <Route path="/inmuebles/misinmuebles" element={<PostProperty />} />
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
    </div>
  );
}
