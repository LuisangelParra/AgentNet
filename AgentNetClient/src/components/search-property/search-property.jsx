import React, { useState, useEffect } from "react";
import "./search-property.css";
import { PropertCard } from "../property-card/property-card";

export function SearchProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Función para obtener las propiedades de la API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/houses?is_published=${true}`
        );

        if (response.ok) {
          const data = await response.json();
          setProperties(data.results);
        } else {
          console.error("Error al obtener propiedades");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    // Llamar a la función para obtener propiedades al cambiar la pestaña activa
    fetchProperties();
  }, []);

  return (
    <div className="search-container">
      <div className="title">
        <h1>Buscar Inmueble</h1>
      </div>
      <div className="search-box">
        <div className="search-bar">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Busca aqui por nombre, apellido, empresa, etc."
          />
          <i className="fi-rr-search"></i>
        </div>
        <div className="search-button">Filtrar</div>
      </div>
      <ul className="home-list">
        
          {properties.map((property, index) => (
            <li className="card">
              <PropertCard key={index} {...property} />
            </li>
          ))}
        
      </ul>
    </div>
  );
}