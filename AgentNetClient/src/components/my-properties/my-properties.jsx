import React, { useState, useEffect } from "react";
import "./my-properties.css";
import { Link } from "react-router-dom";

export function MyProperties() {
  const profileId = localStorage.getItem("profileID")
  const [activeTab, setActiveTab] = useState("Publicados");
  const [properties, setProperties] = useState([]);
  const [isPublished, setIsPublished] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [maxPagination, setMaxPagination] = useState(1);

  function handleTab() {
    if (activeTab === "Publicados") {
      setIsPublished(false);
      setPagination(1);
      setActiveTab("Borradores");
    } else {
      setPagination(1);
      setIsPublished(true);
      setActiveTab("Publicados");
    }
  }

  useEffect(() => {
    // Función para obtener las propiedades de la API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/houses?profile=${profileId}&is_published=${isPublished}&page=${pagination}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setMaxPagination(Math.ceil((data.count/9)));
          console.log(maxPagination)
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
  }, [activeTab, pagination]);

  return (
    <div className="my_property_container">
      <div className="main_title">
        <div className="title">
          <h1>Mis Inmuebles</h1>
          <i className="fi-rr-square-info"></i>
        </div>
        <Link to={"/dashboard/inmuebles/publicar"} className="Post">
          <h1>Publicar</h1>
          <i className="fi-rr-document"></i>
        </Link>
      </div>

      {/* Botones de pestaña */}
      <button
        className="tablink"
        id="tabPublicados"
        style={{
          backgroundColor:
            activeTab === "Publicados"
              ? "color_que_deseas_para_publicados"
              : "",
        }}
        disabled = {activeTab === "Publicados" ? true : false}
        onClick={() => handleTab()}
      >
        Publicados
      </button>
      <button
        className="tablink"
        id="tabBorradores"
        style={{
          backgroundColor:
            activeTab === "Borradores"
              ? "color_que_deseas_para_borradores"
              : "",
        }}
        disabled = {activeTab === "Borradores" ? true : false}
        onClick={() => handleTab()}
      >
        Borradores
      </button>

      <div>
        {/* Contenido de la pestaña "Publicados" */}
        {activeTab === "Publicados" && (
          <div id="Publicados" className="tabcontent">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="check_button"
                      />
                    </th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Anexos</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Insertar filas de datos aquí */}
                  {properties.map((property, index) => (
                    <tr key={index}>
                      {/* Aquí renderizas las celdas de la fila según tus necesidades */}
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="check_button"
                        />
                      </td>
                      <td>{property.name}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                      <td>
                        <div className="details_button_green">OCULTAR</div>
                      </td>
                      <td>
                        <div className="details_button_red">BORRAR</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginación */}
              <div className="pagination">
                <button className="pagination_button" disabled={pagination === 1 ? true:false} onClick={() => setPagination(pagination-1) }>Anterior</button>
                <div className="pagination">{pagination}</div>
                <button className="pagination_button" disabled={pagination === maxPagination ? true:false} onClick={() => setPagination(pagination+1)} >Siguiente</button>
              </div>
            </div>
            
          </div>
        )}

        {/* Contenido de la pestaña "Borradores" */}
        {activeTab === "Borradores" && (
          <div id="Borradores" className="tabcontent">

            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="check_button"
                      />
                    </th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Anexos</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Insertar filas de datos aquí */}
                  {properties.map((property, index) => (
                    <tr key={index}>
                      {/* Aquí renderizas las celdas de la fila según tus necesidades */}
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="check_button"
                        />
                      </td>
                      <td>{property.name}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                      <td>
                        <div className="details_button_green">PUBLICAR</div>
                      </td>
                      <td>
                        <div className="details_button_red">BORRAR</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginación */}
              <div className="pagination">
                <button className="pagination_button" disabled={pagination === 1 ? true:false} onClick={() => setPagination(pagination-1) }>Anterior</button>
                <div className="pagination">{pagination}</div>
                <button className="pagination_button" disabled={pagination === maxPagination ? true:false} onClick={() => setPagination(pagination+1)} >Siguiente</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
