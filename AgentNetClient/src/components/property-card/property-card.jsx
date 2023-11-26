import React from "react";
import "./property-card.css";

export function PropertCard(data) {
  return (
    <div className="card">
      <div className="image">
        <img src={data.image1} alt="" />
      </div>
      <div className="info">
        <h1>{data.name}</h1>
        <div className="location">
          <i className="fi fi-rr-map-marker"></i>
          <h2 className="location-info">{data.address}</h2>
        </div>
        <h2 className="price">${data.price}</h2>
        <div className="extra-info">
          <div className="property-operation">
            <h3 className="operation">Operation</h3>
            <h3>{data.sale_type}</h3>
          </div>
          <div className="v-line"></div>
          <div className="property-type">
            <h3 className="type">Type</h3>
            <h3>{data.property_type}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}