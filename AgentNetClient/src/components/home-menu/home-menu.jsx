import React from "react";
import image1 from "./images-home/image1.jpg";
import image2 from "./images-home/image2.jpg";
import image3 from "./images-home/image3.jpg";
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
              src={image1}
              alt="Image home model"
            />
            <img
              id="slide-2"
              src={image2}
              alt="Image home model"
            />
            <img
              id="slide-3"
              src={image3}
              alt="Image home model"
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
    </div>
  );
}
