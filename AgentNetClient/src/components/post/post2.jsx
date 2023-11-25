"use client";

import React, { useState, useEffect, useRef } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import axios from "axios";

export function Post() {
  // MAPA
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [position, setPosition] = useState({
    lat: 10.9838092,
    lng: -74.8592172,
  });
  const [zoom, setZoom] = useState(12);

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "co" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  const handleMapClick = (event) => {
    // Obtén las coordenadas del clic
    const { lat, lng } = event.detail.latLng;

    // Crea un nuevo marcador en las coordenadas del clic
    setPosition({ lat, lng });

    // Obtener la dirección del lugar seleccionado (puedes usar la API de geocodificación inversa)
    getAddressFromLatLng(lat, lng);
  };

  const getAddressFromLatLng = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    const latLng = new window.google.maps.LatLng(lat, lng);

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const formattedAddress = results[0].formatted_address;
          setSelectedAddress(formattedAddress);
        }
      }
    });
  };
  //

  //POST
  const [state, setState] = useState({
    name: "",
    address: "",
    longitude: null,
    latitude: null,
    city: "",
    state: "",
    zip_code: null,
    price: null,
    beds: null,
    baths: null,
    sqft: null,
    description: "",
    lot_size: null,
    year_built: null,
    property_type: "",
    sale_type: "",
    is_published: false,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    profile: null,
  });

  const handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  //

  // IMAGENES
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesURLs, setSelectedImagesURLs] = useState([]);
  const handleImageChange = (e) => {
    this.setState({
        [e.target.id]: e.target.files[0],
    });
  };

  //

  //POST

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
  };

  //USEEFFECT

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    // Agrega un listener al evento place_changed
    autoCompleteRef.current.addListener("place_changed", async function () {
      const selectedPlace = await autoCompleteRef.current.getPlace();

      // Accede a las coordenadas (latitud y longitud)
      const { geometry } = selectedPlace;
      const { location } = geometry;
      const lat = location.lat();
      const lng = location.lng();
      setPosition({ lat, lng });
      setZoom(15);
    });
  }, []);

  //

  return (
    <div className="post-container">
      <div className="m-back">
        <Link to={"/dashboard/inmuebles/misinmuebles"} className="back">
          <i className="fi-rr-arrow-left"></i>
          <h1>Volver</h1>
        </Link>
      </div>
      <div className="main_title">
        <h1>Publicar un Inmueble</h1>
        <i className="fi-rr-square-info"></i>
      </div>

      <form className="form-box" onSubmit={handlePost}>
        <div className="form-images">
          <h2>Fotos</h2>
          <div className="images">
            {[1, 2, 3, 4, 5].map((index) => (
              <div className={`image image${index}`} key={index}>
                {selectedImagesURLs[index - 1] && (
                  <img
                    src={selectedImagesURLs[index - 1]}
                    alt={`Imagen ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                )}
                {!selectedImagesURLs[index - 1] && (
                  <>
                    <label htmlFor={`file${index}`}>
                      <i className="fi-rr-plus"></i>
                    </label>
                    <input
                      type="file"
                      id={`image${index}`}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="form-location">
          <h2>Ubicación</h2>
          <div className="search_box">
            <div className="search_bar">
              <input
                type="text"
                name="search_bar"
                id="address"
                placeholder="Buscar la dirección del inmueble"
                ref={inputRef}
                value={selectedAddress}
                onChange={handleChange}
              />
              <i className="fi-rr-search"></i>
            </div>
            <div className="places-container"></div>

            <h2>Tags</h2>
            <div className="search_bar_tags">
              <input
                type="text"
                name="search_tag"
                id="search_tag"
                placeholder="Escribe una palabra clave"
              />
              <i className="fi-rr-search"></i>
            </div>
            <div className="tag-list">
              <div className="tag">
                Bogotá <i className="fi-rr-cross-small"></i>
              </div>
              <div className="tag">
                Departamento <i className="fi-rr-cross-small"></i>
              </div>
              <div className="tag">
                Nuevo <i className="fi-rr-cross-small"></i>
              </div>
            </div>
          </div>

          <div className="map">
            <APIProvider
              apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <Map
                zoom={zoom}
                center={position}
                onClick={handleMapClick} // Agrega el listener al evento onClick
                id="map1"
                mapId={import.meta.env.VITE_REACT_APP_GOOGLE_MAP_ID}
              >
                <AdvancedMarker ref={markerRef} position={position} />{" "}
              </Map>
            </APIProvider>
          </div>
        </div>

        <div className="form-details">
          <h2>Datos Generales</h2>
          <div className="detail-input">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Escribe un título para tu inmueble"
              onChange={handleChange}
              required
            />
          </div>

          <div className="detail-input">
            <label htmlFor="property-type">Tipo de inmueble</label>
            <select name="property-type" id="property_type" onChange={this.handleChange}>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
              <option value="oficina">Oficina</option>
              <option value="local">Local</option>
              <option value="lote">Lote</option>
            </select>
          </div>

          <div className="detail-input">
            <label htmlFor="rooms">Zip Code</label>
            <input
              type="number"
              name="ZipCode"
              id="zip_code"
              placeholder="Escribe el Zip Code"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Escribe el precio"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="beds">Habitaciones</label>
            <input
              type="number"
              name="beds"
              id="beds"
              placeholder="Escribe el número de habitaciones"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="baths">Baños</label>
            <input
              type="number"
              name="baths"
              id="baths"
              placeholder="Escribe el número de baños"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="sqft">Sqft</label>
            <input
              type="number"
              name="sqft"
              id="sqft"
              placeholder="Escribe el Sqft"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="year_built">Año de construcción</label>
            <input
              type="number"
              name="year_built"
              id="year_built"
              placeholder="Escribe el año de construcción"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="sale-type">Tipo de operación</label>
            <select name="sale-type" id="sale_type" onChange={this.handleChange}>
              <option value="sale">Vender</option>
              <option value="rent">Arrendar</option>
            </select>
          </div>

          <div className="detail-input">
            <label htmlFor="total-area">Area</label>
            <input
              type="number"
              name="total-area"
              id="lot_size"
              placeholder="Escribe el área total"
              onChange={this.handleChange}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="build-area">Area Construida</label>
            <input
              type="number"
              name="build-area"
              id="build-area"
              placeholder="Escribe el área total construida"
              onChange={(e) => setBuildArea(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="rooms">Habitaciones</label>
            <input
              type="number"
              name="rooms"
              id="rooms"
              placeholder="Escribe el número de habitaciones"
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="bathrooms">Baños</label>
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              placeholder="Escribe el número de baños"
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="garage">Garaje</label>
            <input
              type="number"
              name="garage"
              id="garage"
              placeholder="Escribe el número de garajes"
              onChange={(e) => setGarage(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Breve descripción"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}
