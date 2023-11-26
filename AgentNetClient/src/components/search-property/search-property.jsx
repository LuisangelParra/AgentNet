import React, { useState, useEffect } from "react";
import "./search-property.css";
import { PropertCard } from "../property-card/property-card";

export function SearchProperty() {
  const [properties, setProperties] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [maxPagination, setMaxPagination] = useState(1);
  const [search, setSearch] = useState("");


  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
      setPagination(1);
    }
  }
  useEffect(() => {
    // Función para obtener las propiedades de la API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/houses?is_published=${true}&page=${pagination}&search=${search}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMaxPagination(Math.ceil(data.count / 8));
          setProperties(data.results);
        } else {
          console.error("Error al obtener propiedades");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    // Llamar a la función para obtener propiedades al cambiar la pestaña activa
    fetchProperties();
  }, [pagination, search]);

  return (
    <div className="search-container">
      <div className="title">
        <h1>Buscar Inmueble</h1>
      </div>
      <div className="search-box">
        <div className="search-bar">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Busca aqui por nombre, ciudad, etc."
            onKeyDown={handleSearch}
          />
          <i className="fi-rr-search"></i>
        </div>
        <div className="search-button">Filtrar</div>
      </div>
      <ul className="home-list">
        {properties.map((property, index) => (
          <li className="card" key={index}>
            <PropertCard {...property} />
          </li>
        ))}
      </ul>
              {/* Paginación */}

              <div className="pagination">
          <button
            className="pagination_button"
            disabled={pagination === 1 ? true : false}
            onClick={() => setPagination(pagination - 1)}
          >
            Anterior
          </button>
          <div className="number">{pagination}</div>
          <button
            className="pagination_button"
            disabled={pagination === maxPagination ? true : false}
            onClick={() => setPagination(pagination + 1)}
          >
            Siguiente
          </button>
        </div>
    </div>
  );
}
