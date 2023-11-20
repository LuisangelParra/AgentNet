import React from "react";
import "./home-menu.css";

export function HomeMenu(profile) {
  return (
    <div className="container-slider">
      <h1>Bienvenido, { profile?.profile?.FirstName }</h1>
      <section className="sub-container">
        <div className="slider-wrapper">
          <div className="slider">
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
          <div className="slider-nav">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </section>
    </div>
  );
}
