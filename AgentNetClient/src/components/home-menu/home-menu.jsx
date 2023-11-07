import React from "react";
import "./home-menu.css";

export function HomeMenu() {
  return (
    <div class="container-slider">
      <h1>Bienvenido, Luisangel</h1>
      <section class="sub-container">
        <div class="slider-wrapper">
          <div class="slider">
            <img
              id="slide-1"
              src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary orange planet in space"
            />
            <img
              id="slide-2"
              src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary green planet in space"
            />
            <img
              id="slide-3"
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary blue planet in space"
            />
          </div>
          <div class="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
    </div>
  );
}