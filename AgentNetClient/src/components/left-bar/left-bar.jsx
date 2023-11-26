import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./left-bar.css";

export function LeftBar() {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (event, item) => {
    event.preventDefault();
    setSelectedItem(item);
  };

  return (
    <ul id="menu" className="left_bar">
      <li
        onClick={(event) => handleItemClick(event, 1)}
        className={selectedItem === 1 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/"}>
          <i className="fi fi-rr-home"></i>
          <h2 className="option">Inicio</h2>
        </Link>
      </li>

      
      <li
        onClick={(event) => handleItemClick(event, 3)}
        className={selectedItem === 3 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/inmuebles"}>
          <i className="fi fi-rr-building"></i>
          <h2 className="option">Inmuebles</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 2)}
        className={selectedItem === 2 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/solicitudes"}>
          <i className="fi fi-rr-envelope"></i>
          <h2 className="option">Solicitudes</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 4)}
        className={selectedItem === 4 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/colecciones"}>
          <i className="fi fi-rr-box"></i>
          <h2 className="option">Colecciones</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 5)}
        className={selectedItem === 5 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/busquedas"}>
          <i className="fi fi-rr-plus-small"></i>
          <h2 className="option">Busquedas</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 6)}
        className={selectedItem === 6 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/transacciones"}>
          <i className="fi fi-rr-book"></i>
          <h2 className="option">Transacciones</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 7)}
        className={selectedItem === 7 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/red"}>
          <i className="fi fi-rr-chart-network"></i>
          <h2 className="option">Red</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 8)}
        className={selectedItem === 8 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/reseñas"}>
          <i className="fi fi-rr-comment-check"></i>
          <h2 className="option">Reseñas</h2>
        </Link>
      </li>

      <li
        onClick={(event) => handleItemClick(event, 9)}
        className={selectedItem === 9 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/herramientas"}>
          <i className="fi fi-rr-stats"></i>
          <h2 className="option">Herraminetas</h2>
        </Link>
      </li>
      <hr className="line" />
      <li
        onClick={(event) => handleItemClick(event, 10)}
        className={selectedItem === 10 ? "seleccionado" : ""}
      >
        <Link to={"/dashboard/configuración"}>
            <i className="fi fi-rr-settings"></i>
            <h2 className="option">Configuración</h2>
        </Link>
      </li>
    </ul>
  );
}
