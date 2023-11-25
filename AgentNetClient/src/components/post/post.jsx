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
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState("apartamento");
  const [saleType, setSaleType] = useState("Vender");
  const [totalArea, setTotalArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("10.9838092");
  const [lng, setLng] = useState("-74.8592172");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [sqft, setSqft] = useState("");
  const [year_built, setYear_built] = useState("");
  const [selectedImagesURLs, setSelectedImagesURLs] = useState([]);


  const [markerRef, marker] = useAdvancedMarkerRef();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [position, setPosition] = useState({
    lat: 10.9838092,
    lng: -74.8592172,
  });
  const [zoom, setZoom] = useState(12);
  
  const handleImageChange = (e, index) => {
    const files = [];
    files.push(e);

    setImages(files)

    if (files.length > 0) {
      // Obtén las URLs de las imágenes seleccionadas
      const imageURL = URL.createObjectURL(e);

      // Actualiza el estado de las imágenes seleccionadas
      setSelectedImagesURLs((prevURLs) => {
        const newURLs = [...prevURLs];
        newURLs[index - 1] = imageURL;
        return newURLs;
      });

      setSelectedImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index - 1] = files[0];
        return newImages;
      });
    }
  };

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

          // Obtén la ciudad y el estado
          const addressComponents = results[0].address_components;
          const city = addressComponents.find(
            (component) => component.types[0] === "locality"
          );
          const state = addressComponents.find(
            (component) => component.types[0] === "administrative_area_level_1"
          );
          setCity(city.long_name);
          setState(state.long_name);
        }
      }
    });
  };

  //

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/houses/",
        {
          name: title,
          address: selectedAddress,
          longitude: position.lng,
          latitude: position.lat,
          city: city,
          state: state,
          zip_code: zip_code,
          price: price,
          beds: rooms,
          baths: bathrooms,
          sqft: sqft,
          description: description,
          lot_size: totalArea,
          year_built: year_built,
          property_type: propertyType,
          sale_type: saleType,
          image1: images[0],
          image2: images[1],
          image3: images[2],
          image4: images[3],
          image5: images[4],
          profile: localStorage.getItem("profileID"),
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            'content-type': 'multipart/form-data'
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error de Post:", error.response.data);
    }
  };

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
                    style={{ width: "100%", height: "100%", objectFit: "cover" , borderRadius: "10px"}}
                  />
                )}
                {!selectedImagesURLs[index - 1] && (
                  <>
                    <label htmlFor={`file${index}`}>
                      <i className="fi-rr-plus"></i>
                    </label>
                    <input
                      type="file"
                      id={`file${index}`}
                      onChange={(e) => handleImageChange(e.target.files[0], index)}
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
                id="search_bar"
                placeholder="Buscar la dirección del inmueble"
                ref={inputRef}
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="property-type">Tipo de inmueble</label>
            <select
              name="property-type"
              id=""
              onChange={(e) => setPropertyType(e.target.value)}
            >
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
              id="ZipCode"
              placeholder="Escribe el Zip Code"
              onChange={(e) => setZip_code(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Escribe el precio"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="beds">Habitaciones</label>
            <input
              type="number"
              name="beds"
              id="beds"
              placeholder="Escribe el número de habitaciones"
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="baths">Baños</label>
            <input
              type="number"
              name="baths"
              id="baths"
              placeholder="Escribe el número de baños"
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="sqft">Sqft</label>
            <input
              type="number"
              name="sqft"
              id="sqft"
              placeholder="Escribe el Sqft"
              onChange={(e) => setSqft(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="year_built">Año de construcción</label>
            <input
              type="number"
              name="year_built"
              id="year_built"
              placeholder="Escribe el año de construcción"
              onChange={(e) => setYear_built(e.target.value)}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="sale-type">Tipo de operación</label>
            <select
              name="sale-type"
              id="sale-type"
              onChange={(e) => setSaleType(e.target.value)}
            >
              <option value="Venta">Vender</option>
              <option value="Arriendo">Arrendar</option>
            </select>
          </div>

          <div className="detail-input">
            <label htmlFor="total-area">Area</label>
            <input
              type="number"
              name="total-area"
              id="total-area"
              placeholder="Escribe el área total"
              onChange={(e) => setTotalArea(e.target.value)}
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
