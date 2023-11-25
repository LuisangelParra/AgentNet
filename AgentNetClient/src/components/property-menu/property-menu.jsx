import React from "react";
import "./property-menu.css";
import { Link } from "react-router-dom";

export function PropertyMenu() {
  return (
    <div className="property-container">
      <div className="title">
        <h1>Inmuebles</h1>
      </div>
      <div className="bottons-container">
        <Link to={"/dashboard/inmuebles/busqueda"} className="second_button">
          <i className="fi-rr-search search_icon"></i>
          <div className="second_title_botton">Buscar Inmuebles</div>
        </Link>

        <Link to={"/dashboard/inmuebles/misinmuebles"} className="second_button">
          <i className="fi-rr-home second_home_icon"></i>
          <div className="second_title_botton">Publicar un Inmueble</div>
        </Link>
      </div>
    </div>
  );
}

