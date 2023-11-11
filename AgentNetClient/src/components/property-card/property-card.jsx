import React from "react";
import "./property-card.css";

export function PropertCard() {
  return (
    <div className="card">
      <div className="image"></div>
      <div className="info">
        <h1>Name California Tree</h1>
        <div className="location">
          <i className="fi fi-rr-map-marker"></i>
          <h2 className="location-info">California, USA</h2>
        </div>
        <h2 className="price">$900.000.000</h2>
        <div className="extra-info">
          <div className="property-operation">
            <h3 className="operation">Operation</h3>
            <h3>Rent</h3>
          </div>
          <div className="v-line"></div>
          <div className="property-type">
            <h3 className="type">Type</h3>
            <h3>Commercial</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
