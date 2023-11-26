import React, { useState } from "react";
import "./top-bar.css";

export function TopBar(profile) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleLogout = () => {
    // Lógica para cerrar sesión, por ejemplo, limpiar el token del localStorage.
    localStorage.removeItem('token');
    setPopupOpen(false);
    // Redirigir a la página de inicio de sesión.
    window.location.href = "/auth/login";
  };

  return (
    <div className="nav-bar2">
      <div className="right-nav-bar">
        <ul>
          <li>
            <a className="notify" href="#">
              <i className="fi-rr-bell"></i>
            </a>
          </li>
          <li>
            <a
              className="username"
              href="#"
              onClick={() => setPopupOpen(true)}
            >
              <h3>{profile?.profile?.FirstName}</h3>
            </a>
          </li>
          <li>
            <a className="userimg" href="#">
              <i className="fi-rr-portrait" onClick={() => setPopupOpen(true)}></i>
            </a>
          </li>
          <li>
            <a className="menu" href="#">
              <i className="fi-rr-menu-burger"></i>
            </a>
          </li>
        </ul>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>Estás seguro de que deseas cerrar sesión?</p>
            <button onClick={handleLogout}>Sí, cerrar sesión</button>
            <button onClick={() => setPopupOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
