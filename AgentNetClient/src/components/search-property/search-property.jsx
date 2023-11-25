import React from "react";
import "./search-property.css";
import { PropertCard } from "../property-card/property-card";

export function SearchProperty() {
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
        <li className="card">
          <PropertCard />
        </li>
      </ul>
    </div>
  );
}
